import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'; // Import FormGroup, FormControl, and Validators
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';

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
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css'],
})
export class RoomAddComponent {
  options: RoomOptions = {
    klima: false,
    miniBar: false,
    sauna: false,
  };

  roomForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    roomOptions: new FormGroup({
      klima: new FormControl(this.options.klima),
      miniBar: new FormControl(this.options.miniBar),
      sauna: new FormControl(this.options.sauna),
    }),
  }); // Define roomForm as a FormGroup

  prices: RoomPrices = {
    klima: 10,
    miniBar: 20,
    sauna: 30,
  };

  constructor(private roomService: RoomService) {}

  onAddRoom() {
    if (this.roomForm.valid) {
      console.log(this.roomForm.value);

      const selectedOptions = Object.keys(this.roomForm.value.roomOptions).filter(
        (key) => this.roomForm.value.roomOptions[key as keyof RoomOptions] === true
      );

      let price = 0;

      Object.keys(this.prices).forEach((key) => {
        if (selectedOptions.includes(key)) {
          price += this.prices[key as keyof RoomPrices];
        }
      });

      const newRoom: Room = {
        id: this.roomForm.value.id,
        name: this.roomForm.value.name,
        options: selectedOptions,
        price: price,
      };

      console.log(newRoom);

      this.roomService.addRoom(newRoom);

      this.roomForm.reset();
    }
  }
}
