import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  counter = 0;
  sitename='Hello World';
  sitelogo='/assets/images/logo.png';
  constructor() { }

 changeTitle($event:MouseEvent){
   this.counter++;
   if ($event.ctrlKey){
     this.sitename='The Will Will Web';
   }
 }

}
