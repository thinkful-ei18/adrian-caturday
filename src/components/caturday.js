import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTagline: "This one's on the house. Check it out!",
      currentImage: "http://thecatapi.com/api/images/get?&format=src&type=gif"
    }
  }

  seeAnother = () => {
    // API KEY: Mjc3Mzgz
    const API_KEY = "Mjc3Mzgz";

    const categories = [
      "hats",
      "ties",
      "space",
      "funny",
      "boxes",
      "caturday",
      "sinks",
      "clothes",
    ]

    const category = categories[Math.floor(Math.random() * 8)]

    const url = `http://thecatapi.com/api/images/get?api_key=${API_KEY}&format=src&type=gif&category=${category}`
    const url2 = 'http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif'
    const links = [url, url2]
    const randomLink = links[Math.floor(Math.random() * 2)];

      this.setState({currentTagline: "Are you not entertained?!", currentImage: randomLink});
  }

  render () {

    return (
    <main className="caturday" role="main">
      <Header />
      <CaturdayImage image={this.state.currentImage} tagline={this.state.currentTagline} />
      <Button title="See Another" whenClicked={this.seeAnother}/>
    </main>
    );


  }
}