import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { RoomService } from '../../services/room.service';
import * as RoomActions from './room.actions';

@Injectable()
export class RoomEffects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadRooms),
      switchMap(() =>
        this.roomService.getRooms().pipe(
          map((rooms) => RoomActions.loadRoomsSuccess({ rooms })),
          catchError((error) => of(RoomActions.loadRoomsFailure({ error })))
        )
      )
    )
  );

  addRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.addRoom),
      switchMap((action) =>
        this.roomService.addRoom(action.room).pipe(
          map((room) => RoomActions.addRoomSuccess({ room })),
          catchError((error) => of(RoomActions.addRoomFailure({ error })))
        )
      )
    )
  );

  updateRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.updateRoom),
      switchMap((action) =>
        this.roomService.updateRoom(action.room).pipe(
          map((room) => RoomActions.updateRoomSuccess({ room })),
          catchError((error) => of(RoomActions.updateRoomFailure({ error })))
        )
      )
    )
  );

  deleteRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.deleteRoom),
      switchMap((action) =>
        this.roomService.deleteRoom(action.id).pipe(
          map(() => RoomActions.deleteRoomSuccess({ id: action.id })),
          catchError((error) => of(RoomActions.deleteRoomFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private roomService: RoomService) {}
}
