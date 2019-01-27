import { Component, OnInit, Inject } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppState } from '../store';
import { POPULATE_NOTE_LISTS, ADD_NOTE } from '../actions';
import { Note } from '../note';
import { CreateNoteDialogComponent } from '../create-note-dialog/create-note-dialog.component';
import { NoteService } from '../shared/service/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @select() notes;

  constructor(private noteService:NoteService, 
    private ngRedux: NgRedux<AppState>,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.noteService.getAllNotes().subscribe(
      res => {
        this.populateNoteList(res);
      },
      err => {
        alert("An error has occurred;")
      }
      
    )

    console.log(this.notes);
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  populateNoteList(notes: Note[]) {
    this.ngRedux.dispatch({type: POPULATE_NOTE_LISTS, notes: notes});
  }

}
