import React from "react";
import Container from "react-bootstrap/Container";
import "./Testimonials.css";
import User1 from './User1';
import User2 from './User2';
import User3 from './User3';
import User4 from './User4';

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <Container>
        <div className="testtitle">Testimonials</div>
        <div className="testimonials">
          <div>
            <User1/>
          </div>
          <div>
            <User2/>
          </div>
          <div>
            <User3/>
          </div>
          <div>
            <User4/>
          </div>
        </div>
      </Container>
    );
  }
}
