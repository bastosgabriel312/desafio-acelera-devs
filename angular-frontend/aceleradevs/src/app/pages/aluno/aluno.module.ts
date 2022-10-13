import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoComponent } from './aluno.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AlunoModule,
    AppModule
  ],
  declarations: [
    AlunoComponent,
    TabelaComponent
  ],
  exports:[
    TabelaComponent,
    AlunoComponent
    ]
})
export class AlunoModule { }
