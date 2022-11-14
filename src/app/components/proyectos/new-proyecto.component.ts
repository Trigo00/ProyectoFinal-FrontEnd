import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../service/proyecto.service';
import { Router } from '@angular/router';
import { Proyecto } from '../../model/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreE: string;
  descripcionE: string;

  constructor(private proyectoS: ProyectoService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreE, this.descripcionE);
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
