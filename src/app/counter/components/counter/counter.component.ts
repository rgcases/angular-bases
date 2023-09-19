
//FORMA MANUAL
/*
import { Component } from "@angular/core";

//pongo decorador component para que sea un componente

@Component({
  selector: 'app-counter',
  template: '<h1>Hola Counter</h1>',
})


export class CounterComponent {

}
*/


//FORMA AUTOMATICA. Escribo a-component y tabulo

import { Component } from '@angular/core';
import { AppComponent } from '../../../app.component';



@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent   {

  public counter:number = 10;

  increaseBy( value:number): void {

      this.counter += value;

  }

  resetCounter ():void {
    this.counter = 10;

  }

}
