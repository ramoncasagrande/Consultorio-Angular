import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendenteListComponent } from './atendente-list/atendente-list.component';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';
import { MedicoComponent } from './cadastro/medico/medico.component';

const routes: Routes = [
  {path:'atendente' , component:AtendenteComponent},
  {path:'atendente/listar' , component:AtendenteListComponent},
  {path:'medico' , component:MedicoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
