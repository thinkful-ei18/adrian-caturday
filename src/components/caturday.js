import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTagline: "This one's on the house. Check it out!",
      initialImage: ""
    }
  }

  setTagline = (props) => {
    // API KEY: Mjc3Mzgz
    return this.setState({initialTagline: "Are you not entertained?!"});
  }

  render () {

    const categories = [
      "hats",
      "ties",
      "space",
      "funny",
      "boxes",
      "caturday",
      "kittens",
      "sinks",
      "clothes",
    ]

    return (
    <main className="caturday" role="main">
      <Header />
      <CaturdayImage tagline={this.state.initialTagline} category={categories[Math.floor(Math.random() * 9)]} />
      <Button title="See Another" whenClicked={this.setTagline}/>
    </main>
    );


  }
}