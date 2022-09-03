import React, { Component } from "react";
import PropTypes from "prop-types";

class Saludo extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 29 };
  }

  render() {
    return (
      <div>
        <h1>¡Hola {this.props.name}!</h1>
        <h2>Tu edad es: {this.state.age}</h2>
        <div>
          <button onClick={this.birthday}> Cumplir años </button>
        </div>
      </div>
    );
  }

  birthday = () => {
    // this.setState({ age: this.state.age + 1 });
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  };
}

Saludo.propTypes = {
  name: PropTypes.string,
};

export default Saludo;
