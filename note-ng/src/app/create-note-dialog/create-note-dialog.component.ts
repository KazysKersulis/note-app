import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { select, NgRedux } from '@angular-redux/store';
import { NoteService } from '../shared/service/note.service';
import { Note } from '../note';
import { ADD_NOTE } from '../actions';
import { AppState } from '../store';

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent implements OnInit {

  @select() notes;

  model:Note = {
    id: 0,
    content: "",
    archived: false,
    create: new Date()
  }

  constructor(private ngRedux:NgRedux<AppState>,
    private noteService:NoteService,
    public dialogRef: MatDialogRef<CreateNoteDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_NOTE, note: this.model});
    // this.noteService
  }

}
