import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listHeroes: string[]=['Spiderman',"Hulk","DareDevil","Ant-Man"];
  public deletedHero?:string;
  removeLastHero():void{
  this.deletedHero=this.listHeroes.pop();

  }
}
