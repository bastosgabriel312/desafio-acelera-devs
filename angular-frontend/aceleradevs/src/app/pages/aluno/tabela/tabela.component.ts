import {Component} from '@angular/core';
import { Aluno,Alunos } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { MatTableDataSource } from '@angular/material/table';


const DATA_LIST = [
  {
  "id": 11,
  "nome": "Lucas Ramos",
  "matricula": "101",
  "cpf": "79201011075",
  "email": "abc@hotmail.com",
  "telefone": "11991677777",
  "rg": "385208510",
  "turma": {
  "id": 1,
  "nome": "SI6A"
  },
  "curso": {
  "id": 1,
  "name": "Sistemas de informação I",
  "totalGrade": 55
  },
  "endereco": {
  "id": 29,
  "rua": "Rua blablabla",
  "numero": "10",
  "cidade": "Santo andré",
  "estado": "São Paulo",
  "cep": "09450000"
  }
  },
  {
  "id": 12,
  "nome": "Gabriel Ramos",
  "matricula": "101",
  "cpf": "79201011075",
  "email": "abc@hotmail.com",
  "telefone": "11991677777",
  "rg": "385208510",
  "turma": {
  "id": 4,
  "nome": "BD2B"
  },
  "curso": {
  "id": 5,
  "name": "Sistemas de informação II",
  "totalGrade": 6
  },
  "endereco": {
  "id": 45,
  "rua": "Rua blablabla",
  "numero": "10",
  "cidade": "Santo andré",
  "estado": "São Paulo",
  "cep": "09450000"
  }
  },
  {
    "id": 13,
    "nome": "Lucas Ramos",
    "matricula": "101",
    "cpf": "79201011075",
    "email": "abc@hotmail.com",
    "telefone": "11991677777",
    "rg": "385208510",
    "turma": {
    "id": 1,
    "nome": "SI6A"
    },
    "curso": {
    "id": 1,
    "name": "Sistemas de informação I",
    "totalGrade": 55
    },
    "endereco": {
    "id": 29,
    "rua": "Rua blablabla",
    "numero": "10",
    "cidade": "Santo andré",
    "estado": "São Paulo",
    "cep": "09450000"
    }
    },
    {
    "id": 14,
    "nome": "Gabriel Ramos",
    "matricula": "101",
    "cpf": "79201011075",
    "email": "abc@hotmail.com",
    "telefone": "11991677777",
    "rg": "385208510",
    "turma": {
    "id": 4,
    "nome": "BD2B"
    },
    "curso": {
    "id": 5,
    "name": "Sistemas de informação II",
    "totalGrade": 6
    },
    "endereco": {
    "id": 45,
    "rua": "Rua blablabla",
    "numero": "10",
    "cidade": "Santo andré",
    "estado": "São Paulo",
    "cep": "09450000"
    }
    },
    {
      "id": 15,
      "nome": "Lucas Ramos",
      "matricula": "101",
      "cpf": "79201011075",
      "email": "abc@hotmail.com",
      "telefone": "11991677777",
      "rg": "385208510",
      "turma": {
      "id": 1,
      "nome": "SI6A"
      },
      "curso": {
      "id": 1,
      "name": "Sistemas de informação I",
      "totalGrade": 55
      },
      "endereco": {
      "id": 29,
      "rua": "Rua blablabla",
      "numero": "10",
      "cidade": "Santo andré",
      "estado": "São Paulo",
      "cep": "09450000"
      }
      },
      {
      "id": 16,
      "nome": "Gabriel Ramos",
      "matricula": "101",
      "cpf": "79201011075",
      "email": "abc@hotmail.com",
      "telefone": "11991677777",
      "rg": "385208510",
      "turma": {
      "id": 4,
      "nome": "BD2B"
      },
      "curso": {
      "id": 5,
      "name": "Sistemas de informação II",
      "totalGrade": 6
      },
      "endereco": {
      "id": 45,
      "rua": "Rua blablabla",
      "numero": "10",
      "cidade": "Santo andré",
      "estado": "São Paulo",
      "cep": "09450000"
      }
      }
]
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent {

    displayedColumns: string[] = ['matricula', 'nome', 'turma', 'curso','acao'];


    dataSource!:any;
    message!:any;
    constructor(private alunosService:AlunoService) { }

    ngOnInit() {
      // this.getAlunos()
      this.dataSource = DATA_LIST;
        
    }
    
    getAlunos(): void {
      this.alunosService.getAlunos().pipe().subscribe(
        (alunos) => {
          this.dataSource = alunos;
          this.message = {
            status :200,
            message: "OK"
          }
        },
        (error: Error) => {
          this.message = error;
        }
      ); 
    }
  
  }