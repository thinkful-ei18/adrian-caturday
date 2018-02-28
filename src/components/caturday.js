import React from 'react';
import Button from './button';
import CaturdayImage from './caturday-image';
export default class Caturday extends React.Component {

  render () {
    return (
    <main className="caturday" role="main">
      <header>
        <h1>It's Caturday!</h1>
        <p>Make every day special with these GIFs.</p>
      </header>
      <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Random Cat GIF" /></a>
      <Button title="See Another"/>
    </main>
    );


  }
}