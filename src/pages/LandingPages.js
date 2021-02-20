import React, { Component } from "react";
import Header from "./parts/Header";
import landingPage from "../json/landingPage.json";
import Hero from "./parts/Hero";
import Categories from "./parts/Categories";
import MostPicked from "./parts/MostPicked";

export default class LandingPages extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
      </div>
    );
  }
}
