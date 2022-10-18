import { Component, OnInit } from '@angular/core';
import { Alunos } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  alunos!:Alunos;
  constructor(private alunosService:AlunoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAlunos()
    
  }
  getAlunos(): void {
    this.alunosService.getAlunos().pipe().subscribe(
      (alunos) => {
        this.alunos = alunos;
      },
      (error: Error) => {
        console.error(error);
      }
    );
  }


}
