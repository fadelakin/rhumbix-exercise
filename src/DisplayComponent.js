import React from "react";

class DisplayComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <img src={this.props.gif} />
      </div>
    );
  }
}

export default DisplayComponent;
