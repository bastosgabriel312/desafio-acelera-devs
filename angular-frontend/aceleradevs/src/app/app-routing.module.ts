import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalhesComponent } from './pages/aluno/aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './pages/aluno/aluno.component';
import { DisciplinaDetalhesComponent } from './pages/disciplina/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaComponent } from './pages/disciplina/disciplina.component';

const routes: Routes = [
  {
    path: 'aluno',
    component: AlunoComponent
  },
  { path: 'aluno/:id', component: AlunoDetalhesComponent },
  {
    path: 'disciplina',
    component: DisciplinaComponent
  },
  { path: 'disciplina/:id', component: DisciplinaDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
