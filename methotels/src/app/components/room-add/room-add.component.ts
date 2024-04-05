import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

interface RoomOptions {
  klima: boolean;
  miniBar: boolean;
  sauna: boolean;
}

interface RoomPrices {
  klima: number;
  miniBar: number;
  sauna: number;
}

@Component({
  selector: 'app-room-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './room-add.component.html',
  styleUrl: './room-add.component.css',
})
export class RoomAddComponent {
  options: RoomOptions = {
    klima: false,
    miniBar: false,
    sauna: false,
  };

  prices: RoomPrices = {
    klima: 10,
    miniBar: 20,
    sauna: 30,
  };

  constructor(private roomService: RoomService) {}

  onAddRoom(form: NgForm) {
    const selectedOptions = Object.keys(this.options).filter(
      (key) => this.options[key as keyof RoomOptions] === true
    );

    let price = 0;

    Object.keys(this.prices).forEach(key => {
      if (selectedOptions.includes(key)) {
        price += this.prices[key as keyof RoomPrices];
      }
    })

    const newRoom: Room = {
      id: form.value.id,
      name: form.value.name,
      options: selectedOptions,
      price: price
    };

    console.log(newRoom);

    this.roomService.addRoom(newRoom);

    form.reset();
  }
}
