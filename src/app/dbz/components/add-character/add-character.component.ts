import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //vamos a utilizar output para que el valor de nombre y power introducidos vaya hasta el array inicialmente creado (el que está en la mainPage). Con EventEmitter emitimos un Character y ponemos el output para poder pasar los datos al mainPage

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();





  public character: Character = {

      name : '',
      power : 0

  }

  //metodo para que me ponga los datos en consola, los exporte y luego limpie los valores
  emitCharacter() : void{



    //debugger;

    console.log(this.character);

    if(this.character.name.length === 0) return; // si no hay valor introducido no hago nada

    else{

      this.onNewCharacter.emit(this.character);

    //this.character.name = '';
    //this.character.power = 0;
      // mejor ponerlo así:

      this.character = {name: '' , power:0};


    }

  }

}
