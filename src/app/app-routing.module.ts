import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreciosIndicadoresComponent } from './components/precios-indicadores/precios-indicadores.component';


const routes: Routes = [{
  path:'precios-indicadores',
  component:PreciosIndicadoresComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
