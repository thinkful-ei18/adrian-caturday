import React from 'react';

export default function button(props) {
  return (
    <section className="caturday-button">
    <input type="button"/>
    <button aria-label={props.title}>{props.title}</button>
    </section>
  );
}