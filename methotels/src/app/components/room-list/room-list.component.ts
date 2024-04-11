import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { RoomAddComponent } from '../room-form/room-form.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RoomAddComponent],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];

  @Output() roomToEdit = new EventEmitter<Room>();

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  onEditRoom(room: Room) {
    this.roomToEdit.emit(room);
  }

  // Call this method when a room is updated
  updateRoomInList(updatedRoom: Room) {
    const index = this.rooms.findIndex((room) => room.id === updatedRoom.id);
    if (index !== -1) {
      this.rooms[index] = updatedRoom;
    }
  }

  onRoomAdded(addedRoom: Room) {
    this.rooms.push(addedRoom); // Add the new room to the local array
  }

  onDeleteRoom(id: string) {
    this.roomService.deleteRoom(id).subscribe((room) => {
      this.rooms = this.rooms.filter((x) => x.id !== room.id);
    });
  }
}
