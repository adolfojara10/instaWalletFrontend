import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrestamoWS } from '../domain/prestamos';

@Injectable({
  providedIn: 'root'
})
export class AprovacionwsService {

  constructor(private http: HttpClient) { }

  getPrestamo(){
    let url = environment.WS_PATH+'/cuenta/prestamos';
    return this.http.get<any>(url);
  }

  aprovarPrestamo(aprovacionPRestamo: PrestamoWS){
    
    let url = environment.WS_PATH+'/cuenta/Aprovar?id='+aprovacionPRestamo.id+'&estado='+aprovacionPRestamo.estado;
    return this.http.post<any>(url,aprovacionPRestamo);
  }
}
