import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from 'src/app/domain/cuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaServiceService {

  constructor(private http: HttpClient) {
  }

  crearCuenta(cuenta: Cuenta){
    let url = environment.WS_PATH + '/cuenta/';
    const headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(cuenta);
    console.log(body);



    return this.http.post(url , body, {
      headers: headers,
      observe: 'response'
    })
    //return this.http.post('http://localhost:8080/instawallet/cuenta/', cuenta);
  }

}
