import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/domain/cuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaServiceService {
  cuentas:Cuenta[]=[];
 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) {
  }

  crearCuenta(cuenta: Cuenta) {
    let url = environment.WS_PATH + '/cuenta/';
    const headers = { 'content-type': 'application/json' };
    let body = JSON.stringify(cuenta);
    console.log(body);



    return this.http.post(url, body, {
      headers: headers,
      observe: 'response'
    })
    //return this.http.post('http://localhost:8080/instawallet/cuenta/', cuenta);
  }

  obtenerCuentas(): Observable<any> { 
    //Metodo Get
    let finalUrl = environment.WS_PATH + '/cuenta/listarCuentas';
    console.log("finalUrl")
    return this.http.get<Cuenta>(finalUrl,this.httpOptions);
  }

 

}
