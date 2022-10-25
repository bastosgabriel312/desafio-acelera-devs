import {Component} from '@angular/core';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

    displayedColumns: string[] = ['codigo', 'nome','turma','curso','acao'];
    dataSource!:any;
    message!:any;
    
    constructor(private disciplinaService:DisciplinaService) { }

    ngOnInit() {
      this.getDisciplinas()
      

    }
    onCallParent(){
      this.getDisciplinas();
    }
    
    public getDisciplinas(): void {
      this.disciplinaService.getDisciplinas().pipe().subscribe(
        (disciplinas) => {
          this.message = {
            status:200,
            message: "OK"
          }
          this.dataSource = disciplinas;
          
        },
        (error: Error) => {
          this.message = error;
        }
      );
    }


  }
