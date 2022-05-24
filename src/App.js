import React, { Component } from 'react';
class App extends React.Component {
constructor(props) {
super(props);
this.state = {data: '',
age:''
};
this.onChange = this.onChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
onChange = e => { // arrow function
  this.setState({ [e.target.name]: e.target.value });
  };
handleSubmit(event) {
alert('vous êtes ' + this.state.data+' vous avez '+this.state.age+' ans');
//event.preventDefault();
}
render() {
  return (
  <form onSubmit={this.handleSubmit}>
  <h1>Bienvenu {this.state.data}</h1>
  <label>
  Name: 
  <input type="text" name="data" value={this.state.data} onChange={this.onChange} />
  </label>
  <label>
  Age: 
  <input type="number" min="1" name="age" value={this.state.age} onChange={this.onChange} />
  </label>
  <input type="submit" value="Submit" />
  </form>
  );
  }
  }
  export default App;