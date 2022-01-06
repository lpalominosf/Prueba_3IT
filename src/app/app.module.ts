import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreciosIndicadoresComponent } from './components/precios-indicadores/precios-indicadores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleIndicadorComponent } from './components/detalle-indicador/detalle-indicador/detalle-indicador.component';

@NgModule({
  declarations: [
    AppComponent,
    PreciosIndicadoresComponent,
    DetalleIndicadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
