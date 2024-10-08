import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public title: string = 'Mi primer App de angular';
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
