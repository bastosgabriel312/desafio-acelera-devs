import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaComponent } from './turma.component';
import { TabelaComponent } from './tabela/tabela.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { TurmaDetalhesComponent } from './turma-detalhes/turma-detalhes.component';
import { FormModalComponent } from './form-modal/form-modal.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
    MatInputModule,
    ModalModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    TabelaComponent,
    TurmaComponent,
    TurmaDetalhesComponent,
    FormModalComponent
  ],
  exports:[
    TabelaComponent,
    TurmaComponent,
    TurmaDetalhesComponent,
    FormModalComponent
    ]
})
export class TurmaModule { }
