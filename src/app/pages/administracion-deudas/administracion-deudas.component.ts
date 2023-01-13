import { Component, OnInit } from '@angular/core';
import { deudasWs } from 'src/app/domain/deudas';
import { DeudaswsService } from 'src/app/services/deudasws.service';

@Component({
  selector: 'app-administracion-deudas',
  templateUrl: './administracion-deudas.component.html',
  styleUrls: ['./administracion-deudas.component.css']
})
export class AdministracionDeudasComponent implements OnInit {

  deuda: deudasWs = new deudasWs();
  deudaPrestamo: deudasWs = new deudasWs();
  deudas:any;
  deudasPrestamo:any;
  constructor(private deudaServ: DeudaswsService) { }

  ngOnInit(): void {
    this.deudaServ.getDeduda().subscribe((data:any) => {
      console.log(data);
    })    
    
    this.deudaServ.getDedudaPrestamo().subscribe((data:any) => {
      console.log(data);
    })

    this.getDeuda();
    this.getDeudaPrestamo();
  }

  getDeuda(){
    this.deudas = this.deudaServ.getDeduda();
  }

  getDeudaPrestamo(){
    this.deudasPrestamo = this.deudaServ.getDedudaPrestamo();
  }

  pagar(){
    console.log(this.deuda.id)
    this.deudaServ.pagarDeuda(this.deuda);
  }

  pagarPrestamo(){
    console.log(this.deudaPrestamo.id)
    this.deudaServ.pagarDeudaPrestamos(this.deudaPrestamo).subscribe((data:any) => {
      console.log(data)
    });
  }
}
