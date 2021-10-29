import { BackendService } from './backend.service';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weilianlai-AngularTraining';
  // keyword='123';
  // result='';

  // data: any[] = [];
  data$: Observable<Article[]> = of([]);

  constructor(private backend:BackendService){
    this.data$=backend.getArticle();
  }



  deleteArticle(id:number){
    console.log("Delete Article ID:" + id);
  }

}
