import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import wavesurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone';
import axios from 'axios';

export default function SpeakerTest() {


  const [waveform, setWaveform] = React.useState<any>()
  const waveformRef = React.useRef<HTMLDivElement>(null);

  const Start = () => {
    console.log(waveform)
    waveform.load("https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3")
    waveform.start();
  }
  const Stop = () => {
    waveform.stop(); 
  }


  React.useEffect(() => {
    if (waveformRef.current) {
      const currentWavesurfer = wavesurfer.create({
        container: waveformRef.current,
        waveColor: '#EE706C',
        progressColor: '#EE706C',
        cursorColor: '#EE706C',
        barWidth: 5,
        barRadius: 2,
        cursorWidth: 1,
        height: 100,
        barGap: 9.5,
        barHeight: 0.4,
        barMinHeight: 0.2,
        forceDecode: true,
        responsive: true
      });

      //currentWavesurfer.load("https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3")
      setWaveform(currentWavesurfer)
    }
  }, [])
  return (
    <div>
      {/* <div ref = {waveformRef}></div> */}
      <div ref = {waveformRef}></div>
      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>

      {/* <AudioPlayer
        src = "https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3"
        autoPlay = {false}
        layout="stacked-reverse"
        style={{ width: "400px" }}
        onPlay={() => console.log("onPlay")}
        /> */}

    </div>
  );

}