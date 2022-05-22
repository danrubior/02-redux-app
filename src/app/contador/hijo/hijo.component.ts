import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {
  contador!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe((contador) => (this.contador = contador));
  }

  multiplicar() {
    // this.contador *= 2;
    // this.cambiaContador.emit(this.contador);
    this.store.dispatch(actions.multiplicar({ numero: 3 }));
  }

  dividir() {
    // this.contador /= 2;
    // this.cambiaContador.emit(this.contador);
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
}
