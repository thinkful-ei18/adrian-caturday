import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentTagline: ''
    }
  }

  setTagline = (props) => {
    // Call set state to change tagline.
    return console.log('Beep boop!');
  }

  render () {
    return (
    <main className="caturday" role="main">
      <Header />
      <CaturdayImage tagline="This one's on the house. Check it out!"/>
      <Button title="See Another" whenClicked={this.setTagline}/>
    </main>
    );


  }
}