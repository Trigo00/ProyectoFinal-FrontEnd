import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit{

  constructor(){}

  ngOnInit(): void { 
  }
}
