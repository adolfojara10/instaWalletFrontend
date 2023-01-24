import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleCuenta } from 'src/app/domain/detalleCuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetalleCuentaService {

  constructor(private http: HttpClient) { }

  crearDetalleCuenta(detalleCuenta: DetalleCuenta){
    let url = environment.WS_PATH + '/detalleCuenta/detalleCuenta';
    const headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(detalleCuenta);
    console.log(body);



    return this.http.post(url , body, {
      headers: headers,
      observe: 'response'
    })
    //return this.http.post('http://localhost:8080/instawallet/cuenta/', cuenta);
  }
}
