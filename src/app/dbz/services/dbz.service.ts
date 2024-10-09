import { Injectable } from '@angular/core';
import { v4 as uuid} from "uuid";
import { Character } from '../interfaces/characters.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters:Character[]=[
    {id: uuid(), name: 'Krilin', power: 10},
    {id: uuid(), name: 'Goku', power: 12000},
    {id: uuid(), name: 'Vegeta', power:1100},
    {id: uuid(), name: 'Piccolo', power:5000},


  ];
  // onDeleteCharacter(index: number):void{
  //   this.characters.splice(index,1);
  // }
  onDeleteCharacterById(id:string){
    this.characters= this.characters.filter(character => character.id !== id);
  }


  onNewCharacter(character: Character):void{
    const newCharacter: Character={
      id:uuid(), ...character
    }
    this.characters.push(newCharacter);
  }

}
