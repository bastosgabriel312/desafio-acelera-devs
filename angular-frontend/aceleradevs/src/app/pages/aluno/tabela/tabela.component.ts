import {Component} from '@angular/core';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';


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
    onCallParent(){
      this.getAlunos();
    }
    
    public getAlunos(): void {
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
