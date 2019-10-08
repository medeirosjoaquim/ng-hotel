import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-modal',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements AfterViewInit {
  private element: any;
  private modalWindow: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;

  }

  ngAfterViewInit() {
    this.modalWindow = this.element.getElementsByTagName('div');

  }
    open(): void {
      this.modalWindow[0].classList.add('open');
  }

  close(): void {
    this.modalWindow[0].classList.remove('open');
  }
}
