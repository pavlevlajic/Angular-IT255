import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { component: RoomsComponent, path: 'rooms' },
  { component: HomeComponent, path: '' },
  { component: LoginComponent, path: 'login' },
];
