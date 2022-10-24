import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Turma } from 'src/app/shared/model/Turma';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';

@Component({
  selector: 'app-turma-detalhes',
  templateUrl: './turma-detalhes.component.html',
  styleUrls: ['./turma-detalhes.component.css']
})
export class TurmaDetalhesComponent implements OnInit {
  turma!: Turma;
  message: any;
  panelOpenStateAluno = false;
  panelOpenStateDisciplina = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private turmaService: TurmaService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) {
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getTurmaById(id);
    this.editarForm.disable();
  }
  getTurmaById(id: string | null): void {
    this.turmaService.getTurmaById(Number(id)).subscribe(
      (turma) => {
        console.log(turma);
        this.turma = turma;
        this.message ={'status':200};
        this.editarForm.setValue({
          nome: turma.nome

        });

      },
      (error: Error) => {
        this.message = error;
      }
    );
  }

  habilitarForm(){
    this.editarForm.controls['nome'].enable();
  }

  editarForm = this.formBuilder.group({
    nome: ['', [Validators.required]],

  });

  onSubmit(): void {
    if(this.editarForm.valid){
      console.log(this.editarForm.value)
      if(this.editarForm.valid){
          console.log(this.editarForm.value);
          this.turmaService.updateTurma(this.turma.id,this.turmaService.convertFormToTurma(this.editarForm.value)).subscribe(
            (turma) =>{
              this.alertService.showAlert("Turma salva com sucesso",
              AlertTypes.SUCCESS)
            },
            (error: Error) => {
              this.message = error;
              console.warn(error)
              this.turmaService.convertFormToTurma(this.editarForm.value)
              this.alertService.showAlert(this.message.error,
                AlertTypes.DANGER);
            });
         }
     }
   }
 
   deleteTurma(){
     if(confirm("Confirme caso deseje realmente remover")){
      this.turmaService.deleteTurma(this.turma.id).subscribe(
        (mensagem:any) =>{
          console.warn(mensagem);
          this.alertService.showAlert("Turma removida com sucesso",
          AlertTypes.SUCCESS)
          this.router.navigate(['/turma'])
        },
        (error: Error) => {
          this.message = error;
          console.log(this.editarForm);
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
       }
     }

}
