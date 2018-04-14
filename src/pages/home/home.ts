import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listado;
  constructor(public navCtrl: NavController, private http: HttpClient) {
    this.cargarInformacion();
  }

  cargarInformacion() {
    this.http.get("http://localhost/micrudtutoapp/src/api/productos.php?opcion=1").subscribe(snap => {
      console.log(snap);
      this.listado = snap;
    });
  }

  goRegistrar() {
    this.navCtrl.push(AgregarPage, { "parentPage": this });
  }

}
