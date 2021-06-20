import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://images.unsplash.com/photo-1601649705707-13b54dc57b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80",
      "https://images.unsplash.com/photo-1604321326385-8d8e8c379563?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1575677753169-cff039a42afa?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1601080578342-3facb0e42169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    ],
    idx: 0,
  };

  handleNext = (e) => {
    console.log(this.state);
    this.setState(
      {
        idx: this.state.idx + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handlePrevious = () => {
    this.setState({
      idx: this.state.idx - 1,
    });
  };

  render() {
    return (
      <div className="image-slider">
        <button onClick={this.handlePrevious}>previous</button>

        <img
          src={this.state.images[this.state.idx]}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }
}
