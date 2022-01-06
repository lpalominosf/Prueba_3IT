import { Component, OnInit } from '@angular/core';
import { DetalleIndicador, ResponseIndicadores, TipoIndicador } from './domains/dominios';
import { IndicadoresService } from './services/indicadores.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PreciosIndicadoresComponent } from './components/precios-indicadores/precios-indicadores.component';
import { DetalleIndicadorComponent } from './components/detalle-indicador/detalle-indicador/detalle-indicador.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prueba3IT';
  titulo:string="Prueba";
  informacionMonedas!: ResponseIndicadores;
  detalleIndicador!: DetalleIndicador;
  loading:boolean=true;
  constructor (
    private indicadoresService:IndicadoresService, public dialog: MatDialog
  ) {}
  openDialog(codigo:string): void {
    this.indicadoresService.getTipo(codigo).subscribe((data:DetalleIndicador) => { // Tipo de dato
      this.detalleIndicador=data
      console.log(this.detalleIndicador)
      this.indicadoresService.setDatosModal(this.detalleIndicador)
      const dialogRef = this.dialog.open(PreciosIndicadoresComponent, {
        width: 'auto',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    })      
  }
  openDialogDetalle(indicador:TipoIndicador): void {
      this.indicadoresService.setDatosModalDetalle(indicador)
      const dialogRef = this.dialog.open(DetalleIndicadorComponent, {
        width: 'auto',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('El modal fue cerrado');
  
    })      
  }
  ngOnInit():void{
    this.indicadoresService.getTodos().subscribe((data:ResponseIndicadores) => {
      this.informacionMonedas=data
      console.log("Valor de ",this.informacionMonedas)
      this.loading=false
      console.log(data)})

  } // Se ejecuta cuando comienza la página web














}


