CREATE DATABASE `person_table3`;
USE `person_table3`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `Emp` (
    `personID` INT(4) NOT NULL,
    `personName` VARCHAR(20),
    `Salary` int(6),
    `managerID` int(4),
    PRIMARY KEY (`personID`)
) 
ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
                     insert into Emp (personID,personName,Salary,managerID) values(1,'joe',70000,3),(2,'Henry',80000,4),(3,'Sam',60000,Null),
                     (4,'Max',90000,Null);
                     
create table `Manager`(
                        `managerId` int(4) not null,
                        `salary` int(6),
                        primary key(`managerId`)
                        )ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
                        insert into Manager(managerId,salary) values(1,4050),(2,3423),(3,4000),(4,3050);

use `person_table3`;
select e.personName as 'Employee'
from Emp as e,
	 Manager as m
where e.salary> m.salary
and e.managerId=m.managerId