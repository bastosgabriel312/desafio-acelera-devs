import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cursos } from 'src/app/shared/model/Curso';
import { Turmas } from 'src/app/shared/model/Turma';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { AlunoService } from 'src/app/shared/services/aluno/aluno.service';
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
  @Output() callParent = new EventEmitter<any>();


  constructor(
    private modalService: BsModalService,
    private alunoService: AlunoService,
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getCursos();
    this.getTurmas();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class:'modal-xl'});
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
