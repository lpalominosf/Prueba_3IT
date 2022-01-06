import { Component, OnInit } from '@angular/core';
import { DetalleIndicador } from 'src/app/domains/dominios';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
  selector: 'app-precios-indicadores',
  templateUrl: './precios-indicadores.component.html',
  styleUrls: ['./precios-indicadores.component.css']
})
export class PreciosIndicadoresComponent implements OnInit {
detalleIndicador!: DetalleIndicador;
  constructor (
    private indicadoresService:IndicadoresService
    
  ){}
  ngOnInit(): void {
    this.detalleIndicador=this.indicadoresService.getDatosModal()
  }

}
