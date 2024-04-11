import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
  selector: 'app-room-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css'],
})
export class RoomAddComponent implements OnChanges {
  @Input() room: Room | null = null;
  @Output() roomAdded: EventEmitter<Room> = new EventEmitter<Room>();
  @Output() roomUpdated: EventEmitter<Room> = new EventEmitter<Room>();

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

  roomForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    roomOptions: new FormGroup({
      klima: new FormControl(this.options.klima),
      miniBar: new FormControl(this.options.miniBar),
      sauna: new FormControl(this.options.sauna),
    }),
  });

  constructor(private roomService: RoomService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['room'] && this.room) {
      this.roomForm.patchValue({
        id: this.room.id,
        name: this.room.name,
        roomOptions: {
          klima: this.room.options?.includes('klima'),
          miniBar: this.room.options?.includes('miniBar'),
          sauna: this.room.options?.includes('sauna'),
        },
      });
    }
  }
  
  onAddRoom(): void {
    if (this.roomForm.valid) {
      const selectedOptions = Object.keys(
        this.roomForm.value.roomOptions
      ).filter(
        (key) =>
          this.roomForm.value.roomOptions[key as keyof RoomOptions] === true
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

      if (this.room) {
        // Update room
        this.roomService.updateRoom(newRoom).subscribe((updatedRoom) => {
          this.roomUpdated.emit(updatedRoom);
          this.resetForm();
        });
      } else {
        // Add room
        this.roomService.addRoom(newRoom).subscribe((addedRoom) => {
          this.roomAdded.emit(addedRoom); // Emit the added room
          this.resetForm();
        });
      }
    }
  }

  resetForm(): void {
    this.roomForm.reset();
    this.room = null; // Reset the selected room
  }
}
