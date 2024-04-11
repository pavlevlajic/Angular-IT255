import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { RoomListComponent } from '../room-list/room-list.component';
import { RoomAddComponent } from '../room-form/room-form.component';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [RoomListComponent, RoomAddComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent {
  selectedRoom: Room | null = null;

  @ViewChild(RoomListComponent) roomListComponent!: RoomListComponent;

  onRoomAdded(addedRoom: Room) {
    this.roomListComponent.onRoomAdded(addedRoom);
    this.selectedRoom = null; // Reset the selected room
  }

  onRoomToEdit(room: Room) {
    this.selectedRoom = room;
  }

  onRoomUpdated(updatedRoom: Room) {
    this.roomListComponent.updateRoomInList(updatedRoom);
    this.selectedRoom = null; // Reset the selected room after updating
  }
}
