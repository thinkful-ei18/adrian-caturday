import React from 'react';

export default function button(props) {
  return (
    <button input type="button" aria-label={props.title}>{props.title}</button>
  );
}