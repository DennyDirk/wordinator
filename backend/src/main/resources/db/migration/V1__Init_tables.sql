create table if not exists wordinator.user
(
  user_id bigint auto_increment primary key,
  first_name varchar(255) null,
  last_name  varchar(255) null,
  email      varchar(255) null,
  role       varchar(255) null
);

CREATE TABLE if not exists wordinator.words
(
  id int AUTO_INCREMENT primary key,
  word varchar(255),
  word_ru varchar(255)
);

