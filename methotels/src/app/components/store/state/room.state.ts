// store/state/room.state.ts

import { Room } from '../../../models/room.model';

export interface RoomState {
  rooms: Room[];
  selectedRoomId: string | null;
  error: string | null;
  loading: boolean;
}

export const initialRoomState: RoomState = {
  rooms: [],
  selectedRoomId: null,
  error: null,
  loading: false,
};
