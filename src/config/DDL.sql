create table users ( user_id serial primary key,
username varchar(20),
user_added_date date,
password varchar(10),
user_mobile varchar(11));

create table notes (note_id serial primary key,
note_title varchar(30),
note_content text,
note_status enum('pending','done','late') not null default 'pending',
note_creation_date date);

create table categories ( category_id serial primary key,
category_name varchar(30),
description text,
category_creation_date date,
creator int references users(user_id));

create table reminder ( reminder_id serial primary key,
reminder_name varchar(30),
reminder_description text,
reminder_creation_date date,
reminder_type enum('pending','done','late') not null default 'pending',
reminder_creator int references users(user_id));

create table note_category ( note_category_id serial primary key,
note_id int references notes(note_id),
category_id int references categories(category_id));

create table note_reminder ( note_reminder_id serial primary key,
note_id int references notes(note_id),
reminder_id int references reminder(reminder_id));

create table note_users ( note_users_id serial primary key,
note_id int references notes(note_id),
users_id int references users(user_id));