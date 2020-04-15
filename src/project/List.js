import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
    };
  }
  componentDidMount() {
    const URL = "http://localhost:5500/heroes";
    axios.get(URL).then((res) => {
      console.log(res.data);

      const heroes = res.data;
      this.setState({ heroes });
    });
  }

  render() {
    const showheroes = this.state.heroes.map((item) => (
      <Col>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={item.values.imgURL} />
            <Card.Body>
              <Card.Text>
                Name: {item.values.fullName} <br />
                Born : {item.values.born} <br />
                Died : {item.values.died} <br />
                Description : {item.values.description} <br />
                Establishment : {item.values.establishment}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    ));

    return (
      <div>
        <div className="container mt-3">
          <div className="row">{showheroes}</div>
        </div>
      </div>
    );
  }
}
export default List;
