import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent{
  public name: string = 'Spider-Man'
  public age:  number = 22;

  changeName():void{
    this.name="Ironman"
  }
  changeAge():void{
    this.age=45
  }
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{

    return `${this.name} - ${this.age}`;
  }
  resetForm():void{
    this.name="Spider-man";
    this.age= 22;
  }
}
