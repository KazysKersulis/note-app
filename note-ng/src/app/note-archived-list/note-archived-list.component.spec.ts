import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteArchivedListComponent } from './note-archived-list.component';

describe('NoteArchivedListComponent', () => {
  let component: NoteArchivedListComponent;
  let fixture: ComponentFixture<NoteArchivedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteArchivedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteArchivedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
