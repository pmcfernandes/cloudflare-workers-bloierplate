DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT, [password] TEXT);

INSERT INTO users (username, [password]) VALUES ('admin', 'admin');
INSERT INTO users (username, [password]) VALUES ('user', 'user');
