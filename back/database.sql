-- port 5432
CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
CREATE TABLE boombam(
    boom_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);