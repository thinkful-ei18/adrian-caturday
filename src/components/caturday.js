import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialTagline: "This one's on the house. Check it out!"
    }
  }

  setTagline = (props) => {
    // Call set state to change tagline.
    return this.setState({initialTagline: "Are you not entertained?!"});
    // return console.log('Beep boop!');
  }

  render () {
    return (
    <main className="caturday" role="main">
      <Header />
      <CaturdayImage tagline={this.state.initialTagline}/>
      <Button title="See Another" whenClicked={this.setTagline}/>
    </main>
    );


  }
}