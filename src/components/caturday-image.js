import React from 'react';

export default function CaturdayImage(props) {
  return (
    <a href={props.href}><img src={props.src} alt={props.alt} className="caturday-image" role="img" aria-label="Random Cat Image" /></a>
  );
}