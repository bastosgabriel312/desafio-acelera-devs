import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalhesComponent } from './pages/aluno/aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { CursoDetalhesComponent } from './pages/curso/curso-detalhes/curso-detalhes.component';
import { CursoComponent } from './pages/curso/Curso.component';
import { DisciplinaDetalhesComponent } from './pages/disciplina/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';
import { HomeComponent } from './pages/home/home.component';
import { TurmaDetalhesComponent } from './pages/turma/turma-detalhes/turma-detalhes.component';
import { TurmaComponent } from './pages/turma/turma.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home' 
  },
  {
    path: 'aluno', component: AlunoComponent, title: 'Aluno' 
  },
  { 
    path: 'aluno/:id', component: AlunoDetalhesComponent,title: 'Detalhes do Aluno' 
  },
  {
    path: 'disciplina', component: DisciplinaComponent, title: 'Disciplina' 
  },
  {
    path: 'disciplina/:id', component: DisciplinaDetalhesComponent,title: 'Detalhes da Disciplina' 
  },
  {
    path: 'curso', component: CursoComponent, title: 'Curso' 
  },
  {
    path: 'curso/:id', component: CursoDetalhesComponent,title: 'Detalhes do Curso' 
  },
  {
    path: 'turma', component: TurmaComponent, title: 'Turma'    
  },{
    path: 'turma/:id', component: TurmaDetalhesComponent, title: 'Detalhes da Turma' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
