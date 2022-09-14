import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { LoginComponent } from './login/login.component';
import { NeweducacionComponent } from './educacion/neweducacion.component';
import { NuevaExperienciaComponent } from './sobre-mi/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './sobre-mi/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './educacion/editeducacion.component';
const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'editexp/:id',
    component: EditExperienciaComponent
  },
  {
    path: 'nuevaexp',
    component: NuevaExperienciaComponent
  },
  {
    path: 'nuevaedu',
    component: NeweducacionComponent
  },
  {
    path: 'editedu/:id',
    component: EditeducacionComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'sobremi',
    component: SobreMiComponent
  },
  {
    path: 'tecnologias',
    component: TecnologiasComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
