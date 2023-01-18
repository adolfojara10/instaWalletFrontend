import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { simuladorAhorro } from '../domain/simulador';
import { Observable } from 'rxjs';
import { CuotaCreditoWS } from '../domain/cuotaCredito';

@Injectable({
  providedIn: 'root'
})
export class TablaAmortizacionwsService {

  constructor(private http: HttpClient) { }

  simular(simulador: simuladorAhorro):Observable<CuotaCreditoWS[]>{
    //let url = "http://localhost:8080/instawallet/credito/tabla-amortizacion?numeroDeCuotas=12&valorCredito=2000";
    let url = environment.WS_PATH + '/credito/tabla-amortizacion?numeroDeCuotas='+simulador.tiempo+'&valorCredito='+simulador.monto;
    return this.http.get<CuotaCreditoWS[]>(url);
  }
}