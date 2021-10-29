import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  keyword='123';
  result='';

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(value:string){
    this.result=value;
  }

}
