import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  inputs: ['message', 'title', 'animated', 'backdrop', 'open'],
  outputs: ['result']
})
export class ConfirmationComponent implements OnInit, OnChanges {
  modalRef: BsModalRef;

  @Input() message;
  @Input() title;
  @Input() open;
  @Output() result = new EventEmitter();

  constructor(private modalService: BsModalService) {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.open.currentValue == true) {
      this.openModal();
    }
  }

  openModal() {

    let initialState = {
      message: this.message,
      title: this.title
    }
    this.modalRef = this.modalService.show(ConfirmationModalComponent, { backdrop: 'static', initialState });
    this.modalRef.content.displayModal = this.modalRef;

    this.modalRef.content.result.subscribe((res) => {
      this.result.next(res);
    })

  }

}
