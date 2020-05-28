CREATE TABLE serviceRequests (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL,
  priority INT NOT NULL,
  completed BOOLEAN,
  PRIMARY KEY ( id )
);
