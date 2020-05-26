CREATE TABLE serviceRequests (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NULL,
  completed BOOLEAN,
  PRIMARY KEY ( id )
);
