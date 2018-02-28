import React from 'react';
import Header from './header';
import CaturdayImage from './caturday-image';
import Button from './button';

export default class Caturday extends React.Component {

  render () {
    return (
    <main className="caturday" role="main">
      <Header />
      <CaturdayImage tagline="This one's on the house. Check it out!" src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Random Cat GIF"/>
      <Button title="See Another" whenClicked={() => {console.log('`See Another!` was clicked.')}}/>
    </main>
    );


  }
}