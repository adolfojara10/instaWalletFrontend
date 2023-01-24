import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/domain/cuenta';
import { CrearCuentaServiceService } from 'src/app/services/cuentaService/crear-cuenta-service.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {

  cuenta : Cuenta = new Cuenta();

  constructor(private crearCuentaService: CrearCuentaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  crearCuenta(){
    console.log(this.cuenta);
    this.crearCuentaService.crearCuenta(this.cuenta).subscribe((data) => {
      console.log(data);
      alert("Felicidades! Ya tienes una Cuenta");
    })
  }

}
