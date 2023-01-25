export class Credito{
    id: number=0;
    estadoSolicitudCredito: String = "en trámite";
    estado: String = "en trámite";
    valorCredito: number = 0;
    interes: number = 0;
    cuotaCredito: number = 0;
    numeroDeCuotas: number = 0;
    fechaInicio: Date = new Date();
    fechaFin: Date = new Date();
    numeroCuotasRestantes: number = this.numeroDeCuotas;
}