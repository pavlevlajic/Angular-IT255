import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { RoomAddComponent } from '../room-add/room-add.component';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule, RoomAddComponent],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css',
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });

    // Testiranje racunanja ukupnog cene na osnovu broja noci
    const ukupnaCena = this.roomService.getTotalPrice(5, 10);
    console.log('Ukupna cena: ', ukupnaCena);
  }

  onRoomAdded(addedRoom: Room) {
    this.rooms.push(addedRoom);
  }
}
