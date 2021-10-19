DROP DATABASE IF EXISTS lookalotalike;
CREATE DATABASE lookalotalike;

USE lookalotalike;

CREATE TABLE lookalikes (
    id INTEGER NOT NULL AUTO_INCREMENT,
    caption TEXT NOT NULL,
    url TEXT NOT NULL,
);