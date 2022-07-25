import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import Star from "../components/Star";

export class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Star />
      </div>
    );
  }
}

export default Home;
