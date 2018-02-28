import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTagline: "This one's on the house. Check it out!",
      initialImage: "http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif"
    }
  }

  seeAnother = (props) => {
    // API KEY: Mjc3Mzgz

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

    let category =categories[Math.floor(Math.random() * 9)]

    const url = `http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif&category=${category}`

    return (
      this.setState({initialTagline: "Are you not entertained?!"}),
      this.setState({initialImage: url })
    );
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
      <CaturdayImage image={this.state.initialImage} tagline={this.state.initialTagline} category={categories[Math.floor(Math.random() * 9)]} />
      <Button title="See Another" whenClicked={this.seeAnother}/>
    </main>
    );


  }
}