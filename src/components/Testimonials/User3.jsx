import React from "react";
import Container from "react-bootstrap/Container";
import "./Testimonials.css";
import Card from "react-bootstrap/Card";

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
      
        
          <Card className="testcard">
            <img src={this.state.person.picture.large} id="testpic" />
            <div className="testname">{this.state.person.name.first}</div>
            <br></br>
            <div className="testname">"Nice restaurant for families"</div>
          </Card>
        
    
    );
  }
}
