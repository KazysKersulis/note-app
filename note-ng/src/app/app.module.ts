import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState, rootReducer, INITIAL_STATE } from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteArchivedListComponent } from './note-archived-list/note-archived-list.component';
import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CreateNoteDialogComponent } from './create-note-dialog/create-note-dialog.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';

const appRoutes :Routes = [
  {
    path:'notes',
    component:NoteListComponent
  },
  {
    path:'archived',
    component:NoteArchivedListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteArchivedListComponent,
    CreateNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateNoteDialogComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
