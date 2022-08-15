DROP DATABASE IF EXISTS `person_table2`;
CREATE DATABASE `person_table2`;
USE `person_table2`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `person` (
    `personID` INT(4) NOT NULL,
    `lastName` VARCHAR(20),
    `firstName` VARCHAR(20),
    PRIMARY KEY (`personID`)
)  ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
                     insert into person (personID,lastName,firstName) values(1,'Biswas','Angik'),(2,'Mukherjee','Rahul'),(3,'Ghosh','Tuhin'),
                     (5,'Saha','Amit');
				
CREATE TABLE `address` (
    `addressId` INT(4) NOT NULL,
    `personID` INT(4),
    `city` VARCHAR(20),
    `state` VARCHAR(20),
    PRIMARY KEY (`addressId`)
)  ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
                          insert into address(addressId,personID,city,state) values(1,2,'Bardhaman','West Bengal'),(2,1,'kolkata','west bengal'),(3,3,'patna','Bihar'),(4,5,null,null);
                          
use `person_table2`;
select p.firstName as 'First Name',
		p.lastName as 'Last Name' ,
        a.city ,
        a.state
        from person as p
         left join address a  on a.personId= p.personId;