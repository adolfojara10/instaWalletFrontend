import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionDeudasComponent } from './pages/administracion-deudas/administracion-deudas.component';
import { AprovacionPrestamoComponent } from './pages/aprovacion-prestamo/aprovacion-prestamo.component';
import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { SimuladorAhorrosComponent } from './pages/simulador-ahorros/simulador-ahorros.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';

const routes: Routes = [
  {path: "conversionMoneda", component: ConversionMonedaComponent},
  {path: "estadoCuenta", component: EstadoCuentaComponent},
  {path: "simuladorAhorros", component: SimuladorAhorrosComponent},
  {path: "transferencia", component: TransferenciasComponent},
  {path: "pagarDeuda", component: AdministracionDeudasComponent},
  {path: "aprovacion", component: AprovacionPrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
