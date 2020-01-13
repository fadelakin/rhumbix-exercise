import React from "react";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  handleSubmit = event => {
    this.props.getGif(this.state.query);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for a gif..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="GO" />
      </form>
    );
  }
}

export default SearchComponent;
