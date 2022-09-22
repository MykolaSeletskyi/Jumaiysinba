import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import wavesurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone';
import axios from 'axios';

export default function SpeakerTest() {


  const [waveform, setWaveform] = React.useState<any>()
  const waveformRef = React.useRef<HTMLDivElement>(null);
  const [confirm, setConfirm] = React.useState<any>(false);
  const [stopPlayWaveSurfer, setStopPlayWaveSurfer] = React.useState<any>(false);

  const onConfirm = () => {
    if (confirm == false) {
      setConfirm(true);
    }
    else {
      setConfirm(false);
    }
    console.log(confirm);
  }

  const Start = () => {
    waveform.playPause();
    if(stopPlayWaveSurfer == true) {
      setStopPlayWaveSurfer(false);
    }
    else{
      setStopPlayWaveSurfer(true)
    }
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

      currentWavesurfer.load("https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3")
      setWaveform(currentWavesurfer)
    }
  }, [])
  return (
    <div className='MainDivMicroTest'>
    <div>
    </div>
    <div className='UpperRowMicroTest'>
      <div className='ConfirmMicroTest'>
        <div className='DivOfTextMicroTest'>
          <span className='TextOfMicroTest'>Тест мікрофону</span>
        </div>
        <div className='DivSecurityTextMicroTest'>
          <p className='SecurityTextMicroTest'>Використовуйте цей онлайн -інструмент, щоб перевірити свій мікрофон і знайти рішення, щоб його виправити.</p>
        </div>
        <div className='DivOfPromtTextMicroTest'>
          <p className='PromptTextMicroTest'>Щоб використовувати цей інструмент, ви повинні погодитися з нашими <br /> <span className='HelpClassForSecrTextMicroTest'>Умовами обслуговування і Політикою конфіденційності.</span></p>
        </div>
        <p className='TextOfConfirmSecrMicroTest'>Погоджуюсь</p>
        <input type="checkbox" className='CheckBox' onClick={onConfirm} />
      </div>

      <div className='MicrophoneHeartMicroTest'>
        <img src={require('../../images/MicrophoneHeart.svg').default} alt="MicroHeart" />
      </div>
    </div>

    {confirm ?  //If user confirmed our license than show Micro
        <>
          <div ref={waveformRef} style={{position: "absolute", width: "100%", marginTop: "130px"}}></div>
        </>
        :
        null
    }

    {/* <div className='ButtonsRowMicroTest'>
      <div className='DivForMicroButtonMicroTest'>
        <button  className={stopPlayWaveSurfer == true ? 'StartButton' : 'PauseButton'} onClick={Start}></button>
      </div>
    </div> */}


  </div>
);

}