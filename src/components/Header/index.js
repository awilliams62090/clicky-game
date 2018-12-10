import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./jumbotron.css"

const Header = (props) => {
  return (
    <div className="Jumbotron">
      <Jumbotron fluid>
        <Container fluid>
          <h5> Click as many Toy Story Characters as you can without clicking on the same one more than once! </h5>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;