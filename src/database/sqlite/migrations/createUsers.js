const createUsers = `
    create table if not exists users(
	id integer primary key autoincrement,
  	name varchar,
  	email varchar,
 	password varchar,
  	avatar VARCHAR null,
  	created_at timestamp default current_timestamp,
  	updated_at timestamp default current_timestamp
  )`

  module.exports = createUsers