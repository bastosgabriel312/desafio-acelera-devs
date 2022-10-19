import { RouterModule } from '@angular/router';
import { NgxBootstrapModule } from './material/ngx-bootstrap/ngx-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
const COMPONENTS = [AlertsComponent];
const MODULES = [NgxBootstrapModule, RouterModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES],
  providers:[

  ],
})
export class SharedModule {}