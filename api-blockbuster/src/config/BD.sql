create database bd-blockbuster;
use bd-blockbuster;

create table Generos(
    ID int NOT NULL auto_increment,
    Genero varchar(50) 	NOT NULL,
    primary key(id)
);

create table Peliculas(
    ID int NOT NULL auto_increment,
    Titulo varchar(120) NOT NULL,
    Director varchar(100),
    Anio int,
    Genero int,
    primary key(ID),
    foreign key(Genero) references Generos(ID)
);


INSERT INTO Generos(Genero) values('Psicologica');
INSERT INTO Generos(Genero) values('Comedia');
INSERT INTO Peliculas(Titulo,Director,Anio,Genero) 
VALUES('El Maquinista', 'John Howling', 2001, 1);