import { Note } from './note';
import { POPULATE_NOTE_LISTS, ADD_NOTE, ARCHIVE_NOTE } from './actions';

export interface AppState {
    notes: Note[];
    archivedNotes: Note[]
}

export const INITIAL_STATE: AppState = {
    notes: [],
    archivedNotes: []
}

export function rootReducer(state, action) {
    switch(action.type) {
        case POPULATE_NOTE_LISTS: {
            console.log("aser");
            return Object.assign({}, state, {
                notes: action.notes.filter(n => n.archived == false),
                archivedNotes: state.notes.filter(n => n.archived == true)
            })
        }
        case ADD_NOTE: {
            action.note.id = state.notes.length + 1;
            return Object.assign({}, state, {
                notes: state.notes.concat(Object.assign({}, action.note))
            })
        }
        case ARCHIVE_NOTE: {
            let note = state.notes.find(n => n.id === action.id);
            let index = state.notes.indexOf(note);
            return Object.assign({}, state, {
                notes: [
                    ...state.notes.slice(0, index),
                    Object.assign({}, note, {archived: !note.archived}),
                    ...state.notes.slice(index + 1)
                ],
                archivedNotes: state.archivedNotes.concat(Object.assign({}, action.note))
            })
        }
    }
    return state;
}