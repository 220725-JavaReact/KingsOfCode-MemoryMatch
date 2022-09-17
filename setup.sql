create table users (
	user_id serial primary key,
	name varchar(255),
	email varchar(255),
	username varchar(255),
	user_password varchar(255)
)

create table games (
	game_id serial primary key,
	user_id int references users,
	turns int,
	deck_size int,
	score bigint
)