import { Note } from './note';

export interface AppState {
    notes: Note[];
}

export const INITIAL_STATE: AppState = {
    notes: []
}

export function rootReducer(state, action) {
    return state;
}