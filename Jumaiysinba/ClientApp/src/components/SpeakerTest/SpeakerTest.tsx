import * as React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import wavesurfer from 'wavesurfer.js';
import './SpeakerTest.scss';

export default function SpeakerTest() {
  let [waveform, setWaveform] = React.useState<any>()
  const waveformRef = React.useRef<HTMLDivElement>(null);
  const [confirm, setConfirm] = React.useState<any>(false);
  const [stopPlayWaveSurfer, setStopPlayWaveSurfer] = React.useState<any>(false);
  const [unvsText, setUnvsText] = React.useState<any>(false);

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
        height: 70,
        barGap: 9.5,
        barHeight: 4,
        barMinHeight: 0.2,
      });
      currentWavesurfer.load("https://hanzluo.s3-us-west-1.amazonaws.com/music/zhiya.mp3");
      setWaveform(currentWavesurfer)
    }
    
  }, [confirm])


  const onConfirm = () => {
    if (confirm == false) {
      setConfirm(true);
    }
    else {
      setConfirm(false);
    }
    console.log(confirm);
  }

  const stopPlaySurfer = () => {
    setUnvsText(true);
    waveform.playPause();
    if(stopPlayWaveSurfer == true) {
      setStopPlayWaveSurfer(false);
    }
    else{
      setStopPlayWaveSurfer(true)
    }
  }



  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='MainDivSpeakerTest'>
      <div>
      </div>
      <div className='UpperRowSpeakerTest'>
        <div className='ConfirmSpeakerTest'>
          <div className='DivOfTextSpeakerTest'>
            <span className='TextOfSpeakerTest'>Тест навушників</span>
          </div>
          <div className='DivSecurityTextSpeakerTest'>
            <p className='SecurityTextSpeakerTest'>Використовуйте цей онлайн -інструмент, щоб перевірити свої наушники і знайти рішення, щоб його виправити.</p>
          </div>
          <div className='DivOfPromtTextSpeakerTest'>
            <p className='PromptTextSpeakerTest'>Щоб використовувати цей інструмент, ви повинні погодитися з нашими <br /> <span className='HelpClassForSecrTextMicroTest'>Умовами обслуговування і Політикою конфіденційності.</span></p>
          </div>
          <p className='TextOfConfirmSecrSpeakerTest'>Погоджуюсь</p>
          <input disabled={confirm == true ? true : false} type="checkbox" className='CheckBox' onClick={onConfirm} />
        </div>

        <div className='MicrophoneHeartSpeakerTest'>
          <img src={require('../../images/MicrophoneHeart.svg').default} alt="MicroHeart" />
        </div>
      </div>

      {confirm == true ?  //If user confirmed our license than show Micro
        <div ref={waveformRef} style={{position: "absolute", width: "100%", marginTop: "130px"}}></div>
        :
        null
      }

      {confirm ?
      <>
        <div className='ButtonsRowSpeakerTest'>
          <div className='DivForMicroButtonSpeakerTest'>
            <button className={stopPlayWaveSurfer == false ? 'MicroButtonSpeakerTest' : 'StopMicroButtonSpeakerTest'} onClick={stopPlaySurfer}></button>
          </div>
        </div>

        <div className='FooterRowSpeakerTest'>
          <div className='FirstHintSpeakerTest'>
            <div className='Div1SpeakerTest'>
              <span style={{visibility: unvsText == true ? "hidden" : "visible"}} className='MainHintSpeakerTest'>Натисніть на кнопку для того, щоб протестувати навушники</span>
            </div>
          </div>

          <div className='DivLinkOnDevicesText'>
            <p className='LinkOnDevicesText'>Посилання на тестування та вказівки щодо виправлення ваших навушників за допомогою пристроїв</p>
          </div>


        <div className='LinkOnDevices'>
          <div className='FirstLink'>
              <div style={{marginTop: "40px", marginLeft: "31px"}}>
                <span className='DeviceName'>iPhone та iPad</span>
              </div>
              <div style={{marginTop: "17px", marginLeft: "33px"}}>
                <span className='DeviceText'>Рішення щодо усунення проблем з навушниками на iPhone та iPad →</span>
              </div>
          </div>
          <div className='SecondLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Mac</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
                <span className='DeviceText'>Рішення щодо усунення проблем з навушниками на Mac →</span>
            </div>
          </div>
          <div className='ThirdLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Android</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
              <span className='DeviceText'>Рішення щодо усунення проблем з навушниками на Android →</span>
            </div>
          </div>
          <div className='FourLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Windows</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
              <span className='DeviceText'>Рішення щодо усунення проблем з навушниками на Windows →</span>
            </div>
          </div>
        </div>
      </div>
     </>
        :
        null
    }
    </div>
  );

}