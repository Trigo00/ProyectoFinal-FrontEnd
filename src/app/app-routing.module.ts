import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/tecnologias/new-skill.component';
import { EditSkillComponent } from './components/tecnologias/edit-skill.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';

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
    path: 'project',
    component: ProyectosComponent
  },
  {
    path: 'newproject',
    component: NewProyectoComponent
  },
  {
    path: 'editproject/:id',
    component: EditProyectoComponent
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
    path: 'newskill',
    component: NewSkillComponent
  },
  {
    path: 'editskill/:id',
    component: EditSkillComponent
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
