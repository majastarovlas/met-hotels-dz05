import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(rooms: Room[], searchNumber: number) {

    if (!rooms) {
      return [];
    }

    if (!searchNumber) {
      return rooms;
    }

    return rooms.filter((room) => {
      return room.price <= searchNumber;
    })
  }

}
