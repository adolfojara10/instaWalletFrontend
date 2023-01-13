export class PrestamoWS{
    id: number = 0;
    coutasPagadas: number = 0;
    estado: string = "";
    fechaFin: Date = new Date();
    fechaInicio: Date = new Date();  
    interes: number = 0.6;
    monto:number=0;
    pagoMensual:number = 0;
    plazo:number = 0;
}