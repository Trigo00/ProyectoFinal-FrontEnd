import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../service/persona.service';
import { ImageService } from '../../service/image.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  persona: Persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )   

  }

  onUpdate(): void{

    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )

  }

  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }

}
