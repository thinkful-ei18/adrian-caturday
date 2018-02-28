import React from 'react';

export default function CaturdayImage(props) {
  return (
    <section className="caturday-image">
    <img src={props.src} alt={props.alt}/>
    <p>{props.tagline}</p>
    </section>
  );
}