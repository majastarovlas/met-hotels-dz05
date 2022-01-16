import { Component } from '@angular/core';
import { Room } from './models/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  price: number;

  rooms: Room[] = [

    {id: 1, title: 'Title 1', imageUrl: 'https://via.placeholder.com/350x150', price: 50},
    {id: 2, title: 'Title 2', imageUrl: 'https://via.placeholder.com/350x150', price: 60},
    {id: 3, title: 'Title 3', imageUrl: 'https://via.placeholder.com/350x150', price: 70},
  ]

  addRoom(room: Room) {

    console.log(room);
    this.rooms.push(room);
  }

  shuffleArray() {
    let currentIndex = this.rooms.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.rooms[currentIndex], this.rooms[randomIndex]] = [
        this.rooms[randomIndex], this.rooms[currentIndex]];
    }
  }
}
