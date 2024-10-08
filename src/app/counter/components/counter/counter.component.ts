import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="increaseBy(-1)">-1</button>
      <button (click)="multiplyBy()">x10</button>
      <button (click)="resetButton()">Reset</button>
      <h3>Counter: {{counter}}</h3>


  `
})

export class CounterComponent {
  public counter: number = 10.0;
  increaseBy(value:number):void{
    this.counter+=value;
  }
  multiplyBy():void{
    this.counter= this.counter*10;
  }
  resetButton():void{
    this.counter=10.0;
  }
}
