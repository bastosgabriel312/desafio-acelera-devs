import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Disciplina, Disciplinas } from 'src/app/shared/model/Disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  disciplinas!:Disciplinas;
  constructor(private disciplinasService:DisciplinaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDisciplinas()
    
  }
  getDisciplinas(): void {
    this.disciplinasService.getDisciplinas().pipe().subscribe(
      (disciplinas) => {
        this.disciplinas = disciplinas;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }


}
