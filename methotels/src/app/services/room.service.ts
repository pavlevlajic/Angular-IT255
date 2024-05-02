import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

// Servis sa pogledima (observables)
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  public apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.apiUrl}/rooms`, room, httpOptions);
  }

  updateRoom(room: Room): Observable<Room> {
    return this.http.put<Room>(
      `${this.apiUrl}/rooms/${room.id}`,
      room,
      httpOptions
    );
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms`);
  }

  deleteRoom(id: string): Observable<Room> {
    return this.http.delete<Room>(`${this.apiUrl}/rooms/${id}`);
  }

  getTotalPrice(quantity: number, price: number) {
    return quantity * price;
  }
}
