import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-encontrado',
  templateUrl: './encontrado.component.html',
  styleUrls: ['./encontrado.component.scss']
})
export class EncontradoComponent implements OnInit {

  anuncioEncontrado: AnuncioEncontrado = new AnuncioEncontrado();
  animal: Animal = new Animal();
  files: Map<any, File> = new Map();
  formDataFiles: Array<File> = [];
  previewUrl: Map<any, any> = new Map();
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  geoCoder: any;
  usuario: Usuario = new Usuario();

  anuncioForm: FormGroup;

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public router: Router,
    private formBuilder: FormBuilder) { 
      this.anuncioForm = this.createFormGroupWithBuilder(this.formBuilder);
      this.anuncioForm.controls.tipo.setValue("cachorro"); 
      this.anuncioForm.controls.sexo.setValue("macho");
      this.anuncioForm.controls.resgatado.setValue("false");
      this.anuncioForm.controls.porte.setValue("Pequeno");
      this.anuncioForm.controls.idade.setValue("Filhote (0 a 2 anos)");
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

  onSubmit() {
    this.animal.tipo = this.anuncioForm.value.tipo;
    this.animal.cor = this.anuncioForm.value.cor;
    this.animal.descricao = this.anuncioForm.value.descricao;
    this.animal.nome = this.anuncioForm.value.nome;
    this.animal.porte = this.anuncioForm.value.porte;
    this.animal.sexo = this.anuncioForm.value.sexo;
    this.animal.idade = this.anuncioForm.value.idade;
    this.animal.raca = this.anuncioForm.value.raca;

    this.anuncioEncontrado.animal = this.animal;
    this.anuncioEncontrado.resgatado = this.anuncioForm.value.resgatado;
    this.anuncioEncontrado.animal.usuario = this.usuario;
    this.anuncioEncontrado.cidade = "Foz do Iguaçu";
    this.anuncioEncontrado.estado = "Paraná";
    this.anuncioEncontrado.lat = this.latitude;
    this.anuncioEncontrado.lng = this.longitude;

    this.cadastrarEncontrado();
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
        this.previewUrl.set(element.name, reader.result);
      }
    });
  }


  cadastrarEncontrado() {
    this.formDataFiles = Array.from(this.files.values());

    const formData = new FormData();
    formData.append('value', JSON.stringify(this.anuncioEncontrado));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.encontradoService.registerEncontrado(formData).subscribe(data => {
      if(data.ok) {
        this.router.navigate(['/dashboard/encontrado']);
      }
    });
  }
}
