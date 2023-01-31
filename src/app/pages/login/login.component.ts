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

    

    this.loginService.iniciar_sesion(this.login).subscribe((data) => {
      console.log(data);
      console.log("Simulaaaaaaaaaaaaaaaar")
      console.log("Correo " + this.login.correo)
      localStorage.setItem("Usuario",this.login.correo)
      alert("Bienvenido")
      this.router.navigate(["libretadeAhorros"]).then(()=>{
        window.location.reload();
      });
      
    })

  }

}
