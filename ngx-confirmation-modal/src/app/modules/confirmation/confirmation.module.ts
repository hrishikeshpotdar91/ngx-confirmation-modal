import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    CommonModule
  ],
  declarations: [ConfirmationComponent, ConfirmationModalComponent],
  entryComponents: [ConfirmationModalComponent],
  exports: [
    ConfirmationComponent // <-- this!
  ]
})
export class ConfirmationModule { }
