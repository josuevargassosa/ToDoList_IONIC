import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  newTodo: string = '';
  todos: string[] = [];

  pokemonList: any[] = [];
  rickAndMorty: any[] = [];

  constructor(
    private storage: Storage,
    private pokemonService: PokemonService
  ) {
    this.storage.create();
    this.getItem();
  }

  ngOnInit() {
    this.pokemonService.getPokemonLists().subscribe((data) => {
      this.pokemonList = data.results;
      console.log('LISTA POKEMONES: ', this.pokemonList);
    });

    this.pokemonService.getRickandMorty().subscribe((data) => {
      this.rickAndMorty = data.results;
      console.log('RICK AND MORTY: ', this.rickAndMorty);
    });
  }

  setItem() {
    localStorage.setItem('proyectos', JSON.stringify(this.todos));
  }

  getItem() {
    var proyectos = localStorage.getItem('proyectos');

    if (proyectos == null) return;

    this.todos = JSON.parse(proyectos!);
    console.log(this.todos);
  }

  addTodo() {
    if (this.newTodo.trim().length > 0) {
      this.todos.push(this.newTodo);
      this.newTodo = '';
      this.setItem();
      this.getItem();
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.setItem();
  }
}
