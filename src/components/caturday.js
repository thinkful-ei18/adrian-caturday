import React from 'react';

export default class Caturday extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <main className="caturday" role="main">
      <header>
        <h1>It's Caturday!</h1>
        <p>Make every day special with these GIFs.</p>
      </header>
      <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Random Cat GIF" /></a>
      <button>See Another</button>
    </main>
    );


  }
}