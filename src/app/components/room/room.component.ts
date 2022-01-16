import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() room: Room = {
    id: 0,
    title: 'Title 1',
    imageUrl: 'https://via.placeholder.com/350x150',
    price: 50
  };

  constructor() { }

  ngOnInit(): void {
  }

}
