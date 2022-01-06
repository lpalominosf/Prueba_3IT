import { Component, OnInit } from '@angular/core';
import { DetalleIndicador, TipoIndicador } from 'src/app/domains/dominios';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.css']
})
export class DetalleIndicadorComponent implements OnInit {

  tipoIndicador!: TipoIndicador;
  constructor (
    private indicadoresService:IndicadoresService
    
  ){}
  ngOnInit(): void {
    this.tipoIndicador=this.indicadoresService.getDatosModalDetalle()
  }
}
