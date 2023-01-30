import { Component, OnInit } from '@angular/core';
import { DetalleCuenta } from 'src/app/domain/detalleCuenta';
import { DetalleCuentaService } from 'src/app/services/detalleCuentaService/detalle-cuenta.service';
import { EstadocwsService } from 'src/app/services/estadocws.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  constructor(private detalleCuntaServise: DetalleCuentaService) {

  }
  estado: number = 0;
  detalle: DetalleCuenta[]=[];
  id : string = "0111";

  ngOnInit(): void {
    this.obtenerEstadoC();
  }

  obtenerEstadoC(){
    this.detalleCuntaServise.lista().subscribe((listar)=>{
      listar.forEach((vari)=>(vari.cuentaCodigo == this.id )? this.detalle.push(vari):this.detalle)
    })
  }
}
