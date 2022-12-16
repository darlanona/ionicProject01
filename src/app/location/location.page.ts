import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LocationService } from '../servicios/location.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  tiempo = 3;
  id= 1709039810;
  latitud: any ;
  longitud: any;
  intervalo: any;
  constructor(private locationService : LocationService,    private loadingCtrl : LoadingController, private geolocation : Geolocation,) { }

  async ngOnInit() {

  }

  iniciar(){
    console.log("iniciando captura: ",this.id);
    console.log("iniciando captura: ",this.tiempo);
    this.intervalo= setInterval(()=>{this.obtenerUbicacionWeb()}, 1000*this.tiempo);
  }


   capturaCoord() {
 
     console.log("captura coordenadas");
     let form = {
      'latitud':this.latitud, 
      'longitud':this.longitud,
      'id':this.id,
      'tiempo':this.tiempo};
      console.log('form:',form)
     this.locationService.createLocation(form).subscribe(resp=>{
      console.log("resp:",resp);
     })
  }

  finalizar(){
    console.log("detenido....");
    clearInterval(this.intervalo)
  }

  obtenerUbicacionWeb(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      this.capturaCoord();
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
