import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadoJugadoresComponent } from './listado-jugadores/listado-jugadores.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JugadoesService } from './jugadoes.service';

import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './listado-jugadores/form.component';
const appRoutes: Routes = [
  {path: 'plantilla', component: ListadoJugadoresComponent},
  {path: 'creaJugador', component: FormComponent},
  {path: 'editaJugador/:dorsal', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoJugadoresComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
      )
  ],
  providers: [
    JugadoesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
