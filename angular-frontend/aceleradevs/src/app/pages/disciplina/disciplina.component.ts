import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disciplinas } from 'src/app/shared/model/Disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {
  disciplinas!:Disciplinas;
  constructor(
      private disciplinasService:DisciplinaService,
      private route: ActivatedRoute) { }

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
