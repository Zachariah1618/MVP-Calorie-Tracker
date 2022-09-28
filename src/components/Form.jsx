import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      mealType: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
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
      foodName: '',
      mealType: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
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
        <input type='text' id='foodName' value={this.state.foodName} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Meal Type:</label>
        <select id='mealType' onInput={this.handleInput.bind(this)}>
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='dinner'>Dinner</option>
          <option value='snack'>Snack</option>
        </select> <br></br>
        <label>Calories:</label>
        <input type='number' id='calories' value={this.state.calories} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Fat:</label>
        <input type='number' id='fat' value={this.state.fat} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Carbs:</label>
        <input type='number' id='carbs' value={this.state.carbs} onInput={this.handleInput.bind(this)}/> <br></br>
        <label>Protein:</label>
        <input type='number' id='protein' value={this.state.protein} onInput={this.handleInput.bind(this)}/> <br></br>
        <input type='submit' onSubmit={this.props.onClose}/> <br></br>
        </form>
      </div>
    );
  }
}

export default Form;