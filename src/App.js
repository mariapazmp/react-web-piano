import React, { useState } from 'react';
import './App.css';

function App() {

  const [isPlaying, setIsPlaying] = useState("")

  const notes = [
    {
      name: "DO",
      link: require("./notes/do.wav"),
      hasSharp: true
    },
    {
      name: "RE",
      link: require("./notes/re.wav"),
      hasSharp: true
    },
    {
      name: "MI",
      link: require("./notes/mi.wav"),
    },
    {
      name: "FA",
      link: require("./notes/fa.wav"),
      hasSharp: true
    },
    {
      name: "SOL",
      link: require("./notes/sol.wav"),
      hasSharp: true
    },
    {
      name: "LA",
      link: require("./notes/la.wav"),
      hasSharp: true
    },
    {
      name: "SI",
      link: require("./notes/si.wav"),
    }
  ];

  const handleClick = (note) => {
    setIsPlaying(note.name);
    const sound = new Audio(note.link);
    sound.play();

    setTimeout(() => {
      setIsPlaying(null);
    }, 150)
  };
  
  return (
      <div className="App">
        <div className="title">
          <h1>Piano con React</h1>
          <h2>Made with love and fun!</h2>
          {
            isPlaying &&
            <h3>Now the piano is playing: {isPlaying}</h3>
          }
        </div>

        <div className="container">
          {
            notes.map(note => {
              return (
                  <div
                    className={`note ${isPlaying === note.name && 'isPlaying'}`}
                    onClick={() => handleClick(note)}>
                    { note.hasSharp ?<div className="sharp"></div> : "" }
                  </div>
              )
            })
          }
        </div>
      </div>
  );
}

export default App;
