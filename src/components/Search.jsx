import React from 'react';
const axios = require('axios');
import API_KEY from '../../config/config.js';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      units:
      [{
        "id": "urn:uuid:c2a18c35-f4e7-4297-b8de-1e0f1bd16cfb",
        "description": "Teaspoon",
        "abbr": "tsp"
      }, {
        "id": "urn:uuid:1c8d43b3-6b19-43ab-95f0-803a37fdf4f1",
        "description": "Tablespoon",
        "abbr": "Tbs"
      }, {
        "id": "urn:uuid:dfad1d25-17ff-4201-bba0-0711e8b88c65",
        "description": "Cup",
        "abbr": "c"
      }, {
        "id": "urn:uuid:33379b7d-cf8d-4fda-b99d-40372492aafd",
        "description": "Piece",
        "abbr": "pce"
      }, {
        "id": "urn:uuid:85562e85-ba37-4e4a-8400-da43170204a7",
        "description": "Each",
        "abbr": "ea"
      }, {
        "id": "urn:uuid:e0ad190a-d48b-443e-b637-e1cf05db2cdb",
        "description": "Ounce-weight",
        "abbr": "oz"
      }, {
        "id": "urn:uuid:3e8384f0-ea47-4fde-b7e1-a12747b28a30",
        "description": "Pound",
        "abbr": "lb"
      }, {
        "id": "urn:uuid:d3be684c-ebfa-4861-924f-8840600d1e84",
        "description": "Gram",
        "abbr": "g"
      }, {
        "id": "urn:uuid:0e5f4dd2-3353-477f-9773-0ed116c93e2e",
        "description": "Kilogram",
        "abbr": "Kg"
      }, {
        "id": "urn:uuid:20346378-1e1f-4d65-8833-6119228e8639",
        "description": "Fluid ounce",
        "abbr": "fl oz"
      }, {
        "id": "urn:uuid:a5b9f8c0-77fb-40c0-9018-43678710f8e7",
        "description": "Milliliter",
        "abbr": "ml"
      }, {
        "id": "urn:uuid:96b8744b-6db7-4448-b1fb-63a2c8695a0e",
        "description": "Liter",
        "abbr": "ltr"
      }, {
        "id": "urn:uuid:4579233c-4dcd-46f6-a0ec-e2ff289068e4",
        "description": "Gallon",
        "abbr": "gal"
      }, {
        "id": "urn:uuid:3f2f0bb4-d5b2-4edd-be04-5371c666c3c2",
        "description": "Pint",
        "abbr": "pnt"
      }, {
        "id": "urn:uuid:7c43861a-2df6-46bc-ab49-e831f767d69e",
        "description": "Quart",
        "abbr": "qt"
      }, {
        "id": "urn:uuid:9eda6d41-4fbb-4a97-b046-46aee8a086de",
        "description": "Milligram",
        "abbr": "mg"
      }, {
        "id": "urn:uuid:e1d79375-15db-4ed7-8ead-f64dc2319091",
        "description": "Microgram",
        "abbr": "mcg"
      }, {
        "id": "urn:uuid:48aab0ea-2133-49bc-b516-3f33bc156a44",
        "description": "Intake",
        "abbr": "intk"
      }, {
        "id": "urn:uuid:e08f6190-c3a2-43ea-a109-8a5d819d3e99",
        "description": "Individual Cup",
        "abbr": "indv cup"
      }, {
        "id": "urn:uuid:c23f5be0-7cb4-4912-a008-ec21970cded8",
        "description": "Bottle",
        "abbr": "btl"
      }, {
        "id": "urn:uuid:ad6cbe95-5d48-440d-858d-d51261d983b5",
        "description": "Box",
        "abbr": "box"
      }, {
        "id": "urn:uuid:89863254-21e1-4df0-8c1f-7960384d31f1",
        "description": "Can",
        "abbr": "can"
      }, {
        "id": "urn:uuid:23c08c16-b29e-4132-bb8e-c4c6050fd590",
        "description": "Individual Bag",
        "abbr": "indv bag"
      }, {
        "id": "urn:uuid:e50ea8fe-7b89-442d-a715-1d5328e05b6d",
        "description": "Cube",
        "abbr": "cube"
      }, {
        "id": "urn:uuid:413fb89e-78d1-4a31-bdca-b5c67a6c1f5e",
        "description": "Jar",
        "abbr": "jar"
      }, {
        "id": "urn:uuid:6bac9dab-275f-4aac-95ba-e0a76d0d481b",
        "description": "Stick",
        "abbr": "stick"
      }, {
        "id": "urn:uuid:e5cdc689-9d9c-4042-918e-7fc6fd072c00",
        "description": "Tablet",
        "abbr": "tblt"
      }, {
        "id": "urn:uuid:a2f86cff-af4a-4830-b2cb-4127502ce8c0",
        "description": "Bowl",
        "abbr": "bowl"
      }, {
        "id": "urn:uuid:a7c3f08d-e9a9-43d1-b19b-f6c9077c06b0",
        "description": "Meal",
        "abbr": "meal"
      }, {
        "id": "urn:uuid:3340624b-f24d-4997-9ca6-11221b22008e",
        "description": "Slice",
        "abbr": "slice"
      }, {
        "id": "urn:uuid:c7b277ed-2059-4c33-940b-8e5c7aa5c922",
        "description": "Serving",
        "abbr": "svg"
      }, {
        "id": "urn:uuid:3c653ceb-bab8-48ba-b5b6-abf3abf8ff7b",
        "description": "300 Can",
        "abbr": "300can"
      }, {
        "id": "urn:uuid:a5e6af43-d9f0-4111-8ed3-7f3c200b2adf",
        "description": "303 Can",
        "abbr": "303can"
      }, {
        "id": "urn:uuid:ba454276-ad4e-4978-97bb-b14eab7de24c",
        "description": "401 Can",
        "abbr": "401can"
      }, {
        "id": "urn:uuid:1976182f-e999-4a85-ae82-57e8bccadaf9",
        "description": "404 Can",
        "abbr": "404can"
      }, {
        "id": "urn:uuid:3e82fd97-bb64-47b9-9f20-5343c9b8e766",
        "description": "Individual Packet",
        "abbr": "indv pkt"
      }, {
        "id": "urn:uuid:f9218e61-ec72-438a-a5b4-95da706d1384",
        "description": "Scoop",
        "abbr": "scoop"
      }, {
        "id": "urn:uuid:1de2997f-41e6-42be-9dd8-dc56e15866b9",
        "description": "Regular",
        "abbr": "reg"
      }, {
        "id": "urn:uuid:f9295b4e-9fdf-4a95-b4aa-8137bc6b5a97",
        "description": "Small",
        "abbr": "sml"
      }, {
        "id": "urn:uuid:594f5eb0-2594-43b5-b8d2-71980820aa51",
        "description": "Medium",
        "abbr": "med"
      }, {
        "id": "urn:uuid:e8403434-fd64-4151-bf26-0a55943f5ee8",
        "description": "Large",
        "abbr": "lrg"
      }, {
        "id": "urn:uuid:6542699c-dd38-44b8-8f53-aacf0a5ab9e4",
        "description": "Extra Large",
        "abbr": "xlrg"
      }, {
        "id": "urn:uuid:7a5f5a69-72de-4cb2-a03e-3c6509334a50",
        "description": "Individual",
        "abbr": "indv"
      }, {
        "id": "urn:uuid:8e401dd0-52db-42ea-b83a-cb92ece93d25",
        "description": "Side",
        "abbr": "side"
      }, {
        "id": "urn:uuid:73c72be2-a791-4c3d-a569-bb1161c8661b",
        "description": "Appetizer",
        "abbr": "apptzr"
      }, {
        "id": "urn:uuid:1c535625-8f2b-4531-95dd-28f91239d40c",
        "description": "Entree",
        "abbr": "entree"
      }, {
        "id": "urn:uuid:04ed21cc-a5b7-4b2c-a2c8-46ec62afa2cd",
        "description": "Capsule",
        "abbr": "cap"
      }, {
        "id": "urn:uuid:bd6d5072-27d2-4696-b1ad-9dba640c2da1",
        "description": "Kids'",
        "abbr": "kids'"
      }, {
        "id": "urn:uuid:198149f8-4499-487b-9761-2028cdae404f",
        "description": "Whole",
        "abbr": "whole"
      }, {
        "id": "urn:uuid:dc2c5b20-121b-431a-8fe7-9b857ab13d4f",
        "description": "Pat",
        "abbr": "pat"
      }, {
        "id": "urn:uuid:1a279ab6-e402-4e48-8084-9082f901f979",
        "description": "Pouch",
        "abbr": "pouch"
      }, {
        "id": "urn:uuid:bac1c341-500f-49db-8b28-4dd17e979cfa",
        "description": "Drop",
        "abbr": "drop"
      }, {
        "id": "urn:uuid:c48cb6bc-b234-4eab-82a6-5e9a1a0b391d",
        "description": "Jumbo",
        "abbr": "jumbo"
      }, {
        "id": "urn:uuid:efacb809-36ef-49aa-913b-8fcc0f38fe4b",
        "description": "Second Spray",
        "abbr": "sec spray"
      }, {
        "id": "urn:uuid:ad22c3fe-1db1-45f1-9c0a-bdf00569e02b",
        "description": "Topping",
        "abbr": "topping"
      }, {
        "id": "urn:uuid:6954ef62-e196-4824-8b70-9de685d75b72",
        "description": "Portion Cup",
        "abbr": "port cup"
      }, {
        "id": "urn:uuid:fea6bc70-a915-4329-95f5-8e3d50cbbb92",
        "description": "Caplet",
        "abbr": "caplet"
      }, {
        "id": "urn:uuid:4cbd7196-69c9-403f-940c-f6f567b7b7f8",
        "description": "Mini",
        "abbr": "mini"
      }, {
        "id": "urn:uuid:ce0140e7-92aa-4bb5-8548-71ed36738056",
        "description": "Cubic Inch",
        "abbr": "cubic in"
      }, {
        "id": "urn:uuid:2daae0db-ebad-423a-a747-8d8c33958ada",
        "description": "Thin Slice",
        "abbr": "thin slc"
      }, {
        "id": "urn:uuid:cd70ea89-2e0e-4309-b4c9-4ce7f9549c6f",
        "description": "Sheet",
        "abbr": "sheet"
      }, {
        "id": "urn:uuid:7dc9f4a0-e593-4dfb-b20c-a355aa396fa7",
        "description": "Family",
        "abbr": "family"
      }, {
        "id": "urn:uuid:40496220-90f4-4617-89c7-97226995edb4",
        "description": "#10 Can",
        "abbr": "10can"
      }, {
        "id": "urn:uuid:74c89fbc-c754-405a-a214-4bbc27185cdb",
        "description": "As Entered",
        "abbr": "as is"
      }, {
        "id": "urn:uuid:4e3e17e8-d011-489f-aeca-610615a94caf",
        "description": "Order",
        "abbr": "order"
      }, {
        "id": "urn:uuid:c4b9e764-0808-4bce-b432-fde5001755d7",
        "description": "Thick Slice",
        "abbr": "thick slc"
      }, {
        "id": "urn:uuid:90fee9d7-c48c-4f3a-a9d7-34693070a83c",
        "description": "Dry Serving",
        "abbr": "dry svg"
      }, {
        "id": "urn:uuid:27108b07-efbd-4cd5-9219-f5ef7e6fcac1",
        "description": "Individual Package",
        "abbr": "indv pkg"
      }, {
        "id": "urn:uuid:a7df0af5-006e-0000-7484-751e8eaf05c6",
        "description": "Packet",
        "abbr": "pkt"
      }, {
        "id": "urn:uuid:a7df0af5-006f-0000-7484-751e8eaf05c6",
        "description": "Individual Carton",
        "abbr": "indv cartn"
      }, {
        "id": "urn:uuid:41a37ba8-5340-4273-9a67-fe8af5f9de93",
        "description": "Bag",
        "abbr": "bag"
      }, {
        "id": "urn:uuid:1eab77c8-fc3e-4bbc-a796-3351dabb8fd6",
        "description": "Container",
        "abbr": "cntr"
      }, {
        "id": "urn:uuid:811c7133-12da-4369-98b5-3350bde3ac30",
        "description": "Package",
        "abbr": "pkg"
      }, {
        "id": "urn:uuid:a7df0af5-edb0-0002-7484-751e8eaf05c6",
        "description": "Percent",
        "abbr": "%"
      }, {
        "id": "urn:uuid:a7df0af5-edb1-0002-7484-751e8eaf05c6",
        "description": "International Unit",
        "abbr": "IU"
      }, {
        "id": "urn:uuid:a7df0af5-edb2-0002-7484-751e8eaf05c6",
        "description": "Calorie",
        "abbr": "kcal"
      }, {
        "id": "urn:uuid:a7df0af5-edb3-0002-7484-751e8eaf05c6",
        "description": "Retinol Equivalent",
        "abbr": "RE"
      }, {
        "id": "urn:uuid:a7df0af5-edb4-0002-7484-751e8eaf05c6",
        "description": "Retinol Activity Equivalent",
        "abbr": "RAE"
      }, {
        "id": "urn:uuid:a7df0af5-edb5-0002-7484-751e8eaf05c6",
        "description": "Dietary Folate Equivalent",
        "abbr": "mcg DFE"
      }, {
        "id": "urn:uuid:a7df0af5-edb6-0002-7484-751e8eaf05c6",
        "description": "Ounce Equivalent",
        "abbr": "oz-eq"
      }, {
        "id": "urn:uuid:a7df0af5-edb7-0002-7484-751e8eaf05c6",
        "description": "Cup Equivalent",
        "abbr": "c-eq"
      }],
      itemArr: [],
      showResults: false,
      currentUnit: '',
      btnIndex: 0,
      nutrArr: [],
      currentFood: {}
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.parseData = this.parseData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.setSelector = this.setSelector.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({input: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.get('https://nutrition-api.esha.com/foods?', {
      headers: {
        'Access-Control-Allow-Origin':'http://127.0.0.1:8080',
        'Access-Control-Allow-Methods':'GET,POST,DELETE,OPTIONS,PUT',
        'Ocp-Apim-Subscription-Key': `${API_KEY.API_KEY}`},
      params: {
        query: this.state.input,
        start: 0,
        count: 10,
        spell: true
      }
    })
    .then((res) => {this.parseData(res)})
    .catch((err) => console.log(err));
  }

  parseData(resData) {
    var resArr = resData.data.items;
    var unitArr = this.state.units;
    var tempArr = [];
    for(var i = 0; i < resArr.length; i++) {
      var tempObj = {};
      tempObj.id = resArr[i].id;
      tempObj.description = resArr[i].description;
      tempObj.quantity = resArr[i].quantity;
      tempObj.unit = resArr[i].unit;
      tempObj.units = resArr[i].units;
      for (var j = 0; j < unitArr.length; j++) {
        if(unitArr[j].id === tempObj.unit) {
          tempObj.unit = unitArr[j].description;
        }
        for (var x = 0; x < tempObj.units.length; x++) {
          if(unitArr[j].id === tempObj.units[x]) {
            tempObj.units[x] = unitArr[j].description;
          }
        }
      }
      tempArr.push(tempObj);
    }
    this.setState({showResults: true});
    this.setState({itemArr: tempArr});
  }


  handleSelect(e) {
    e.preventDefault();
    this.setState({btnIndex: e.target.id});
    var index = e.target.id;
    this.setState({currentFood: this.state.itemArr[index]});
    var selectedUnit = '';
    var unitArr = this.state.units;
    if (this.state.currentUnit !== '') {
      selectedUnit = this.state.currentUnit;
    } else {
      selectedUnit = this.state.itemArr[index].units[0];
    }
    this.setState({currentUnit: selectedUnit});
    for (var i = 0; i < unitArr.length; i++) {
      if(unitArr[i].description === selectedUnit) {
        selectedUnit = unitArr[i].id;
      }
    }
    var body =
    {
      "items": [
        {
          "id": this.state.itemArr[index].id,
          "quantity": this.state.itemArr[index].quantity ,
          "unit": selectedUnit
        }
      ]
    };
    axios.post('https://nutrition-api.esha.com/analysis', body,
    {
      headers: {'Ocp-Apim-Subscription-Key': `${API_KEY.API_KEY}`}
    })
    .then((res) => {this.handlePost(res.data.results)})
    .catch((err) => console.log(err));
  }

  handlePost(arr) {
    this.setState({nutrArr: arr});
    var tempObj = this.state.currentFood;
    axios.post('/caltrack', {
      params: {
        name: tempObj.description,
        quantity: tempObj.quantity,
        unit: this.state.currentUnit,
        cal: Math.floor(arr[0].value)
      }
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  setSelector(e) {
    e.preventDefault();
    this.setState({currentUnit: e.target.value});
  }


  render()
  {
    let results;
    if(this.state.showResults) {
      results =
      <div>
      <ul id='foodList' className='flex-container'>
          <li className="flex-item-top-search">Name</li>
          <li className="flex-item-top-search">Quantity</li>
          <li className="flex-item-top-search">Unit Selector</li>
          <li className="flex-item-top-search-blank"></li>
        </ul>
      {this.state.itemArr.map((searchItem, index) => (
        <ul id='foodList' className='flex-container'>
          <li className="flex-item-search">{searchItem.description}</li>
          <li className="flex-item-search">{searchItem.quantity}</li>
          <select onInput={this.setSelector.bind(this)}>
          {searchItem.units.map((unitItem, index) => (
            <option value={unitItem}>{unitItem}</option>
          ))}
          </select>
          <input id={index} className="flex-item-search" type='submit' onClick={this.handleSelect.bind(this)}></input>
        </ul>
      ))}
      </div>
    } else {
      results = null;
    }
    return(
      <div id='foodSearch'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Search: </label>
          <input type='text' onInput={this.handleInput.bind(this)}/>
          <input type='submit'/>
        </form>
        {results}
      </div>
    )
  }
}

export default Search;