import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetalleCuenta } from 'src/app/domain/detalleCuenta';
import { personaS } from 'src/app/domain/persona';
import { DetalleCuentaService } from 'src/app/services/detalleCuentaService/detalle-cuenta.service';
import { TransferenciaswsService } from 'src/app/services/transferenciasws.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {
  detalleCuenta : DetalleCuenta = new DetalleCuenta();
  // monto: number = 0;
  // saldo: number = 0;
  // personaOb: personaS = new personaS();
  // personaBc: personaS = new personaS();
  // cedulaReceptor: String = "";
  constructor(private detalleCuntaServise: DetalleCuentaService,private router: Router) {

  }

  ngOnInit(): void {
    // this.cargarDatosS();
    // this.cargarSaldo();
  }

  realizarT(){
    this.detalleCuenta.tipoMovimiento = "Transferencia";
    console.log(this.detalleCuenta);
    this.detalleCuntaServise.crearDetalleCuenta(this.detalleCuenta).subscribe((data) => {
      console.log(data);
      alert("Tansaccion Realizada con Exito");
    })

  }

  CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  /*cargarDatosS(){
    this.transferencias.getUserSesion().subscribe((data:any) => {
      console.log(data);
      this.personaOb = data;

    });
  }

  cargarSaldo(){
    return this.transferencias.getUserSesionSaldo().subscribe((data:any) => {
      console.log("saldo en cuenta "+data)
      this.saldo = data;
    });
  }

  buscarCedula(){
    this.transferencias.getReceptorCed(this.personaBc).subscribe((data:any) => {
      console.log(data);
      this.personaBc = data;
    });
  }

  realizarT(){
    this.transferencias.transferir(this.personaBc).subscribe((data:any) => {
      console.log(data);
    })
  }*/
}
