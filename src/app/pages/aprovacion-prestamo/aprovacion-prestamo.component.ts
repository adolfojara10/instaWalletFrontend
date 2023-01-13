import { Component, OnInit } from '@angular/core';
import { conversionM } from 'src/app/domain/conversionws';
import { PrestamoWS } from 'src/app/domain/prestamos';
import { AprovacionwsService } from 'src/app/services/aprovacionws.service';
import { ConversionwsService } from 'src/app/services/conversionws.service';

@Component({
  selector: 'app-aprovacion-prestamo',
  templateUrl: './aprovacion-prestamo.component.html',
  styleUrls: ['./aprovacion-prestamo.component.css']
})
export class AprovacionPrestamoComponent implements OnInit {

  prestamoA: PrestamoWS = new PrestamoWS();
  
  prestamos: any;
  constructor(private aprovacioP: AprovacionwsService) { }

  ngOnInit(): void {
    //this.aprovacioP.getPrestamo().subscribe((data:any) => {
      //console.log(data)
    //})
    this.aprovacioP.aprovarPrestamo(this.prestamoA).subscribe((data:any) => {
      console.log(data)
    })
    this.cargarPrestamos();
    //this.actualizar();
    
  }

  cargarPrestamos(){
    this.prestamos =  this.aprovacioP.getPrestamo();
  }

  actualizar(){
    this.prestamoA.estado = "Aprobado";
    console.log(this.prestamoA)
    this.prestamos = this.aprovacioP.aprovarPrestamo(this.prestamoA);
  }
}
