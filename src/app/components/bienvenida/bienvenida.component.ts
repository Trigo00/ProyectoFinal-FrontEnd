import { Component, OnInit } from '@angular/core';
import { persona } from '../../model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit{
  
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data} ) 
  }
}
