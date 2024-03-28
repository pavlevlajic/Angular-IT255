import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-room-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room-add.component.html',
  styleUrl: './room-add.component.css',
})
export class RoomAddComponent {
  // private RoomService roomService = new RoomService();
  constructor(private roomService: RoomService) {}

  onAddRoom(form: NgForm) {
    const newRoom: Room = {
      id: form.value.id,
      name: form.value.name,
    };
    this.roomService.addRoom(newRoom);
    form.reset();
  }
}
