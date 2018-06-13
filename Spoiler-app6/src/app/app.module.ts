import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeliculaBannerComponent } from './Peliculas/pelicula-banner/pelicula-banner.component';
import { GrillaComponent } from './grilla/grilla.component';
import { Pelicula2Component } from './pelicula2/pelicula2.component';
import { TituloComponent } from './titulo/titulo.component';
import { PeliculaImagenComponent } from './pelicula-imagen/pelicula-imagen.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { InputBuscarComponent } from './input-buscar/input-buscar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { RegistarUsuarioComponent } from './registar-usuario/registar-usuario.component';
import { HorarioComponent } from './horario/horario.component';
import {ScheduleModule, DialogModule, CalendarModule, ToggleButtonModule, DragDropModule, ButtonModule, InputTextareaModule, CheckboxModule, InputTextModule, SelectButtonModule} from 'primeng/primeng';
import { InputTextoComponent } from './input-texto/input-texto.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    AppComponent,
    PeliculaBannerComponent,
    GrillaComponent,
    Pelicula2Component,
    TituloComponent,
    PeliculaImagenComponent,
    Menu1Component,
    Menu2Component,
    InputBuscarComponent,
    FooterComponent,
    RegistarUsuarioComponent,
    HorarioComponent,
    InputTextoComponent,
    InputPasswordComponent,
    BotonComponent,


  ],

  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(), //definimos todos os modulos
    BrowserAnimationsModule,
    MatButtonModule,
    ScheduleModule,
    DialogModule,
    CalendarModule,
    ToggleButtonModule,
    DragDropModule,
    ButtonModule,
    InputTextareaModule,
    CheckboxModule,
    InputTextModule,
    SelectButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
