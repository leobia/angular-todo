import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { from } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  // E' il metodo inizializzatore del componente, solitamente il costruttore non deve
  //fare molte cose ma le si fanno fare all'init
  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        completed: false
      },
      {
        id: 2,
        title: 'Todo Two',
        completed: true
      },
      {
        id: 3,
        title: 'Todo Three',
        completed: false
      }
    ]
  }

}
