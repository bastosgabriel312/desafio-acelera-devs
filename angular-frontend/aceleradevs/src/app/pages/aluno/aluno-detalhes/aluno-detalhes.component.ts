import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/shared/model/Aluno';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Turmas } from 'src/app/shared/model/Turma';
import { Cursos } from 'src/app/shared/model/Curso';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { ConsultaCepService } from 'src/app/shared/services/cep/consultaCep.service';
import { EnderecoCepApi } from 'src/app/shared/model/EnderecoCepApi';

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
  endereco!: EnderecoCepApi;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunoService,
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private consultaCEP: ConsultaCepService,
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
          turma:"",
          curso:"",
        });
      },
      (error: Error) => {
        this.message = error;
      }
    );
  }

  turmasContainsTurmaAluno(){
    if(this.aluno!== null && this.turmas!= null){
      const found = this.turmas.find((turma)=> {
        return turma.id == this.aluno.turma.id;
      })
      return found !==undefined;
    } return false

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

    getTurmasComDisciplinasInCurso(idCurso:number): void {
      this.alunosService.getTurmasComDisciplinasInCurso(idCurso).subscribe(
        (turmas) => {
          this.turmas = turmas;
          if(this.turmas.length === 0){
            this.editarForm.controls.turma.setErrors(Validators.required)
            this.alertService.showAlert("Não há turma disponível que condiz com curso escolhido, por favor verifique as disciplinas das turmas.",AlertTypes.INFO)
          } else{
            this.editarForm.controls.turma.setErrors(null)};
        },
        (error: Error)=>{
          this.message = error;
          this.turmas = [];
          this.editarForm.controls.turma.setErrors(Validators.required);
        }
      )
  
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
    this.editarForm.controls.turma.value?.length==0?this.editarForm.controls.turma.setErrors(Validators.required):this.editarForm.controls.turma.valid;
  }

  onSubmit(): void {
   if(this.editarForm.valid){
   this.alunosService.updateAluno(this.aluno.id,this.alunosService.convertFormToAluno(this.editarForm.value)).subscribe(
      (aluno) =>{
        this.alertService.showAlert("Aluno salvo com sucesso",
        AlertTypes.SUCCESS)
      },
      (error: Error) => {
        this.message = error;
        this.alunosService.convertFormToAluno(this.editarForm.value)
        this.alertService.showAlert(this.message.error,
          AlertTypes.DANGER);
      });
    }
  }

  deleteAluno(){
    if(confirm("Confirme caso deseje realmente remover")){
      this.alunosService.deleteAluno(this.aluno.id).subscribe(
        (mensagem:any) =>{
          this.alertService.showAlert("Aluno removido com sucesso",
          AlertTypes.SUCCESS)
          this.router.navigate(['/aluno'])
        },
        (error: Error) => {
          this.message = error;
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
      }
    }

    getEndereco(): void {
      const cep = this.editarForm.get('cep')?.value;
      this.consultaCEP.enderecoPorCep(cep).subscribe((endereco) => {
        this.endereco = endereco;
        this.editarForm.controls.rua.setValue(endereco.logradouro == undefined?'':endereco.logradouro + ", " + endereco.bairro);
        this.editarForm.controls.cidade.setValue(endereco.localidade);
        this.editarForm.controls.estado.setValue(endereco.uf);

      });
    } 

    // FORMS
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
      telefone: ['', [Validators.pattern(this.patternTelefone)]],
      rua: ['', [Validators.required]],
      numero:['', [Validators.required]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      cep: ['', [Validators.pattern(this.patternCep)]],
      turma: ['', [Validators.required]],
      curso: ['', [Validators.required]],
    });
}
