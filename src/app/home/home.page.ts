import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newTodo: string = '';
  todos: string[] = [];

  constructor(private storage: Storage) {
    this.storage.create();
    this.getItem();
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
