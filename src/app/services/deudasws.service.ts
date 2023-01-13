import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { deudasWs } from '../domain/deudas';

@Injectable({
  providedIn: 'root'
})
export class DeudaswsService {

  constructor(private http: HttpClient) { }

  pagarDeuda(deeudas: deudasWs){
    let url = environment.WS_PATH+'/cuenta/pagoPrestamo?idPrestamo='+deeudas.id+'&tipoDeuda=Servicio';
    return this.http.post<any>(url, deeudas);    
  }

  pagarDeudaPrestamos(deeudas: deudasWs){
    let url = environment.WS_PATH+'/cuenta/pagoPrestamo?idPrestamo='+deeudas.id+'&tipoDeuda=Prestamo';
    return this.http.post<any>(url, deeudas);    
  }

  getDeduda(){
    let url = environment.WS_PATH+'/cuenta/cargarDeuda';
    return this.http.get<any>(url);
  }

  getDedudaPrestamo(){
    let url = environment.WS_PATH+'/cuenta/cargarDeudaPrestamos';
    return this.http.get<String>(url);
  }
}
