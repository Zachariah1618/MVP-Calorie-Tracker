import React from "react";
import { createRoot } from "react-dom/client";
import Form from './components/Form.jsx';
import Search from './components/Search.jsx';
import API_KEY from '../config/config.js';
const axios = require('axios');
const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: null,
      mealType: null,
      calories: null,
      foodArr: [],
      show: false,
      calSum: 0
    };
    this.addToDB = this.addToDB.bind(this);
    this.setShow = this.setShow.bind(this);
    this.updateFunc = this.updateFunc.bind(this);
    this.getTotals = this.getTotals.bind(this);
  }

  addToDB (foodData) {
    console.log(foodData);
    axios.post('/caltrack', {
      params: {
        name: foodData.name,
        quantity: foodData.quantity,
        unit: foodData.unit,
        cal: foodData.cal
      }
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }


  setShow(bool) {
    this.setState({show: bool});
  }

  componentDidMount() {
    this.updateFunc();
  }

  updateFunc() {
    axios.get('/caltrack' , {
      params: {
        count: 5,
        page: 0
      }
    })
    .then((res) => {this.setState({foodArr: res.data})})
    .catch((err) => console.log(err));
    this.getTotals();
  }

  componentDidUpdate() {
    setTimeout(this.updateFunc, 1000);
    setTimeout(this.getTotals, 1000);
  }

  getTotals() {
    var arr = this.state.foodArr;
    var calcArr = [];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      calcArr.push(arr[i].cal);
    }
    for (var j = 0; j < calcArr.length; j++) {
      const temp = Number.parseInt(calcArr[j]);
      sum += temp;
    }
    this.setState({calSum: sum});
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
            <li className="flex-item-top">Food Eaten</li>
            <li className="flex-item-top">Quantity</li>
            <li className="flex-item-top">Unit</li>
            <li className="flex-item-top">Calories</li>
            <li className="flex-item-top">Date</li>
          </ul>
        {this.state.foodArr.map((foodItem, index) => (
          <ul id='foodList' className='flex-container'>
            <li className="flex-item">{foodItem.name}</li>
            <li className="flex-item">{foodItem.quantity}</li>
            <li className="flex-item">{foodItem.unit}</li>
            <li className="flex-item">{foodItem.cal} (kcal)</li>
            <li className="flex-item">{foodItem.date}</li>
          </ul>
        ))}
          <ul id='foodList' className='flex-container-bottom'>
            <li className="flex-item"></li>
            <li className="flex-item"></li>
            <li className="flex-item">Totals:</li>
            <li className="flex-item">{this.state.calSum} (kcal)</li>
            <li className="flex-item"></li>
          </ul>

      </div>

    )
  }
}

// render the root element with the provided component
root.render(<App />);