


import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//importo el uuid ( en el enlace del video está la página (Copias el npm y lo tecleas en consola). Nos generará indices automáticamente

import{v4 as uuid} from 'uuid'; // utilizamos el v4 y lo renombramos como uuid. Esto nos generaun código con los indices


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id:uuid(),
    name:'Krillin',
    power:1000
  },
  {
    id:uuid(),
    name:'Goku',
    power: 9500
  },
  {
    id:uuid(),
    name:'Vegetta',
    power: 7500

  }

];

addCharacter( character: Character) : void{

  //this.characters.unshift(character); ----> para ponerlo al principio del listado


  /*
   const newCharacter: Character = {

      id: uuid(),
      name: character.name,
      power: character.power,
   }
*/
// otra forma de hacer lo mismo con menos código. Creo que la variable y le digo que cada personaje que añada le asigne un id y el resto de atributos de character( el name y el power en este caso)


const newCharacter: Character = { id:uuid(), ...character};


  this.characters.push(newCharacter);

}

/* vamos a sustituir este método por otro que elimine personajes por el id de uuid

onDeleteCharacter(index : number): void{

      this.characters.splice(index);


}

*/

//Nuevo método de borrado de personaje por uuid

deleteCharacterById (id:string) {

      // el filter se va a recorrer todo el array y va dejar en la variable character todos los que la condición sea true, es decir, los que su id sea distinta a la que meto en el método

      this.characters=this.characters.filter( character => character.id !=id);

}






constructor() { }


}
