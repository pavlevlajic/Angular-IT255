import { createAction, props } from '@ngrx/store';
import { Room } from '../../models/room.model';

export const loadRooms = createAction('[Room List] Load Rooms');
export const loadRoomsSuccess = createAction('[Room List] Load Rooms Success', props<{ rooms: Room[] }>());
export const loadRoomsFailure = createAction('[Room List] Load Rooms Failure', props<{ error: any }>());

export const addRoom = createAction('[Room Form] Add Room', props<{ room: Room }>());
export const addRoomSuccess = createAction('[Room Form] Add Room Success', props<{ room: Room }>());
export const addRoomFailure = createAction('[Room Form] Add Room Failure', props<{ error: any }>());

export const updateRoom = createAction('[Room Form] Update Room', props<{ room: Room }>());
export const updateRoomSuccess = createAction('[Room Form] Update Room Success', props<{ room: Room }>());
export const updateRoomFailure = createAction('[Room Form] Update Room Failure', props<{ error: any }>());

export const deleteRoom = createAction('[Room List] Delete Room', props<{ id: string }>());
export const deleteRoomSuccess = createAction('[Room List] Delete Room Success', props<{ id: string }>());
export const deleteRoomFailure = createAction('[Room List] Delete Room Failure', props<{ error: any }>());

export const selectRoom = createAction('[Room List] Select Room', props<{ id: string }>());
