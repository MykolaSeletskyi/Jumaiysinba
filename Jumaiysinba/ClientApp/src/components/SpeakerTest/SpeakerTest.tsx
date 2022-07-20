import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';

export default function SpeakerTest() {



    return (
      <div>

        <AudioPlayer
        src = "https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3"
        autoPlay = {false}
        layout="stacked-reverse"
        style={{ width: "400px" }}
        onPlay={() => console.log("onPlay")}
        />
      
      </div>
    );
  
  }