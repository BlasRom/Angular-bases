//import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl:'./list.component.html',
  styleUrls:['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:10
  }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if(!id)return;
    console.log(id);
    //to do: Emitir el ID del personaje
    this.onDelete.emit(id);
  }
 }
