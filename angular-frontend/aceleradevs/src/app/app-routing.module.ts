import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalhesComponent } from './pages/aluno/aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { CursoDetalhesComponent } from './pages/curso/curso-detalhes/curso-detalhes.component';
import { CursoComponent } from './pages/curso/Curso.component';
import { DisciplinaDetalhesComponent } from './pages/disciplina/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';
import { TurmaComponent } from './pages/turma/turma.component';

const routes: Routes = [
  {
    path: 'aluno', component: AlunoComponent
  },
  { 
    path: 'aluno/:id', component: AlunoDetalhesComponent
  },
  {
    path: 'disciplina', component: DisciplinaComponent
  },
  {
    path: 'disciplina/:id', component: DisciplinaDetalhesComponent 
  },
  {
    path: 'curso', component: CursoComponent 
  },
  {
    path: 'curso/:id', component: CursoDetalhesComponent 
  },
  {
    path: 'turma', component: TurmaComponent   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
