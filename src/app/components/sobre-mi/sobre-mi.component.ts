import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Experiencia } from '../../model/experiencia';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  expe: Experiencia[] = [];
  persona: Persona = null  

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService, public personaService: PersonaService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarExperiencia();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe= data});
  }

  delete(id?: number){

    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(data => {
      this.persona = data;
    })
  }

}
