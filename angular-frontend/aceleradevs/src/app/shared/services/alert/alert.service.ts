import { Injectable, } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../../components/alerts/alerts.component';

export enum AlertTypes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private modalService: BsModalService) {}

  showAlert(mensagem: string, type: AlertTypes): void {
    const bsModalRef: BsModalRef = this.modalService.show(AlertsComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.mensagem = mensagem;
  }


  
}
