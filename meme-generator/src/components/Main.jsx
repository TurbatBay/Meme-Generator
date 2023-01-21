import React from "react";
import { useState } from "react";
import memesData from "../data/memesData";

export default function Main() {
  //   const [getImage, setGetImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    console.log("Clicked");
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <div className="main-container section">
      <div className="forms">
        <input type="text" placeholder="Top text" className="input" />
        <input type="text" placeholder="Bottom text" className="input" />
      </div>
      <div className="button">
        <button className="button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <img src={meme.randomImage} alt="" className="form--image" />
    </div>
  );
}
