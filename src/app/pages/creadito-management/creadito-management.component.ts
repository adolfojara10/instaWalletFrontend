import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/domain/creditows';
import { CreditowsService } from 'src/app/services/creditows.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creadito-management',
  templateUrl: './creadito-management.component.html',
  styleUrls: ['./creadito-management.component.css']
})
export class CreaditoManagementComponent implements OnInit {


  deudas: Credito[] = [];

  #idCredito: number = 0;


  constructor(private creditows: CreditowsService, private router: Router) { }


  ngOnInit(): void {
    this.findAllPendientes();
  }

  findAllPendientes(){
    
    this.creditows.findAllPendientes().subscribe((data) => {
      console.log(data);
      this.deudas = data;
      
    })   

  }

  aprobar(idCredito:number){
    this.creditows.aprobarRechazarCredito(idCredito,"Aprobar").subscribe((data) => {});

    window.location.reload();
  }

  rechazar(idCredito:number){
    this.creditows.aprobarRechazarCredito(idCredito,"Rechazar").subscribe((data) => {});

    window.location.reload();
  }

}
