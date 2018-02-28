import React from 'react';

export default function CaturdayImage(props) {
  return (
    <section className="caturday-image">
    <img src="http://thecatapi.com/api/images/get?format=src&type=gif" alt="Random Cat GIF"/>
    <p>{props.tagline}</p>
    </section>
  );
}