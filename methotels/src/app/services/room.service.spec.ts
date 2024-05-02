import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RoomService } from './room.service';
import { Room } from '../models/room.model';

describe('RoomService', () => {
  let service: RoomService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoomService],
    });
    service = TestBed.inject(RoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  // Test for retrieving rooms
  it('should retrieve all rooms', () => {
    const mockRooms: Room[] = [
      { id: '1', name: 'Room 1', options: ['klima'], price: 100 },
      { id: '2', name: 'Room 2', options: ['miniBar'], price: 150 },
    ];

    service.getRooms().subscribe((rooms) => {
      expect(rooms.length).toBe(2);
      expect(rooms).toEqual(mockRooms);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rooms`);
    expect(req.request.method).toBe('GET');
    req.flush(mockRooms);
  });

  // Test for adding a room
  it('should add a room and return it', () => {
    const newRoom: Room = {
      id: '3',
      name: 'Room 3',
      options: ['sauna'],
      price: 200,
    };

    service.addRoom(newRoom).subscribe((addedRoom) => {
      expect(addedRoom).toEqual(newRoom);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rooms`);
    expect(req.request.method).toBe('POST');
    req.flush(newRoom);
  });

  // Test for updating a room
  it('should update a room and return the updated room', () => {
    const updatedRoom: Room = {
      id: '1',
      name: 'Updated Room 1',
      options: ['klima', 'miniBar'],
      price: 250,
    };

    service.updateRoom(updatedRoom).subscribe((room) => {
      expect(room).toEqual(updatedRoom);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rooms/${updatedRoom.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedRoom);
  });

  // Test for deleting a room
  it('should delete a room and return the deleted room', () => {
    const roomId = '2';

    service.deleteRoom(roomId).subscribe((deletedRoom) => {
      expect(deletedRoom.id).toEqual(roomId);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/rooms/${roomId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ id: roomId });
  });
});
