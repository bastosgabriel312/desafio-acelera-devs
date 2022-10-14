import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Aluno } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css']
})
export class AlunoDetalhesComponent implements OnInit {
  aluno!: Aluno;
  message!:any;

  constructor(private route: ActivatedRoute,
    private router: Router, private alunosService:AlunoService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getAlunoById(id);
    console.log(id);
  }

  getAlunoById(id:string|null): void {
    this.alunosService.getAlunoById(Number(id)).pipe().subscribe(
      (aluno) => {
        this.aluno = aluno;
      },
      (error: Error) => {
        this.message = error;
      }
    ); 
  }

  editarForm = this.formBuilder.group({
    nome: ['',[Validators.required]],
    matricula: ['',[Validators.required]],
    email: ['',[Validators.email]],
    cpf: ['',[Validators.required]],
    rg: ['',[Validators.required]],
    telefone: ['',[Validators.required]],
    endereco: ['',[Validators.required]],
    estado: ['',[Validators.required]],
    cidade: ['',[Validators.required]],
    cep: ['',[Validators.required]],
    turma: ['',[Validators.required]],
    curso: ['',[Validators.required]]


  });

  onSubmit(): void {
    
    // this.aluno = this.alunosService.updateAluno(this.aluno.id);
    console.warn('Edição salva com sucesso', this.editarForm.value);
    this.editarForm.reset();
  }
}
