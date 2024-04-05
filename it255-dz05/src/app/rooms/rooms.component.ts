import { Component } from '@angular/core';
import { Room } from '../models/room';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  rooms: Room[] = [
    {
      id: '1',
      name: 'Room 1',
    },
    {
      id: '2',
      name: 'Room 2',
    },
    {
      id: '3',
      name: 'Room 3',
    },
  ];
}
