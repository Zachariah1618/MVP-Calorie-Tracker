import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }




  render()
  {
    return(
      <div id='foodSearch'>
        <form>
          <label>Search: </label>
          <input type='text'/>
        </form>
      </div>
    )
  }
}

export default Search;