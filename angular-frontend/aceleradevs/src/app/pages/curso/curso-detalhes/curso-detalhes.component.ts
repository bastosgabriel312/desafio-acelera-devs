import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/shared/model/Curso';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';


@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {
  curso!: Curso;
  message: any;
  panelOpenState = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private disciplinasService: DisciplinaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) {
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCursoById(id);
    this.editarForm.disable();
  }
  getCursoById(id: string | null): void {
    this.cursoService.getCursoById(Number(id)).subscribe(
      (curso) => {
        this.curso = curso;
        this.message ={'status':200};
        this.editarForm.setValue({
          nome: curso.name,
          totalGrade: curso.totalGrade,

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
    totalGrade: [Number(''), [Validators.required]],

  });

  onSubmit(): void {
    if(this.editarForm.valid){
        this.editarForm.enable();
        this.cursoService.updateCurso(this.curso.id,this.cursoService.convertFormToCurso(this.editarForm.value)).subscribe(
           (curso) =>{
             this.alertService.showAlert("Curso salvo com sucesso",
             AlertTypes.SUCCESS)
             this.editarForm.disable();
           },
           (error: Error) => {
            this.editarForm.disable();
             this.message = error;
             this.cursoService.convertFormToCurso(this.editarForm.value)
             this.alertService.showAlert(this.message.error,
               AlertTypes.DANGER);
           });  
     }
   }
 
   deleteCurso(){
     if(confirm("Confirme caso deseje realmente remover")){
       this.cursoService.deleteCurso(this.curso.id).subscribe(
        (mensagem:any) =>{
          this.alertService.showAlert("Curso removido com sucesso",
          AlertTypes.SUCCESS)
          this.router.navigate(['/curso'])
        },
        (error: Error) => {
          this.message = error;
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
       }
     }

}
