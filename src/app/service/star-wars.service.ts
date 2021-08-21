import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  public getAllNames(): Observable<string[]> {
    return this.http.get<string[]> (`${environment.starWarsUrl}/people`);
  }

  public createPerson(person:Person):Observable<Person> {
    return this.http.post<Person> (`${environment.crudcrud}/starwars`, person, this.httpOptions);
  }
}
