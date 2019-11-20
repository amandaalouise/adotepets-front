import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { PerdidoService } from 'src/app/services/perdido.service';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perdido',
  templateUrl: './perdido.component.html',
  styleUrls: ['./perdido.component.scss']
})
export class PerdidoComponent implements OnInit {

  anuncioPerdido: AnuncioPerdido = new AnuncioPerdido();
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: any = [];
  animal: Animal = new Animal();
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  geoCoder: any;

  usuario: Usuario = new Usuario();

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;
  
  anuncioForm: FormGroup;

  constructor(public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public router: Router,
    private formBuilder: FormBuilder) { 
      this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);   
      this.anuncioForm.controls.tipo.setValue("cachorro"); 
      this.anuncioForm.controls.sexo.setValue("macho");
      this.anuncioForm.controls.porte.setValue("Pequeno");
      this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");     
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      tipo: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      raca: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
      cor: new FormControl('', Validators.required),
      porte: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }


  ngOnInit() {

    if(this.autenticacaoService.currentUserValue != null) {
      this.usuario = this.autenticacaoService.currentUserValue;
    } else {
      this.router.navigate(['/']);
    }

    this.setCurrentLocation();

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
    this.animal.idade = this.anuncioForm.value.idade;
    this.animal.raca = this.anuncioForm.value.raca;

    this.anuncioPerdido.animal = this.animal;
    this.anuncioPerdido.animal.usuario = this.usuario;
    this.anuncioPerdido.cidade = "Foz do Iguaçu";
    this.anuncioPerdido.estado = "Paraná";
    this.anuncioPerdido.lng = this.longitude;
    this.anuncioPerdido.lat = this.latitude;

    this.cadastrarPerdido();
  }

  updateFileInput() {
    let input = document.getElementById("file");
    let list = new DataTransfer();
    for(const [value] of this.files.entries()) {
      list.items.add(value);
    }

    let myFileList = list.files;
    (<HTMLInputElement>input).files = myFileList;
    
  }

  markerDragEnd($event: AGMMouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
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
        this.previewUrl.push(reader.result);
      }
    });
  }

  cadastrarPerdido() {
    this.formDataFiles = Array.from(this.files.values());
    this.anuncioPerdido.lat = this.latitude;
    this.anuncioPerdido.lng = this.longitude;

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.anuncioPerdido));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.perdidoService.registerPerdido(formData).subscribe(data => {
      if(data.ok) {
        this.router.navigate(['/dashboard/perdido']);
      }
    });
  }
}
