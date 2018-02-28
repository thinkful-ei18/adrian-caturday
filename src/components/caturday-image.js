import React from 'react';


export default function CaturdayImage(props) {

  CaturdayImage.defaultProps = {
    tagline: "This one's on the house. Check it out!"
  }

  // const url = "http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif"
  const url = `http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif&category=${props.category}`

  // key={[1,2,3,4,5][Math.floor(Math.random() * 5)]}

  return (
    <section className="caturday-image">
    <img src={url} alt="Random Cat GIF"/>
    <p>{props.tagline}</p>
    </section>
  );
}