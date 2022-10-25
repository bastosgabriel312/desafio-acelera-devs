import { Component, OnInit } from '@angular/core';
import { Alunos } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { ActivatedRoute } from '@angular/router';

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
