import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResponseIndicadores, TipoIndicador } from '../domains/dominios';
import { DetalleIndicador } from '../domains/dominios';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {
  private url="https://mindicador.cl/api";
  dataToModal!: DetalleIndicador;
  dataToModalDetalle!:TipoIndicador;
  constructor(private http: HttpClient) {}

  public getTodos(): Observable<ResponseIndicadores> {
    return this.http.get<ResponseIndicadores>(this.url);
  }
  public getTipo(tipo_indicador:string): Observable<DetalleIndicador> {
    return this.http.get<DetalleIndicador>(this.url+"/"+tipo_indicador);
  }
  public setDatosModal(data: DetalleIndicador){
    this.dataToModal  = data;
}
  public getDatosModal(){
    return this.dataToModal;
}
  public setDatosModalDetalle(data: TipoIndicador){
  this.dataToModalDetalle  = data;
}
  public getDatosModalDetalle(){
  return this.dataToModalDetalle;
}

}




