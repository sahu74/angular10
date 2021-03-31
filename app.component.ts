import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'rest-frontend';
  number= 3;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  x=3;
  color: string;
  title="Angular Property Binding Example"
  getColor() {
    return 'red';
  }
  isValid:boolean;
  changeMe(valid: boolean)
  {
    this.isValid=valid;
  }
status:string='error';
  //Example 1
  isDisabled= false;
  
  getClass() {
    return 'yellow';
  }
  cssStringVar: string= 'red size20';




}
