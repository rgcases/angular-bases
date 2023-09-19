import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'ironman';
    public age: number = 45;

  //metodo getter. Es como si fuese una propiedad. En el html lo trato igual

  get capitalizedName():string{

    return this.name.toUpperCase();
  }

  // Esto sí que lo trata como un método. En el html se invoca diferente al getter
  public getHeroDescription() : string {

    return `${this.name} - ${this.age} `


  }


  changeHero() : void {

      this.name = 'Spiderman';


  }

  changeAge() : void {

       this.age = 26;

  }

  resetForm() : void {

      this.name = 'ironman';
      this.age = 45;
  }


}
