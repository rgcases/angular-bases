import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';

// Esta lógica debe ir dentro de cada componente. En este caso dentro de counter.component.ts :
/*
  public counter:number = 10;


  increaseBy( value:number): void {

    this.counter += value;

}

resetCounter ():void {
  this.counter = 10;

}
*/
}
