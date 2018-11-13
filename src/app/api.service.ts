import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from './todo';
import { Observable } from 'rxjs';

const API_URL = 'https://todos-api-jookeo.herokuapp.com';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todos');
  }

  public createTodo(todo: Todo): Observable<Todo> {
     return this.http.post<Todo>(API_URL + '/todos', todo);
  }

  public getTodoById(todoId: number): Observable<Todo> {
    return this.http.get<Todo>(API_URL + '/todos/' + todoId);
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(API_URL + '/todos/' + todo.id, todo);
  }

  public deleteTodoById(todoId: number): Observable<null> {
    return this.http.delete<null>(API_URL + '/todos/' + todoId);
  }
}
