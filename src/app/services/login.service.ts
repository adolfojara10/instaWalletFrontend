import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../domain/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  iniciar_sesion(login: Login){
    let url = environment.WS_PATH + '/cuenta/iniciarSesion?correo='+login.correo+'&password='+login.password;
    return this.http.get(url);
  }

}
