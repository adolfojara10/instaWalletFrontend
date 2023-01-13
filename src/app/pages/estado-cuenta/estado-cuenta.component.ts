import { Component, OnInit } from '@angular/core';
import { EstadocwsService } from 'src/app/services/estadocws.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  constructor(private estadoCuenta: EstadocwsService) { }

  estado: number = 0;

  ngOnInit(): void {
    console.log("yeaa ");    
    this.obtenerEstadoC();
    this.estado;
  }

  obtenerEstadoC(){   
    console.log("eee")   
    this.estadoCuenta.getEstado().subscribe(resp => {
      console.log(resp);
      this.estado = resp;
    })
  }
}
