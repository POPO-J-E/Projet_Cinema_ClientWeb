import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {Film} from '../model/film';
import {PaginatedResponse} from '../model/paginated-response';
import {FilmList} from '../model/film-list';

@Injectable()
export class ApiService {
  constructor(private http: Http) {
  }

  getAllFilms(): Observable<PaginatedResponse<FilmList>> {
    return this.http.get('http://localhost:8181/films')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  //
  // public getSingle<T>(id: number): Observable<T> {
  //   return this.http.get<T>(this.actionUrl + id);
  // }
  //
  // public add<T>(itemName: string): Observable<T> {
  //   const toAdd = JSON.stringify({ ItemName: itemName });
  //
  //   return this.http.post<T>(this.actionUrl, toAdd);
  // }
  //
  // public update<T>(id: number, itemToUpdate: any): Observable<T> {
  //   return this.http
  //       .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
  // }
  //
  // public delete<T>(id: number): Observable<T> {
  //   return this.http.delete<T>(this.actionUrl + id);
  // }

}
