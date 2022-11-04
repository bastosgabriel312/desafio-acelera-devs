import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cursos } from 'src/app/shared/model/Curso';
import { Turmas } from 'src/app/shared/model/Turma';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';
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
    private disciplinaService: DisciplinaService,
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
      this.disciplinaService.createDisciplina(this.disciplinaService.convertFormToDisciplina(this.form.value)).subscribe(
        (disciplina) =>{
          this.alertService.showAlert("Disciplina salva com sucesso",
          AlertTypes.SUCCESS);
          this.modalRef?.hide();
          this.callParent.emit();
          

        },
        (error: Error) => {
          this.message = error;     
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
      }
    }
      



  form = this.formBuilder.group({
    nome: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
    conteudoProgramatico: ['', [Validators.required]],
    totalHoras: [Number(''), [Validators.required]],
    numeroCreditos: [Number(''), [Validators.required]],
    turma: ['', [Validators.required]],
    curso: ['', [Validators.required]],
});

}
