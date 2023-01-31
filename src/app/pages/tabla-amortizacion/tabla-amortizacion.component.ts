import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuotaCreditoWS } from 'src/app/domain/cuotaCredito';
import { simuladorAhorro } from 'src/app/domain/simulador';
import { TablaAmortizacionwsService } from 'src/app/services/tabla-amortizacionws.service';

@Component({
  selector: 'app-tabla-amortizacion',
  templateUrl: './tabla-amortizacion.component.html',
  styleUrls: ['./tabla-amortizacion.component.css']
})
export class TablaAmortizacionComponent implements OnInit {

  //deuda: deudasWs = new deudasWs();
  //deudaPrestamo: deudasWs = new deudasWs();
  deudas: CuotaCreditoWS[] = [];
  //deudasPrestamo:any;

  cuotaCredito : CuotaCreditoWS = new CuotaCreditoWS();


  simuladorAhorro: simuladorAhorro = new simuladorAhorro();

  //rendimiento : number = 0;

  constructor(private simuladorTabla: TablaAmortizacionwsService,private router: Router) { }

  ngOnInit(): void {
  }

  simular(){
    console.log("Simulaaaaaaaaaaaaaaaar")
    this.simuladorTabla.simular(this.simuladorAhorro).subscribe((data) => {
      console.log(data);
      this.deudas = data;
      for (let i = 0; i < this.deudas.length; i++) {
        const element = this.deudas[i];
        console.log(element.fechaPago);
        
        
      }
    })
  }

  CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
