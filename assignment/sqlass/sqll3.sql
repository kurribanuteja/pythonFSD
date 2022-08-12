DROP DATABASE IF EXISTS `continent`;
CREATE DATABASE `continent`; 
USE `continent`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

CREATE TABLE `worlds` (
    `name` VARCHAR(50) NOT NULL,
    `continent` VARCHAR(50),
    `area` bigint(4),
    `population` bigint(4),
    `gdp` bigint(4),
    PRIMARY KEY (`name`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;
INSERT INTO `worlds` VALUES (' Afghanistan' ,' Asia', 652230 , 25500100 , 20343000000 );
INSERT INTO `worlds` VALUES (' Albania' , 'Europe ', 28748 , 2831741 , 12960000000 );
INSERT INTO `worlds` VALUES ( 'Algeria' , 'Africa ', 2381741 , 37100000 , 188681000000 );
INSERT INTO `worlds` VALUES ( 'Andorra' ,' Europe' , 468 , 78115 , 3712000000 );
INSERT INTO `worlds` VALUES ( 'Angola' , 'Africa ', 1246700 , 20609294 ,100990000000 );

SELECT 
    name AS big_country, area, population
FROM
    continent.worlds
WHERE
    area > 3000000 OR population > 25000000;