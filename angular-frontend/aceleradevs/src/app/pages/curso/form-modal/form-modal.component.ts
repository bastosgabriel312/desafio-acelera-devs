import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Cursos } from 'src/app/shared/model/Curso';
import { Turmas } from 'src/app/shared/model/Turma';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';



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
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit() {
    this.form.controls.totalGrade.disable()
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class:'modal-xl'});
 }


  onSubmit(){
    if(this.form.valid){
      this.form.controls.totalGrade.enable()
      this.cursoService.createCurso(this.cursoService.convertFormToCurso(this.form.value)).subscribe(
        (curso) =>{
          this.alertService.showAlert("Curso salva com sucesso",
          AlertTypes.SUCCESS);
          this.modalRef?.hide();
          this.callParent.emit();
          this.form.controls.totalGrade.disable()
        },
        (error: Error) => {
          this.message = error;
          console.warn(this.message);
          this.form.controls.totalGrade.disable()
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
      }
    }

  
    form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      totalGrade: [Number('0'), [Validators.required]],
  
    });

}
