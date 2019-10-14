import * as types from "./actionTypes";
import NotesAPI from "../api/NotesAPI";

export function getNotes() {
  return dispatch => {
    NotesAPI.getAll().then(notes => {
      dispatch({
        type: types.GET_NOTES,
        notes: notes
      });
    });
  };
}

export function createNote(note) {
  return dispatch => {
    NotesAPI.create(note).then(note => {
      dispatch({
        type: types.CREATE_NOTE,
        note: note
      });
    });
  };
}

export function deleteNote(id) {
  return dispatch => {
    NotesAPI.delete(id).then(response => {
      dispatch({
        type: types.DELETE_NOTE,
        id
      });
    });
  };
}
