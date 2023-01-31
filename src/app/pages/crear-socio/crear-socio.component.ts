import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { socioM } from 'src/app/domain/socio';
import { CreditowsService } from 'src/app/services/creditows.service';

@Component({
  selector: 'app-crear-socio',
  templateUrl: './crear-socio.component.html',
  styleUrls: ['./crear-socio.component.css']
})
export class CrearSocioComponent implements OnInit {


  socio:socioM = new socioM();

  constructor(private controladorU: CreditowsService,private router: Router) { }
  


  ngOnInit(): void {
  }

  crearSocio(){
    console.log(this.controladorU);
    this.controladorU.crearSocio(this.socio).subscribe((data) => {
      console.log(data);
      alert("Socio creado con exito");
    })
  }

  redireccionar(){
    this.router.navigate(["listarSocios"]).then(()=>{
      window.location.reload();
    });
  }
}
