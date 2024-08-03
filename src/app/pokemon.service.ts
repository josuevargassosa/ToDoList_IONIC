import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';
  private rickUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  getPokemonLists(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pokemon');
  }

  getRickandMorty(): Observable<any> {
    return this.http.get<any>(this.rickUrl + 'character');
  }
}
