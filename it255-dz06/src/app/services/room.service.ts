import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  rooms: Room[] = [];

  constructor() {}

  addRoom(room: Room) {
    this.rooms.push(room);
  }

  getRooms(): Room[] {
    return this.rooms;
  }
}
