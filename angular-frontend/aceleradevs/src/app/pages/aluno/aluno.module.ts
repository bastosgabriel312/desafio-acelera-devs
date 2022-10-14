import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import { MatFormField, matFormFieldAnimations, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AlunoDetalhesComponent } from './aluno-detalhes/aluno-detalhes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AlunoComponent,
    TabelaComponent,
    AlunoDetalhesComponent
  ],
  exports:[
    TabelaComponent,
    AlunoComponent,
    AlunoDetalhesComponent
    ],
    
})
export class AlunoModule { }
