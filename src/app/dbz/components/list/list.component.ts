import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Gracias a @Input encima de characterList, puedo ir al main-page.component.html y donde tengo el selector de la lista, le digo que el array characterList importe los datos del array characters del mainPageComponent. Cuando hago esto, ya no me sale en mi aplicación Trunks porque era el valor por defecto y se sustituye por lo que pongo en el main

  @Input()
  public characterList: Character [] = [{

      name:'Trunks',
      power: 10
}
]



  onDeleteCharacter(id?:string): void {   // tengo que poner el id opcional porque en la creación de personajes es opcional. Si no hubiese id no llamo nada

   if (!id) return ;


      //console.log({id});


      this.onDelete.emit(id);

  }


@Output()
public onDelete: EventEmitter<string> =new EventEmitter();








  //Este array formaría parte de la clase, pero vamos a probar a importar uno del MainPageComponent
    /*public characterList: Character [] = [{

     name:'Trunks',
      power: 10
}
]
*/

}
