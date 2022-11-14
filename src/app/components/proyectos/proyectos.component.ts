import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { TokenService } from '../../service/token.service';
import { ProyectoService } from '../../service/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyecto: Proyecto[] = [];

  constructor(private tokenService: TokenService, private proyectoS: ProyectoService){}

  isLogged = false;

  ngOnInit(): void {
    
    this.cargarProyecto();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

  } 

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data => {
        this.proyecto = data;
      }
    );
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }

}


