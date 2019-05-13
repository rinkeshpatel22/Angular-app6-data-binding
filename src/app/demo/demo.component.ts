import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  public demoInterpolation: string = "This is interpolation example";
  public demoProperty: string = "This is property binding example";
  public demoSrc: string = "./../../favicon.ico";
  public demoColor: string = "blue";
  public demoStyle = {
    'color': 'green',
    'font-style': 'italic',
    'font-weight': 600
  }
  public demoInputText: string = '';
  public demoAlert(): void{
    alert('This is event binding example');
  }
  
}
