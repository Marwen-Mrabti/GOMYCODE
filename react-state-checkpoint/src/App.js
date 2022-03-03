import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'Marwen Mrabti',
      bio: 'something something',
      imgSrc: './mbam.jpg',
      profession: 'engineer',
      shows: false,
    },
    interval: 0,
  };

  handleOnShow = (event) => {
    event.preventDefault();
    this.setState({
      person: { ...this.state.person, shows: !this.state.person.shows },
    });
  };

  componentDidMount = () => {
    setInterval(() => {
      this.setState({ interval: this.state.interval + 1 });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnShow}>show Profile</button>
        {this.state.person.shows && (
          <div className="profile">
            <h1 className="fullName">{this.state.person.fullName}</h1>
            <img
              src={this.state.person.imgSrc}
              alt={this.state.person.fullName}
              className="pic"
            />
            <h2>{this.state.person.profession}</h2>
            <h3>{this.state.person.bio}</h3>
          </div>
        )}
        <h1>componentDidMount : {this.state.interval} times</h1>
      </div>
    );
  }
}

export default App;
