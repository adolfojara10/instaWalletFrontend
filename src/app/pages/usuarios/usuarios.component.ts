import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuarioM } from 'src/app/domain/usuarios';
import { CreditowsService } from 'src/app/services/creditows.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario: usuarioM = new usuarioM();

  constructor(private controladorU: CreditowsService,private router: Router) { }

  ngOnInit(): void {
  }

  crearUsaurio(){
    console.log(this.controladorU);
    this.controladorU.crearUsuario(this.usuario).subscribe((data) => {
      console.log(data);
      alert("Usuario creado con exito");
      this.router.navigate(["libretadeAhorros"]).then(()=>{
        window.location.reload();
      });
    })
  }
  
  CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
