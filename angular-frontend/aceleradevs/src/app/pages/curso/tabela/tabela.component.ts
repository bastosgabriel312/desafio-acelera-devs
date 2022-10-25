import {Component} from '@angular/core';
import { CursoService } from 'src/app/shared/services/curso/curso.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

    displayedColumns: string[] = ['nome', 'totalGrade','acao'];
    dataSource!:any;
    message!:any;
    
    constructor(private cursoService:CursoService) { }

    ngOnInit() {
      this.getCursos()
      

    }
    onCallParent(){
      this.getCursos();
    }
    
    public getCursos(): void {
      this.cursoService.getCursos().pipe().subscribe(
        (cursos) => {
          this.message = {
            status:200,
            message: "OK"
          }
          this.dataSource = cursos;
          
        },
        (error: Error) => {
          this.message = error;
        }
      );
    }


  }
