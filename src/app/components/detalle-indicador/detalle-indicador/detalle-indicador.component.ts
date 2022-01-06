import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    private indicadoresService:IndicadoresService,
    public dialogRef: MatDialogRef<DetalleIndicadorComponent>,
    
  ){}
  ngOnInit(): void {
    this.tipoIndicador=this.indicadoresService.getDatosModalDetalle()
  }
  cerrarModal(){
    this.dialogRef.close()
  }
}
