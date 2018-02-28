import React from 'react';

export default function CaturdayImage(props) {
  return (
    <a href={props.href}><img src={props.src} alt={props.alt}/></a>
  );
}