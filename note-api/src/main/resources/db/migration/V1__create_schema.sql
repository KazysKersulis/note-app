CREATE TABLE notes (
  id int not null auto_increment,
  content varchar(250) not null,
  archived bit(1) not null DEFAULT b'0',
  created timestamp DEFAULT NOW(),
  primary key (id)
);

insert into notes (content) values ('My note content');