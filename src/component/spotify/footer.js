import React from "react";
import AudioPlayer from "material-ui-audio-player";
import "./footer.css";

function FOOTER(props) {
  
const { value } = props;
  console.log(value)
  return (
    <div className="container">
    
        <AudioPlayer 
          className="audio-player"
          style={{backgroundColor:"black"}}
          width="100%"
          src={value.previewUrl}
          autoplay={true}
          volume={true}
          loop={true}
        />
</div>
  );
}

export default FOOTER;




















// src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

// 1- call the api in useEffect.
// 2- get the data and print it in conso