import {Component, TemplateRef} from '@angular/core';
import { Aluno,Alunos } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

    displayedColumns: string[] = ['matricula', 'nome', 'turma', 'curso','acao'];
    dataSource!:any;
    message!:any;
    
    constructor(private alunosService:AlunoService,) { }

    ngOnInit() {
      this.getAlunos()
      

    }

    getAlunos(): void {
      this.alunosService.getAlunos().pipe().subscribe(
        (alunos) => {
          this.message = {
            status:200,
            message: "OK"
          }
          this.dataSource = alunos;
          
        },
        (error: Error) => {
          this.message = error;
        }
      );
    }


  }
