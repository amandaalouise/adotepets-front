import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { PerdidoService } from 'src/app/services/perdido.service';
import { Animal } from 'src/app/model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perdido-edit',
  templateUrl: './perdido-edit.component.html',
  styleUrls: ['./perdido-edit.component.scss']
})
export class PerdidoEditComponent implements OnInit {

  anuncioPerdido: AnuncioPerdido
  animal: Animal;
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: Map<any, any> = new Map();
  perdidoId: number;
  imgToDelete: any = new Array();

  latitude: number;
  longitude: number;
  zoom: number = 12;
  address: string;
  geoCoder: any;
  
  anuncioForm: FormGroup;
  
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(
    public activatedRoute: ActivatedRoute,
    public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService,
    public router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private formBuilder: FormBuilder) { 
      this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);        
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      tipo: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      resgatado: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      porte: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.perdidoId = this.activatedRoute.snapshot.params.id;
    this.getPerdido(this.perdidoId);

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  onSubmit() {
    this.animal.tipo = this.anuncioForm.value.tipo;
    this.animal.cor = this.anuncioForm.value.cor;
    this.animal.descricao = this.anuncioForm.value.descricao;
    this.animal.nome = this.anuncioForm.value.nome;
    this.animal.porte = this.anuncioForm.value.porte;
    this.animal.sexo = this.anuncioForm.value.sexo;
    this.animal.raca = this.anuncioForm.value.raca;
    this.animal.idade = this.anuncioForm.value.idade;

    this.anuncioPerdido.animal = this.animal;
    this.anuncioPerdido.cidade = "Foz do Iguaçu";
    this.anuncioPerdido.estado = "Paraná";
    this.anuncioPerdido.lng = this.longitude;
    this.anuncioPerdido.lat = this.latitude;

    this.editaEncontrado();
  }

  getPerdido(id: any) {
    return this.perdidoService.getPerdidoById(id).then(perdido => {
      this.anuncioPerdido = perdido;
      this.animal = this.anuncioPerdido.animal;

      this.animal = this.anuncioPerdido.animal;
      this.latitude = this.anuncioPerdido.lat;
      this.longitude = this.anuncioPerdido.lng;

      this.anuncioForm.controls.tipo.setValue(this.anuncioPerdido.animal.tipo); 
      this.anuncioForm.controls.sexo.setValue(this.anuncioPerdido.animal.sexo);
      this.anuncioForm.controls.porte.setValue(this.anuncioPerdido.animal.porte);
      this.anuncioForm.controls.idade.setValue(this.anuncioPerdido.animal.idade);
      this.anuncioForm.controls.nome.setValue(this.anuncioPerdido.animal.nome);
      this.anuncioForm.controls.cor.setValue(this.anuncioPerdido.animal.cor);
      this.anuncioForm.controls.raca.setValue(this.anuncioPerdido.animal.raca);

      if (this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
        this.router.navigate(['/']);
      }
    });
  }

  addFiles(fileInput: any) {
    const arr = [...fileInput.target.files];
    arr.forEach(element => {
      this.files.set(element.name, element);
    });

    this.preview(fileInput);
  }

  removeFile(fileName: any) {
    this.files.delete(fileName);
    this.previewUrl.delete(fileName);
    this.updateFileInput();
  }

  removeExistingFile(fileName: any) {
    this.imgToDelete.push(fileName);

    this.removeElement(this.animal.imagens, fileName);
  }

  preview(fileInput) {
    const arr = [...fileInput.target.files];
    arr.forEach(element => {
      var mimeType = element.type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (_event) => {
        this.previewUrl.set(element.name, reader.result);
      }
    });
  }

  updateFileInput() {
    let input = document.getElementById("file");
    let list = new DataTransfer();
    for (const [value] of this.files.entries()) {
      list.items.add(value);
    }

    let myFileList = list.files;
    (<HTMLInputElement>input).files = myFileList;
  }

  editaEncontrado() {
    this.formDataFiles = Array.from(this.files.values());

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.anuncioPerdido));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.imgToDelete.forEach(element => {
      formData.append('delete', element);
    })

    this.perdidoService.editPerdido(formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard/perdido']);
      }
    });
  }

  removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  markerDragEnd($event: AGMMouseEvent) {
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

}
