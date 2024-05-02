import { createReducer, on } from '@ngrx/store';
import { RoomState, initialRoomState } from './state/room.state';
import * as RoomActions from './room.actions';

export const roomReducer = createReducer(
  initialRoomState,
  on(RoomActions.loadRooms, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(RoomActions.loadRoomsSuccess, (state, { rooms }) => ({
    ...state,
    rooms: rooms,
    loading: false,
    error: null
  })),
  on(RoomActions.loadRoomsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  })),
  on(RoomActions.addRoomSuccess, (state, { room }) => ({
    ...state,
    rooms: [...state.rooms, room]
  })),
  on(RoomActions.updateRoomSuccess, (state, { room }) => ({
    ...state,
    rooms: state.rooms.map(r => r.id === room.id ? room : r)
  })),
  on(RoomActions.deleteRoomSuccess, (state, { id }) => ({
    ...state,
    rooms: state.rooms.filter(r => r.id !== id)
  })),
  on(RoomActions.selectRoom, (state, { id }) => ({
    ...state,
    selectedRoomId: id
  }))
);
