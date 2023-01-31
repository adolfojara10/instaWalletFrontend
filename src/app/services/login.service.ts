import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../domain/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  iniciar_sesion(login: Login):Observable<any>{
    console.log('En service ' +login)
    let url = environment.WS_PATH + '/usuario/findById/'+login.correo;
    return this.http.post<Login>(url,JSON.stringify(login));
  }

}
