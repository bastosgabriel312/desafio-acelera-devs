import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';



@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  modalRef?: BsModalRef;
  message: any;
  @Output() callParent = new EventEmitter<any>();


  constructor(
    private modalService: BsModalService,
    private turmaService: TurmaService,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class:'modal-md'});
 }


  onSubmit(){
    if(this.form.valid){
      this.form.controls.totalGrade.enable()
      this.turmaService.createTurma(this.turmaService.convertFormToTurma(this.form.value)).subscribe(
        (turma) =>{
          this.alertService.showAlert("Turma salva com sucesso",
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

  
    form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      totalGrade: [Number('0'), [Validators.required]],
  
    });

}
