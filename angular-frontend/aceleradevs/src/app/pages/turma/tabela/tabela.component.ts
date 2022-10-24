import {Component, TemplateRef} from '@angular/core';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';


@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

    displayedColumns: string[] = ['nome','acao'];
    dataSource!:any;
    message!:any;
    
    constructor(private turmaService:TurmaService) { }

    ngOnInit() {
      this.getTurmas()
      

    }
    onCallParent(){
      this.getTurmas();
    }
    
    public getTurmas(): void {
      this.turmaService.getTurmas().pipe().subscribe(
        (turmas) => {
          this.message = {
            status:200,
            message: "OK"
          }
          this.dataSource = turmas;
          
        },
        (error: Error) => {
          this.message = error;
        }
      );
    }


  }
