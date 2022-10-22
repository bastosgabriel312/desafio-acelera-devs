import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/shared/services/curso/curso.service';
import { TurmaService } from 'src/app/shared/services/turma/turma.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Turmas } from 'src/app/shared/model/Turma';
import { Cursos } from 'src/app/shared/model/Curso';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';
import { Disciplina } from 'src/app/shared/model/Disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina/disciplina.service';

@Component({
  selector: 'app-disciplina-detalhes',
  templateUrl: './disciplina-detalhes.component.html',
  styleUrls: ['./disciplina-detalhes.component.css'],
})
export class DisciplinaDetalhesComponent implements OnInit {
  disciplina!: Disciplina;
  message: any;
  turmas?:Turmas;
  cursos?:Cursos;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private disciplinasService: DisciplinaService,
    private turmaService: TurmaService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCursos();
    this.getTurmas();
    this.getDisciplinaById(id);
    this.editarForm.disable();
  }
  getDisciplinaById(id: string | null): void {
    this.disciplinasService.getDisciplinaById(Number(id)).subscribe(
      (disciplina) => {
        this.disciplina = disciplina;
        this.message ={'status':200};
        this.editarForm.setValue({
          nome: disciplina.nome,
          codigo: disciplina.codigo,
          conteudoProgramatico: disciplina.conteudoProgramatico,
          numeroCreditos: disciplina.numeroCreditos,
          totalHoras: disciplina.numeroCreditos,
          turma: String(disciplina.turma.id),
          curso: String(disciplina.curso.id),
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

  editarForm = this.formBuilder.group({
    nome: ['', [Validators.required]],
    codigo: ['', [Validators.required]],
    conteudoProgramatico: ['', [Validators.required]],
    totalHoras: [Number(''), [Validators.required]],
    numeroCreditos: [Number(''), [Validators.required]],
    turma: ['', [Validators.required]],
    curso: ['', [Validators.required]],
  });

  onSubmit(): void {
   if(this.editarForm.valid){
   this.disciplinasService.updateDisciplina(this.disciplina.id,this.disciplinasService.convertFormToDisciplina(this.editarForm.value)).subscribe(
      (aluno) =>{
        this.alertService.showAlert("Disciplina salva com sucesso",
        AlertTypes.SUCCESS)
      },
      (error: Error) => {
        this.message = error;
        this.disciplinasService.convertFormToDisciplina(this.editarForm.value)
        this.alertService.showAlert(this.message.error,
          AlertTypes.DANGER);
      });
    }
  }

  deleteAluno(){
    if(confirm("Confirme caso deseje realmente remover")){
      this.disciplinasService.deleteDisciplina(this.disciplina.id).subscribe(
        (mensagem:any) =>{
          console.warn(mensagem);
          this.alertService.showAlert("Disciplina removida com sucesso",
          AlertTypes.SUCCESS)
          this.router.navigate(['/disciplina'])
        },
        (error: Error) => {
          this.message = error;
          this.alertService.showAlert(this.message.error,
            AlertTypes.DANGER);
        });
      }
    }
  
}
