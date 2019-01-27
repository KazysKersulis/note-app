import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from 'src/app/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private BASE_URL = "http://localhost:8080/api/v1";
  public ALL_NOTES_URL = `${this.BASE_URL}/notes`;
  private ARCHIVE_NOTE_URL = `${this.BASE_URL}/archive/`;

  constructor(private http: HttpClient) { }

  getAllNotes():Observable<Note[]> {
    return this.http.get<Note[]>(this.ALL_NOTES_URL);
  }
}
