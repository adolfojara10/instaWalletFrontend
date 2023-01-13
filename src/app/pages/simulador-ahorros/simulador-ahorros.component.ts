import { Component, OnInit } from '@angular/core';
import { simuladorAhorro } from 'src/app/domain/simulador';
import { SimuladorwsService } from 'src/app/services/simuladorws.service';

@Component({
  selector: 'app-simulador-ahorros',
  templateUrl: './simulador-ahorros.component.html',
  styleUrls: ['./simulador-ahorros.component.css']
})
export class SimuladorAhorrosComponent implements OnInit {

  simuladorAhorro: simuladorAhorro = new simuladorAhorro();

  rendimiento: number = 0;

  constructor(private simuldor: SimuladorwsService) { }

  ngOnInit(): void {
  }

  simular(){
    this.simuldor.simular(this.simuladorAhorro).subscribe((date: any) => {
      console.log(date);
      this.rendimiento = date;
    })
  }

}
