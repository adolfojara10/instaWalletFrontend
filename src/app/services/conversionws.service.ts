import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { conversionM } from '../domain/conversionws';

@Injectable({
  providedIn: 'root'
})
export class ConversionwsService {

  constructor(private http: HttpClient) { }

  guardar(conversion: conversionM){
    let url = environment.WS_PATH+'/cuenta/monedaC?moneda='+conversion.moneda+'&'+'cantidad='+conversion.cantidad;
    return this.http.post<any>(url, conversion);
  }
}
