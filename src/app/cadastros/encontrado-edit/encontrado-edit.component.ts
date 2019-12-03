import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { Animal } from 'src/app/model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Global } from 'src/app/global';

@Component({
  selector: 'app-encontrado-edit',
  templateUrl: './encontrado-edit.component.html',
  styleUrls: ['./encontrado-edit.component.scss']
})
export class EncontradoEditComponent implements OnInit {

  anuncioEncontrado: AnuncioEncontrado
  animal: Animal;
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: Map<any, any> = new Map();
  encontradoId: number;
  imgToDelete: any = new Array();
  url: any = Global.baseUrl;

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  geoCoder: any;

  anuncioForm: FormGroup;
  
  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(
    public activatedRoute: ActivatedRoute,
    public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService,
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
      raca: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.encontradoId = this.activatedRoute.snapshot.params.id;
    this.getEncontrado(this.encontradoId);

    this.zoom = 12;

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
          // this.setCurrentLocation();
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
    this.animal.idade = this.anuncioForm.value.idade;
    this.animal.raca = this.anuncioForm.value.raca;

    this.anuncioEncontrado.resgatado = this.anuncioForm.value.resgatado;
    this.anuncioEncontrado.animal = this.animal;
    this.anuncioEncontrado.cidade = "Foz do Iguaçu";
    this.anuncioEncontrado.estado = "Paraná";
    this.anuncioEncontrado.lat = this.latitude;
    this.anuncioEncontrado.lng = this.longitude;

    this.editaEncontrado();
  }

  getEncontrado(id: any) {
    return this.encontradoService.getEncontradoById(id).then(encontrado => {
      this.anuncioEncontrado = encontrado;
      this.animal = this.anuncioEncontrado.animal;

      this.animal = this.anuncioEncontrado.animal;
      this.latitude = this.anuncioEncontrado.lat;
      this.longitude = this.anuncioEncontrado.lng;

      this.anuncioForm.controls.tipo.setValue(this.anuncioEncontrado.animal.tipo); 
      this.anuncioForm.controls.sexo.setValue(this.anuncioEncontrado.animal.sexo);
      this.anuncioForm.controls.porte.setValue(this.anuncioEncontrado.animal.porte);
      this.anuncioForm.controls.idade.setValue(this.anuncioEncontrado.animal.idade);
      this.anuncioForm.controls.nome.setValue(this.anuncioEncontrado.animal.nome);
      this.anuncioForm.controls.cor.setValue(this.anuncioEncontrado.animal.cor);
      this.anuncioForm.controls.raca.setValue(this.anuncioEncontrado.animal.raca);
      this.anuncioForm.controls.descricao.setValue(this.anuncioEncontrado.animal.descricao);
      this.anuncioForm.controls.resgatado.setValue(this.anuncioEncontrado.resgatado.toString());

      if(this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
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
    formData.append('value', JSON.stringify(this.anuncioEncontrado));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.imgToDelete.forEach(element => {
      formData.append('delete', element);
    })

    this.encontradoService.editEncontrado(formData).subscribe(data => {
      if (data.ok) {
        this.router.navigate(['/dashboard/encontrado']);
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
