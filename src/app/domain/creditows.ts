export class Credito{
    estadoSolicitudCredito: String = "en trámite";
    estado: String = "en trámite";
    numeroDeCuotas: number = 0;
    valorCredito: number = 0;
    interes: number = 0;
    cuotaCredito: number = 0;
    fechaInicio: Date = new Date();
    fechaFin: Date = new Date();
    numeroCuotasRestantes: number = this.numeroDeCuotas;
}