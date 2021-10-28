import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  @Input() item!: Article;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    let a = changes['item'].previousValue;
    let b = changes['item'].currentValue;
  }

  doDelete(){
    this.delete.emit(this.item.id)
  }

}
