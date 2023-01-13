import { Component, OnInit } from '@angular/core';
import { personaS } from 'src/app/domain/persona';
import { TransferenciaswsService } from 'src/app/services/transferenciasws.service';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {
  monto: number = 0;
  saldo: number = 0;
  personaOb: personaS = new personaS();
  personaBc: personaS = new personaS();
  cedulaReceptor: String = "";
  constructor(private transferencias: TransferenciaswsService) { 
    
  }

  ngOnInit(): void {
    this.cargarDatosS();   
    this.cargarSaldo(); 
  }

  cargarDatosS(){
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
  }
}
