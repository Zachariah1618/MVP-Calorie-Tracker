import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: '',
      unit: '',
      cal: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addToDB(this.state);
    this.setState({
      name: '',
      quantity: '',
      unit: '',
      cal: ''
    });
  }



  render()
  {
    if(!this.props.show) {
      return null;
    }
    return(
      <div id='foodForm'>
        <button onClick={this.props.onClose}>X</button>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Food Name:</label>
        <input type='text' id='name' value={this.state.name} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Quantity:</label>
        <input type='number' id='quantity' value={this.state.quantity} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Units:</label>
        <input type='text' id='unit' value={this.state.unit} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Calories:</label>
        <input type='number' id='cal' value={this.state.cal} onInput={this.handleInput.bind(this)}/> <br></br>
        <input type='submit' onSubmit={this.props.onClose}/> <br></br>
        </form>
      </div>
    );
  }
}

export default Form;