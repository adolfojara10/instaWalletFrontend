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

  constructor(private detalleCuntaServise: DetalleCuentaService, private crearCuentaService: CrearCuentaServiceService) {

  }
  estado: number = 0;
  detalle: DetalleCuenta[] = [];
  id: string;
  cuentas: Cuenta[] = [];
  cuentaAux:Cuenta;
  cuentaDetalle: any;

  ngOnInit(): void {
    this.id = localStorage.getItem("Usuario");
    console.log(this.id)
    this.obtenerEstadoC();
    console.log("el Id es " +this.id)
    console.log(this.cuentas.length)
    // for(let i =0; i<this.cuentas.length;i++){
 
    //   if (this.cuentas[i].socioIdentificacion == this.id){
    //     console.log("Coincide")
    //   } else {
    //     console.log("hola")
    //   }
    // }
  }

  obtenerEstadoC() {
    console.log(this.id + "en metodo");
      this.crearCuentaService.obtenerCuentas().subscribe((cuentas: Cuenta[]) => {
        console.log("Listar Cuentas");
        console.log(cuentas);
        this.cuentas= cuentas.filter(ref=>ref.socioIdentificacion=this.id);
        console.log(this.cuentas);
        console.log(this.cuentas[0].detallesCuentas);
        this.cuentaDetalle = this.cuentas[0].detallesCuentas;
      })     
      // this.detalleCuntaServise.lista().subscribe((listar) => {
      //   listar.forEach(
      //     (vari) => (vari.cuentaCodigo == this.cuentaAux.numerCuenta) ?
      //       this.detalle.push(vari) : this.detalle)
      // })
  }
}
