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
//import { ConversionMonedaComponent } from './pages/conversion-moneda/conversion-moneda.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaAmortizacionComponent } from './pages/tabla-amortizacion/tabla-amortizacion.component';
import { SolicitudCreditoComponent } from './pages/solicitud-credito/solicitud-credito.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { DetalleCuentaComponent } from './pages/detalle-cuenta/detalle-cuenta.component';
import { CreaditoManagementComponent } from './pages/creadito-management/creadito-management.component';
import { CrearSocioComponent } from './pages/crear-socio/crear-socio.component';
//import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListarsociosComponent } from './pages/listarsocios/listarsocios.component';


@NgModule({
  declarations: [
    AppComponent,
    TransferenciasComponent,
    SimuladorAhorrosComponent,
    EstadoCuentaComponent,
    AdministracionDeudasComponent,
    AprovacionPrestamoComponent,
    //ConversionMonedaComponent,
    TablaAmortizacionComponent,
    SolicitudCreditoComponent,
    LoginComponent,
    CrearCuentaComponent,
    DetalleCuentaComponent,
    CreaditoManagementComponent,
    CrearSocioComponent,
    //ConfiguracionesComponent,
    UsuariosComponent,
    ListarsociosComponent

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
