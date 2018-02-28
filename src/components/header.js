import React from 'react';

export default function header(props){
  return (
    <header className="caturday-header" role="banner">
        <h1>It's Caturday!</h1>
        <p>Make every day special with these GIFs from the <a href="http://thecatapi.com">Cat API.</a></p>
      </header>
  );
}