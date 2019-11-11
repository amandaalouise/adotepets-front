import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { AnuncioPerdido } from 'src/app/model/anuncioPerdido.model';
import { PerdidoService } from 'src/app/services/perdido.service';
import { Animal } from 'src/app/model/animal.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';

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

  @ViewChild('search', { static: false })
  public searchElementRef: ElementRef;

  constructor(
    public activatedRoute: ActivatedRoute,
    public autenticacaoService: AutenticacaoService,
    public perdidoService: PerdidoService,
    public router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

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

  getPerdido(id: any) {
    return this.perdidoService.getPerdidoById(id).then(doacao => {
      this.anuncioPerdido = doacao;
      this.animal = this.anuncioPerdido.animal;
      this.latitude = this.anuncioPerdido.lat;
      this.longitude = this.anuncioPerdido.lng;

      if (this.animal.usuario.id != this.autenticacaoService.currentUserValue.id) {
        this.router.navigate(['/']);
      }
    });
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
    console.log(this.animal);
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
        this.router.navigate(['/dashboard']);
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

}
