import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Turmas } from 'src/app/shared/model/Turma';
import { Cursos } from 'src/app/shared/model/Curso';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.css'],
})
export class AlunoDetalhesComponent implements OnInit {
  aluno!: Aluno;
  message: any;
  turmas?:Turmas;
  cursos?:Cursos;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunoService,
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCursos();
    this.getTurmas();
    this.getAlunoById(id);
    this.editarForm.disable();
  }
  getAlunoById(id: string | null): void {
    this.alunosService.getAlunoById(Number(id)).subscribe(
      (aluno) => {
        this.aluno = aluno;
        this.message ={'status':200};
        this.editarForm.setValue({
          nome: aluno.nome,
          matricula: aluno.matricula,
          email: aluno.email,
          cpf: aluno.cpf,
          rg: aluno.rg,
          telefone: aluno.telefone,
          rua: aluno.endereco.rua,
          numero: aluno.endereco.numero,
          cidade: aluno.endereco.cidade,
          estado: aluno.endereco.estado,
          cep: aluno.endereco.cep,
          turma: String(aluno.turma.id),
          curso: String(aluno.curso.id),
        })
        ;

      },
      (error: Error) => {
        this.message = error;
      }
    );
  }

  getTurmas(): void {
    this.turmaService.getTurmas().subscribe(
      (turmas) =>{
        this.turmas = turmas;
      },
      (error: Error) => {
        this.message = error;
      });
    }
  
  getCursos(): void {
    this.cursoService.getCursos().subscribe(
      (cursos) =>{
        this.cursos = cursos;
      },
      (error: Error) => {
        this.message = error;
      });
    }
  
  habilitarForm(){
    this.editarForm.enable();
  }
  patternNome = "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$";
  patternCpf = "^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$";
  patternRg = "^[0-9]{2,3}\\.?[0-9]{2,3}\\.?[0-9]{3}\\-?[A-Za-z0-9]{1}$";
  patternTelefone = "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$";
  patternCep= "^([\\d]{2})\\.?([\\d]{3})\\-?([\\d]{3})";


  editarForm = this.formBuilder.group({
    nome: ['', [Validators.pattern(this.patternNome)]],
    matricula: ['', [Validators.required]],
    email: ['', [Validators.email]],
    cpf: ['', [Validators.pattern(this.patternCpf)]],
    rg: ['', [Validators.pattern(this.patternRg)]],
    telefone: ['', [Validators.pattern(this.patternCpf)]],
    rua: ['', [Validators.required]],
    numero:['', [Validators.required]],
    estado: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    cep: ['', [Validators.pattern(this.patternCep)]],
    turma: ['', [Validators.required]],
    curso: ['', [Validators.required]],
  });

  onSubmit(): void {
   if(this.editarForm.valid){
   this.alunosService.updateAluno(this.aluno.id,this.alunosService.convertFormToAluno(this.editarForm.value)).subscribe(
      (aluno) =>{
        console.log(aluno);
        alert("Aluno salvo com sucesso")
      },
      (error: Error) => {
        this.message = error;
        console.log(this.editarForm.value);
        this.alunosService.convertFormToAluno(this.editarForm.value)
        alert(this.message.error);
        console.log(this.message);
      });
    }
  }
}
