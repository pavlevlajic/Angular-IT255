import { Component } from '@angular/core';
import { Preporuka } from '../../models/preporuka.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preporuka',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preporuka.component.html',
  styleUrl: './preporuka.component.css',
})
export class PreporukaComponent {
  preporuke: Preporuka[] = [
    {
      id: '1',
      odClana: 'Ivan',
      zaClana: 'Marko',
      poruka: 'Preporučujem apartman Sunce.',
    },
    {
      id: '2',
      odClana: 'Ana',
      zaClana: 'Jelena',
      poruka: 'Vila More je odličan izbor.',
    },
    {
      id: '3',
      odClana: 'Petar',
      zaClana: 'Milica',
      poruka: 'Hotel Planina nudi odličan smeštaj.',
    },
  ];
}
