// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
// create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <h1>Calorie Tracker App</h1>
    )
  }
}

// render the root element with the provided component
root.render(<App />);