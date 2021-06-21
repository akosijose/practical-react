import React from "react";
import "./App.css";
// import FetchRandomUser from "./components/FetchRandomUser";
// import ValidationForm from "./components/ValidationForm";
// import Myform from "./components/MyForm";
// import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
// import { Header } from "./components/Header";

class App extends React.Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

export default App;
