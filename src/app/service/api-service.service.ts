import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Http, Response, Headers} from '@angular/http';
import {PaginatedResponse} from '../model/paginated-response';
import {FilmList} from '../model/film/film-list';
import {ActorList} from '../model/actor/actor-list';
import {Film} from '../model/film/film';
import {Actor} from '../model/actor/actor';
import {CharacterList} from '../model/character/character-list';
import {Router} from '@angular/router';

@Injectable()
export class ApiService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllFilms(): Observable<PaginatedResponse<FilmList>> {
    return this.http.get('http://localhost:8181/films')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getFilm(film: Film): Promise<Film> {
    const url = 'http://localhost:8181/films/' + film.noFilm;
    return this.http.get(url).toPromise().then(res => res.json().data as Film);
  }
  getFilmById(id: number): Observable<Film> {
    const url = 'http://localhost:8181/films/' + id;
    return this.http.get(url).map((res: Response) => res.json());
  }
  getActorById(id: number): Observable<Actor> {
    const url = 'http://localhost:8181/acteurs/' + id;
    return this.http.get(url).map((res: Response) => res.json());
  }

  getAllActors(): Observable<PaginatedResponse<ActorList>> {
    return this.http.get('http://localhost:8181/acteurs')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getCharacterByIdFilm(id: number): Observable<PaginatedResponse<CharacterList>> {
    return this.http.get('http://localhost:8181/films/' + id + '/personnages')
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
  //   const url = 'http://localhost:8181/films/';
  //
  //
  //   return this.http.post<T>(this.actionUrl, toAdd);
  // }
  //
  // public update<T>(id: number, itemToUpdate: any): Observable<T> {
  //   return this.http
  //       .put<T>(this.actionUrl + id, JSON.stringify(itemToUpdate));
  // }
  createFilm(film: Film): Promise<Film> {
    const url = 'http://localhost:8181/films/';
    return this.http
        .post(url, JSON.stringify(film), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Film);
  }
  createActor(actor: Actor): Promise<Actor> {
    const url = 'http://localhost:8181/acteurs/';
    return this.http.post(url, JSON.stringify(actor), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Actor);
  }
  updateFilm(film: Film): Promise<Film> {
    console.log(film.noFilm);
    const url = 'http://localhost:8181/films/' + film.noFilm;
    return this.http
        .put(url, JSON.stringify(film), {headers: this.headers})
        .toPromise()
        .then(() => film);
  }
  updateActor(actor: Actor): Promise<Actor> {
    const url = 'http://localhost:8181/acteurs/' + actor.noAct;
    return this.http
        .put(url, JSON.stringify(actor), {headers: this.headers})
        .toPromise()
        .then(() => actor);
  }
  deleteFilm(film: Film): Promise<void> {
    const url = 'http://localhost:8181/films/' + film.noFilm;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null);
  }
  deleteActor(actor: Actor): Promise<void> {
    const url = 'http://localhost:8181/acteurs/' + actor.noAct ;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null);
  }

}
