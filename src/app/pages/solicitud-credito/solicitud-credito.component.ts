import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/domain/creditows';
import { CreditowsService } from 'src/app/services/creditows.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud-credito',
  templateUrl: './solicitud-credito.component.html',
  styleUrls: ['./solicitud-credito.component.css']
})
export class SolicitudCreditoComponent implements OnInit {

  credito : Credito = new Credito();

  //creditows : CreditowsService = new CreditowsService();

  constructor(private creditows: CreditowsService, private router: Router) { }

  ngOnInit(): void {
  }

  solicitar(){
    console.log("Simulaaaaaaaaaaaaaaaar")
    this.creditows.solicitar(this.credito).subscribe((data) => {
      console.log(data);
      
    })

    alert("Credito enviado! Esperemos la confirmación del banco");
    this.router.navigate(["/tabla-amortizacion"]);

  }

  CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

}
