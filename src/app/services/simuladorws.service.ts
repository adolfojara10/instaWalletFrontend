import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { simuladorAhorro } from '../domain/simulador';

@Injectable({
  providedIn: 'root'
})
export class SimuladorwsService {

  constructor(private http: HttpClient) { }

  simular(simulador: simuladorAhorro){
    let url = environment.WS_PATH + '/cuenta/rendimientoCuenta?monto='+simulador.monto+'&tiempo='+simulador.tiempo;
    return this.http.post<any>(url, simulador);
  }
}
