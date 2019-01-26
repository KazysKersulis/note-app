CREATE TABLE notes (
  note_id int not null auto_increment,
  title varchar(50) not null,
  content varchar(250) not null,
  archived bit not null,
  primary key (note_id)
);

insert into notes (title, content, archived) values ('My title', 'My note content', 1);