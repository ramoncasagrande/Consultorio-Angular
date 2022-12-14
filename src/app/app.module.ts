import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { AtendenteComponent } from './cadastro/atendente/atendente.component';
import { FormsModule } from '@angular/forms';
import { AtendenteListComponent } from './atendente-list/atendente-list.component';
import { MedicoComponent } from './cadastro/medico/medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AtendenteComponent,
    AtendenteListComponent,
    MedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
