import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/domain/login';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  iniciar_sesion(){
    console.log("Simulaaaaaaaaaaaaaaaar")
    this.loginService.iniciar_sesion(this.login).subscribe((data) => {
      console.log(data);
      
    })

  }

}
