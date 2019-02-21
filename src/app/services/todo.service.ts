import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosMockUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosMockLimit: string = '?_limit=8';
  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosMockUrl + this.todosMockLimit);
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = this.todosMockUrl + '/' + todo.id;
    return this.http.put(url, todo, httpOptions);
  }

  // fa solo la richiesta http ma il server di mock chiaramente non lo elimina
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = this.todosMockUrl + '/' + todo.id;
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Aggiunge un todo
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosMockUrl, todo, httpOptions);
  }
}
