import { Component, OnInit } from '@angular/core';
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
  deudas:any;
  //deudasPrestamo:any;

  cuotaCredito : CuotaCreditoWS = new CuotaCreditoWS();


  simuladorAhorro: simuladorAhorro = new simuladorAhorro();

  //rendimiento : number = 0;

  constructor(private simuladorTabla: TablaAmortizacionwsService) { }

  ngOnInit(): void {
  }

  simular(){
    this.simuladorTabla.simular(this.simuladorAhorro).subscribe((date: any) => {
      console.log(date);
      this.deudas = date;
    })
  }

}
