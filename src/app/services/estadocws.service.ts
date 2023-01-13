import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadocwsService {

  constructor(private http: HttpClient) {
    console.log("persona")
   }

  getEstado(){
    let header = new HttpHeaders();
    //let url = environment.WS_PATH+'/cuenta/saldo';
    let url = 'http://localhost:8080/ProyectoFinalBanco/webProy/cuenta/Saldo';
    //return this.http.get<number>(url); 
    return this.http.get<number>(url, {
      headers: header
    });
  }
}
