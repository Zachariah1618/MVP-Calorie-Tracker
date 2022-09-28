import React from "react";
import { createRoot } from "react-dom/client";
import Form from './components/Form.jsx';
import Search from './components/Search.jsx';
const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: null,
      mealType: null,
      calories: null,
      fat: null,
      carbs: null,
      protein: null,
      foodArr: [],
      show: false
    };
    this.addToDB = this.addToDB.bind(this);
    this.setShow = this.setShow.bind(this);
  }

  addToDB (foodData) {
    console.log(foodData);
    this.setState({foodArr: [...this.state.foodArr, foodData]});
    console.log(this.state.foodArr);
  }

  setShow(bool) {
    this.setState({show: bool});
  }

  componentDidMount() {
    var tempObj = {
      foodName: 'Coffee',
      mealType: 'breakfast',
      calories: 100,
      fat: 2.85,
      carbs: 18.36,
      protein: 0.75
    };
    this.setState({foodArr: [...this.state.foodArr, tempObj]});
  }

  render() {
    return (

      <div>
        <h1>Calorie Tracker</h1>
        <h2 id='formTitle'>Add your own food!</h2>
        <button id='formBtn' onClick={() => this.setShow(true)}>Click here to add</button>
        <Form addToDB={this.addToDB} show={this.state.show} onClose={() => this.setShow(false)}/>
        <h2 id='searchTitle'>Search for Foods!</h2>
        <Search />
        <ul id='foodList' className='flex-container'>
            <li className="flex-item-top">Meal Type</li>
            <li className="flex-item-top">Food Eaten</li>
            <li className="flex-item-top">Calories</li>
            <li className="flex-item-top">Fat</li>
            <li className="flex-item-top">Carbs</li>
            <li className="flex-item-top">Protein</li>
          </ul>
        {this.state.foodArr.map((foodItem, index) => (
          <ul id='foodList' className='flex-container'>
            <li className="flex-item">{foodItem.mealType}</li>
            <li className="flex-item">{foodItem.foodName}</li>
            <li className="flex-item">{foodItem.calories} (kcal)</li>
            <li className="flex-item">{foodItem.fat} (g)</li>
            <li className="flex-item">{foodItem.carbs} (g)</li>
            <li className="flex-item">{foodItem.protein} (g)</li>
          </ul>
        ))}
          <ul id='foodList' className='flex-container-bottom'>
            <li className="flex-item"></li>
            <li className="flex-item">Totals:</li>
            <li className="flex-item">100 (kcal)</li>
            <li className="flex-item">2.85 (g)</li>
            <li className="flex-item">18.36 (g)</li>
            <li className="flex-item">0.75 (g)</li>
          </ul>

      </div>

    )
  }
}

// render the root element with the provided component
root.render(<App />);