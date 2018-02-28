import React from 'react';

export default function seeAnother(props) {
  const API_KEY = "Mjc3Mzgz";

    const categories = [
      "hats",
      "ties",
      "space",
      "funny",
      "boxes",
      "caturday",
      "sinks",
      "clothes",
    ]

    const category = categories[Math.floor(Math.random() * 8)]

    const url = `http://thecatapi.com/api/images/get?api_key=${API_KEY}&format=src&type=gif&category=${category}`
    const url2 = 'http://thecatapi.com/api/images/get?api_key=Mjc3Mzgz&format=src&type=gif'
    const links = [url, url2]
    const randomLink = links[Math.floor(Math.random() * 2)];

    return (
      this.setState({initialTagline: "Are you not entertained?!"}),
      this.setState({initialImage: randomLink })
    );
}