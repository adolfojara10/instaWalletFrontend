import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionDeudasComponent } from './pages/administracion-deudas/administracion-deudas.component';
import { AprovacionPrestamoComponent } from './pages/aprovacion-prestamo/aprovacion-prestamo.component';
//import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { SimuladorAhorrosComponent } from './pages/simulador-ahorros/simulador-ahorros.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';
import { TablaAmortizacionComponent } from './pages/tabla-amortizacion/tabla-amortizacion.component';
import { SolicitudCreditoComponent } from './pages/solicitud-credito/solicitud-credito.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { DetalleCuentaComponent } from './pages/detalle-cuenta/detalle-cuenta.component';
import { CreaditoManagementComponent } from './pages/creadito-management/creadito-management.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  //{path: "conversionMoneda", component: ConversionMonedaComponent},
  {path: "estadoCuenta", component: DetalleCuentaComponent},
  {path: "simuladorAhorros", component: SimuladorAhorrosComponent},
  {path: "transferencia", component: TransferenciasComponent},
  {path: "pagarDeuda", component: AdministracionDeudasComponent},
  {path: "aprovacion", component: AprovacionPrestamoComponent},
  {path: "tabla-amortizacion", component: TablaAmortizacionComponent},
  {path: "solicitud-credito", component: SolicitudCreditoComponent},
  {path: "login", component: LoginComponent},
  {path: "crearCuenta", component: CrearCuentaComponent},
  {path: "creditomanagement", component: CreaditoManagementComponent},
  {path: "libretadeAhorros", component: EstadoCuentaComponent},
  {path: "usuarios", component: UsuariosComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
