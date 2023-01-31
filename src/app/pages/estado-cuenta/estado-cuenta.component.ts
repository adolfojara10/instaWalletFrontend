import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/domain/cuenta';
import { DetalleCuenta } from 'src/app/domain/detalleCuenta';
import { CrearCuentaServiceService } from 'src/app/services/cuentaService/crear-cuenta-service.service';
import { DetalleCuentaService } from 'src/app/services/detalleCuentaService/detalle-cuenta.service';
import { EstadocwsService } from 'src/app/services/estadocws.service';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  constructor(private detalleCuntaServise: DetalleCuentaService,private crearCuentaService:CrearCuentaServiceService) {

  }
  estado: number = 0;
  detalle: DetalleCuenta[]=[];
  id : string ;
  cuentas:Cuenta[] = [];

  ngOnInit(): void {    
    var aux = 
    console.log("aux es " +aux)
    this.id=  localStorage.getItem("Usuario");
    console.log(this.id)
    this.obtenerEstadoC();
  }

  obtenerEstadoC(){
    console.log(this.id + "en metodo");
    this.crearCuentaService.obtenerCuentas().subscribe(
      (cuentas:Cuenta[])=>{
        this.cuentas=cuentas;
        // this.detalleCuntaServise.lista().subscribe((listar)=>{
        //   listar.forEach((vari)=>(vari.cuentaCodigo == this.id )? this.detalle.push(vari):this.detalle)
        // })
      })
  }
}
