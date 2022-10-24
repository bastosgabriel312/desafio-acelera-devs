import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Cursos } from 'src/app/shared/model/Curso';

import { CursoService } from 'src/app/shared/services/curso/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './Curso.component.html',
  styleUrls: ['./Curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos!:Cursos;
  constructor(private cursosService:CursoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCursos()
    
  }
  getCursos(): void {
    this.cursosService.getCursos().pipe().subscribe(
      (cursos) => {
        this.cursos = cursos;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }


}
