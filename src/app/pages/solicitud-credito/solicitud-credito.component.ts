import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/domain/creditows';
import { CreditowsService } from 'src/app/services/creditows.service';

@Component({
  selector: 'app-solicitud-credito',
  templateUrl: './solicitud-credito.component.html',
  styleUrls: ['./solicitud-credito.component.css']
})
export class SolicitudCreditoComponent implements OnInit {

  credito : Credito = new Credito();

  //creditows : CreditowsService = new CreditowsService();

  constructor(private creditows: CreditowsService) { }

  ngOnInit(): void {
  }

  solicitar(){
    
  }

}
