CREATE TABLE notes (
  note_id int not null auto_increment,
  content varchar(250) not null,
  archived bit not null,
  primary key (note_id)
);

insert into notes (content, archived) values ('My note content', 0);