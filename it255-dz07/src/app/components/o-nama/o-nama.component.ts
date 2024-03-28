import { Component } from '@angular/core';
import { ONama } from '../../models/onama.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-o-nama',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './o-nama.component.html',
  styleUrl: './o-nama.component.css',
})
export class ONamaComponent {
  oNamaPodaci: ONama[] = [
    {
      id: '1',
      ime: 'Met Hotels',
      opis: 'Najbolji apartmani na obali mora Crne Gore.',
    },
  ];
}
