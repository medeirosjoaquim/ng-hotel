import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { IPessoa } from '../models/IPessoa.model';

@Component({
  selector: 'app-pessoa-modal',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements AfterViewInit {
  private element: any;
  private firstInputElement: any;
  private lastInputElement: any;
  private modalWindow: any;
  form: FormGroup;

  constructor(private el: ElementRef, private fb: FormBuilder, private data: DataService) {
    this.element = el.nativeElement;
    this.form = this.fb.group({
      nome: ['', Validators.required],
      documento: ['', Validators.required],
      fone: ['', Validators.required]
    });

  }

  ngAfterViewInit() {
    this.modalWindow = this.element.getElementsByTagName('div');
    // trap the focus inside the modal
    // get the first input
    this.firstInputElement = this.element.
    getElementsByClassName('first-input');
    // get the last input
    this.lastInputElement = this.element.getElementsByClassName('last-input');
    // when last input loses focus, go back to the first one
    this.lastInputElement[0].addEventListener('blur', () => {
      this.firstInputElement[0].focus();
    });
  }
    open(): void {
      this.modalWindow[0].classList.add('open');
  }

  close(): void {
    this.form.reset();
    this.modalWindow[0].classList.remove('open');
  }
  get _nome() { return this.form.get('nome'); }
  get _documento() { return this.form.get('documento'); }
  get _fone() { return this.form.get('fone'); }

  submitPessoaForm() {
    /* if (this.form.invalid) {
      return;
    } */
    console.log('persist data pessoa');
    const persist: IPessoa = {
      nome: this._nome.value,
      documento: this._documento.value,
      fone:  this._fone.value,
    };
    this.data.addPessoa(persist);
    this.form.reset();
    this.close();
  }
}
