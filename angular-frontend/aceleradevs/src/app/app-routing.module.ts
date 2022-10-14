import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoDetalhesComponent } from './pages/aluno/aluno-detalhes/aluno-detalhes.component';
import { AlunoComponent } from './pages/aluno/aluno.component';

const routes: Routes = [
  { path: 'aluno', component: AlunoComponent },
  {path: 'aluno/:id', component: AlunoDetalhesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
