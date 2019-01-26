import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { ADD_NOTE } from '../actions';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  @select() notes;

  constructor() { }

  ngOnInit() {
  }

}
