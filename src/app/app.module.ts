import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { interceptorProvider } from './service/interceptor-service';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditSkillComponent } from './components/tecnologias/edit-skill.component';
import { NewSkillComponent } from './components/tecnologias/new-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    ProyectosComponent,
    SobreMiComponent,
    TecnologiasComponent,
    ContactoComponent,
    MenuComponent,
    LoginComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    NewProyectoComponent,
    EditProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({

    }),
    BrowserAnimationsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
