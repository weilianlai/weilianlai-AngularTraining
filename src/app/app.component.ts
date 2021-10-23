import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weilianlai-AngularTraining';
  keyword='123';
  result='';

  doSearch(value:string){
    this.result=value;
  }

}
