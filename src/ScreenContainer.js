import React from "react";
import SearchComponent from "./SearchComponent";
import DisplayComponent from "./DisplayComponent";
const axios = require("axios");

class ScreenContainer extends React.Component {
  state = {
    gifUrl: null,
    searchTerm: null
  };

  getState = () => {
    return this.state;
  };

  updateState = (query, gifUrl) => {
    this.setState({
      searchTerm: query,
      gifUrl: gifUrl
    });
  };

  getGif = query => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`
      )
      .then(({ data }) => {
        let gifData = data.data[0];
        let url = gifData.images.original.url;
        this.updateState(query, url);
      });
  };

  render() {
    return (
      <div>
        <SearchComponent updateParent={this.updateState} getGif={this.getGif} />
        <DisplayComponent gif={this.state.gifUrl} />
      </div>
    );
  }
}

export default ScreenContainer;
