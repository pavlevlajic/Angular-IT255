import { Routes } from '@angular/router';
import { PonudaComponent } from './components/ponuda/ponuda.component';
import { PreporukaComponent } from './components/preporuka/preporuka.component';
import { ONamaComponent } from './components/o-nama/o-nama.component';

export const routes: Routes = [
  { component: PonudaComponent, path: 'ponuda' },
  { component: PreporukaComponent, path: 'preporuka' },
  { component: ONamaComponent, path: 'o-nama' },
];
