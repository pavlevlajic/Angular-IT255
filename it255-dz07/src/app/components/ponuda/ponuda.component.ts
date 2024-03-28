import { Component } from '@angular/core';
import { Ponuda } from '../../models/ponuda.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ponuda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ponuda.component.html',
  styleUrl: './ponuda.component.css',
})
export class PonudaComponent {
  ponude: Ponuda[] = [
    { id: '1', nazivApartmana: 'Apartman 1', cena: 100 },
    { id: '2', nazivApartmana: 'Apartman 2', cena: 150 },
    { id: '3', nazivApartmana: 'Apartman 3', cena: 200 },
  ];
}
