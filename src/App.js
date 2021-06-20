import React from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";
import { Header } from "./components/Header";

class App extends React.Component {
  state = {
    visible: true,
    // whichComponent: "ImageSlider",
  };

  render() {
    // const buttonText = this.state.visible ? "hide" : "show";

    // let slider = this.state.visible ? (
    //   <ImageSlider />
    // ) : (
    //   <div>
    //     <Counter />
    //   </div>
    // );

    // if (this.state.whichComponent === "ImageSlider") {
    //   return (
    //     <div className="App">
    //       <ImageSlider />
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponent: "Counter" });
    //         }}
    //       >
    //         show counter
    //       </button>
    //     </div>
    //   );
    // } else if (this.state.whichComponent === "Counter") {
    //   return (
    //     <div className="App">
    //       <Counter />
    //       <button
    //         onClick={() => {
    //           this.setState({ whichComponent: "Header" });
    //         }}
    //       >
    //         show header
    //       </button>
    //     </div>
    //   );
    // } else if (this.state.whichComponent === "Header") {
    //   return (
    //     <div className="App">
    //       <Header />
    //     </div>
    //   );
    // }

    return (
      <div className="App">
        {this.state.visible ? <Counter /> : null}
        <button
          onClick={() => {
            this.setState({ visible: !this.state.visible });
          }}
        >
          toggle counter
        </button>
      </div>
    );
  }
}
export default App;
