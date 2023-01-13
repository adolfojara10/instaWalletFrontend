import { Component, OnInit } from '@angular/core';
import { conversionM } from 'src/app/domain/conversionws';
import { ConversionwsService } from 'src/app/services/conversionws.service';

@Component({
  selector: 'app-conversion-moneda',
  templateUrl: './conversion-moneda.component.html',
  styleUrls: ['./conversion-moneda.component.css']
})
export class ConversionMonedaComponent implements OnInit {

  conversion: conversionM = new conversionM();

  res: number = 0;
  constructor(private converisonService: ConversionwsService) { }

  ngOnInit(): void {
  }

  guardar(){
     this.converisonService.guardar(this.conversion).subscribe((data:any) => {
      console.log(data);
      this.res =data;
    })
  }
}
