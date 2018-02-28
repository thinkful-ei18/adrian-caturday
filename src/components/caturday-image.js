import React from 'react';


export default function CaturdayImage(props) {

  return (
    <section className="caturday-image">
    <img src={props.image} alt="Random Cat GIF"/>
    <p>{props.tagline}</p>
    </section>
  );
}