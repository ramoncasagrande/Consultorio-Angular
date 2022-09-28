import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendenteListComponent } from './atendente-list/atendente-list.component';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';

const routes: Routes = [
  {path:'atendente' , component:AtendenteComponent},
  {path:'atendente/listar' , component:AtendenteListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
