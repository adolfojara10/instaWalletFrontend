import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credito } from '../domain/creditows';

@Injectable({
  providedIn: 'root'
})
export class CreditowsService {

  constructor(private http: HttpClient) { }

  solicitar(credito: Credito){
    let url = environment.WS_PATH + '/credito/';
    return this.http.post<any>(url, credito);
  }

  findAllPendientes(){
    let url = environment.WS_PATH + '/credito/findAllPendientes';
    return this.http.get<any>(url);
  }

  aprobarRechazarCredito(id:number, aprobarRechazar:string){
    let url = environment.WS_PATH + '/credito/aprobar-rechazar-credito?id='+id+"&aprobarRechazar="+aprobarRechazar;
    return this.http.post<any>(url, id);
  }

}
