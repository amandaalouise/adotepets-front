import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { AnuncioEncontrado } from 'src/app/model/anuncioEncontrado.model';
import { EncontradoService } from 'src/app/services/encontrado.service';
import { Animal } from 'src/app/model/animal.model';
import { Usuario } from 'src/app/model/usuario.model';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';

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

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(public autenticacaoService: AutenticacaoService,
    public encontradoService: EncontradoService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.animal.usuario = new Usuario();
    this.animal.usuario.id = this.autenticacaoService.currentUserValue.id;
    this.anuncioEncontrado.animal = this.animal;
    this.anuncioEncontrado.cidade = "Foz do Iguaçu";
    this.anuncioEncontrado.estado = "Paraná";

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

  updateFileInput() {
    let input = document.getElementById("file");
    let list = new DataTransfer();
    for(const [key, value] of this.files.entries()) {
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
    console.log(arr);
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
    formData.append('value', JSON.stringify(this.encontradoService));

    this.formDataFiles.forEach(element => {
      formData.append('files', element);
    });

    this.encontradoService.registerEncontrado(formData).subscribe(data => {
      console.log(data);
    });
  }
}
