import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { socioM } from 'src/app/domain/socio';
import { CreditowsService } from 'src/app/services/creditows.service';

@Component({
  selector: 'app-listarsocios',
  templateUrl: './listarsocios.component.html',
  styleUrls: ['./listarsocios.component.css']
})
export class ListarsociosComponent implements OnInit {

  socios: socioM [] = [];

  constructor(private sociosc: CreditowsService, private router: Router) { }

  ngOnInit(): void {
    this.findAllSocios();
  }

  findAllSocios(){
    
    this.sociosc.findAllSocios().subscribe((data) => {
      console.log(data);
      this.socios = data;  
    })   

  }

  CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['login']).then(() => {
      window.location.reload();
    });
  }

}
