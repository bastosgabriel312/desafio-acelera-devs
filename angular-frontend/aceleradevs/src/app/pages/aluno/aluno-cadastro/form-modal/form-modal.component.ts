import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cursos } from 'src/app/shared/model/Curso';
import { EnderecoCepApi } from 'src/app/shared/model/EnderecoCepApi';
import { Turmas } from 'src/app/shared/model/Turma';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
import { ConsultaCepService } from 'src/app/shared/services/cep/consultaCep.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  modalRef?: BsModalRef;
  turmas?:Turmas;
  cursos?:Cursos;
  message: any;
  endereco!: EnderecoCepApi;
  @Output() callParent = new EventEmitter<any>();


  constructor(
    private modalService: BsModalService,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private consultaCEP: ConsultaCepService,) { }

  ngOnInit() {
    this.getCursos();
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class:'modal-xl'});
  }

  // REQUISIÇÕES
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
    this.alunoService.getTurmasComDisciplinasInCurso(idCurso).subscribe(
      (turmas) => {
        this.turmas = turmas;
        this.form.controls.turma.setErrors(null);
      },
      (error: Error)=>{
        this.message = error;
        this.turmas = [];
        this.form.controls.turma.setErrors(Validators.required);
        this.alertService.showAlert("Não há turma disponível que condiz com curso escolhido, por favor verifique as disciplinas das turmas.",AlertTypes.INFO)

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

  onSubmit(){
    if(this.form.valid){
      this.alunoService.createAluno(this.alunoService.convertFormToAluno(this.form.value)).subscribe(
        (aluno) =>{
          this.alertService.showAlert("Aluno salvo com sucesso",
          AlertTypes.SUCCESS);
          this.modalRef?.hide();
          this.callParent.emit();
          

        },
        (error: Error) => {
          this.message = error;
          console.warn(this.message);
          
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
      }
    }

    getEndereco(): void {
      const cep = this.form.get('cep')?.value;
      this.consultaCEP.enderecoPorCep(cep).subscribe((endereco) => {
        this.endereco = endereco;
        this.form.controls.rua.setValue(endereco.logradouro == undefined?'':endereco.logradouro + ", " + endereco.bairro);
        this.form.controls.cidade.setValue(endereco.localidade);
        this.form.controls.estado.setValue(endereco.uf);

      });
    } 
      
  // FORMS
  patternNome = "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$";
  patternCpf = "^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$";
  patternRg = "^[0-9]{2,3}\\.?[0-9]{2,3}\\.?[0-9]{3}\\-?[A-Za-z0-9]{1}$";
  patternTelefone = "^\\(?[1-9]{2}\\)? ?(?:[2-8]|9[1-9])[0-9]{3}\\-?[0-9]{4}$";
  patternCep= "^([\\d]{2})\\.?([\\d]{3})\\-?([\\d]{3})";


  form = this.formBuilder.group({
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
