import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RoomState } from './state/room.state';

// Selektor za izvlačenje celokupnog state-a soba
export const selectRoomState = createFeatureSelector<RoomState>('rooms');

// Selektor za izvlačenje liste soba
export const selectAllRooms = createSelector(
  selectRoomState,
  (state: RoomState) => state.rooms
);

// Selektor za izvlačenje trenutno selektovane sobe
export const selectCurrentRoom = createSelector(
  selectRoomState,
  (state: RoomState) =>
    state.rooms.find((room) => room.id === state.selectedRoomId)
);

// Selektor za izvlačenje stanja učitavanja
export const selectRoomsLoading = createSelector(
  selectRoomState,
  (state: RoomState) => state.loading
);

// Selektor za izvlačenje potencijalnih grešaka
export const selectRoomsError = createSelector(
  selectRoomState,
  (state: RoomState) => state.error
);
