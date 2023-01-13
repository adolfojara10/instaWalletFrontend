import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { personaS } from '../domain/persona';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaswsService {

  constructor(private http: HttpClient) { 
    console.log("trans")
  }
  
  getUserSesion(){
    //let header = new HttpHeaders();
    let url = environment.WS_PATH+'/cuenta/CargarUs';
    return this.http.get<any>(url);
    //return this.http.get<any>(url, {
    //  headers: header
    //})
  }

  getUserSesionSaldo(){
    let url = environment.WS_PATH+'/cuenta/CargarUsSaldo';
    return this.http.get<number>(url);
  }

  getReceptorCed(personaB: personaS){
    let url = environment.WS_PATH+'/cuenta/cedulaBusc?cedulab='+personaB.cedula;
    return this.http.post<any>(url,personaB);
  }

  transferir(personaB: personaS){
    let url = environment.WS_PATH+'/cuenta/transferir?cedulaR='+personaB.cedula+'&montoT='+personaB.monto;
    return this.http.post<String>(url, personaB);
  }
}
