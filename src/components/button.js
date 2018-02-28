import React from 'react';

export default function button(props) {
  return (
    <button type="button" onClick={props.whenClicked}>{props.title}</button>
  );
}