import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferenciasComponent } from './pages/transferencias/transferencias.component';
import { SimuladorAhorrosComponent } from './pages/simulador-ahorros/simulador-ahorros.component';
import { EstadoCuentaComponent } from './pages/estado-cuenta/estado-cuenta.component';
import { AdministracionDeudasComponent } from './pages/administracion-deudas/administracion-deudas.component';
import { AprovacionPrestamoComponent } from './pages/aprovacion-prestamo/aprovacion-prestamo.component';
import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaAmortizacionComponent } from './pages/tabla-amortizacion/tabla-amortizacion.component';
import { SolicitudCreditoComponent } from './pages/solicitud-credito/solicitud-credito.component';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    SimuladorAhorrosComponent,
    EstadoCuentaComponent,
    AdministracionDeudasComponent,
    AprovacionPrestamoComponent,
    ConversionMonedaComponent,
    TablaAmortizacionComponent,
    SolicitudCreditoComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
