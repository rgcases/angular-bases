import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {


  //utilizo el constructor para hacer la inyección de dependencias, en este caso, hay que inyectar el dbz.service.ts que es donde tengo los characters y sus 2 metodos
   constructor(private dbzService : DbzService){}

    // es buena práctica hacerlo private y enviar los datos a través de getters y setters

    get characters(): Character[]{

        return this.dbzService.characters;

    }


    onDeleteCharacter(id: string): void {

        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter(character : Character):void {

        this.dbzService.addCharacter(character);


    }

   }


