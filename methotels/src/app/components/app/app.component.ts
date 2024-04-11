import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RoomListComponent } from '../room-list/room-list.component';
import { RoomAddComponent } from '../room-form/room-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, RoomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'it255-dz05';
}
