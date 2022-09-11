import * as React from 'react';
import { ReactMic } from 'react-mic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import wavesurfer from 'wavesurfer.js';
import './MicrophoneTest.scss'

async function SendRecord(record: any) {

  const formData = new FormData();
  formData.append("Record", record);

  const http = axios.create({
    baseURL: "https://jumaiysinba.azurewebsites.net/"
  });

  await http.post("api/Microphone/downloadrecord", formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
}

export default function MicrophoneTest() {
  let [waveform, setWaveform] = React.useState<any>()
  const waveformRef = React.useRef<HTMLDivElement>(null);
  const [record, setRecord] = React.useState(false);
  const [recordedBlob, setRecordedBlob] = React.useState<any>();
  const [chunksCapture, setChunksCapture] = React.useState<any>([]);
  const [recordedAudio, setRecordedAudio] = React.useState<any>([]);
  const [confirm, setConfirm] = React.useState<any>(false);
  const [stopPlayWaveSurfer, setStopPlayWaveSurfer] = React.useState<any>(false);
  const [waveOrFrec, setWaveOrFrec] = React.useState<any>("sinewave");


//   React.useEffect(() => {
//     if (waveformRef.current) {
//       const currentWavesurfer = wavesurfer.create({
//         container: waveformRef.current,
//         waveColor: '#EE706C',
//         progressColor: '#EE706C',
//         cursorColor: '#EE706C',
//         barWidth: 5,
//         barRadius: 2,
//         cursorWidth: 1,
//         height: 100,
//         barGap: 9.5,
//         barHeight: 7,
//         barMinHeight: 0.2,
//       });
      
//       setWaveform(currentWavesurfer)
//     }
    
//   }, [confirm])

//   React.useEffect(() => {
//     if(recordedBlob) {
//       waveform.load(recordedBlob!.blobURL)
//     }
//   }, [recordedBlob])

  const renderMicro = () => {
    return (
      <ReactMic
        key={waveOrFrec}
        record={record}
        className="MicrophoneStyle"
        onStop={onStop}
        onData={onData}
        mimeType="audio/webm"    // defaults -> "audio/webm".  you can set it to "audio/wav"
        visualSetting={waveOrFrec}
        strokeColor="#EE706C"
      />
    )
  }

  const onConfirm = () => {
    if (confirm == false) {
      setConfirm(true);
    }
    else {
      setConfirm(false);
    }
    console.log(confirm);
  }

  const startRecording = () => {
    setRecord(true);
  }

  const changeWave = () => {
    if (waveOrFrec == "sinewave") {
      setWaveOrFrec("frequencyBars")
    }
    else {
      setWaveOrFrec("sinewave")
    }
  }

  const stopRecording = async () => {
    setRecord(false);
    // await waveform.loadBlob(recordedBlob.blobURL);
  }
  const onData = (recordedBlob: any) => {
    // console.log('chunk of real-time data is: ', recordedBlob);
    setChunksCapture(recordedBlob);
  }

  const onStop = (recordedBlob: any) => {
    setRecordedBlob(recordedBlob);
    console.log("RecordedBlob", recordedBlob);
    console.log("curr", waveformRef.current);
    console.log("wave", waveform);
    waveform.load(recordedBlob!.blobURL);
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
          <div ref={waveformRef} style={{visibility: record == false ? "visible" : "hidden", position: "absolute", width: "100%", marginTop: "130px"}}></div>
          <div style={{visibility: record == true ? "visible" : "hidden"}}>{renderMicro()}</div>
        </>
        :
        null
      }

      {confirm ?
      <>
        <div className='ButtonsRowMicroTest'>
          <div className='DivForMicroButtonMicroTest'>
            <button className={record == false ? 'MicroButtonMicroTest' : 'StopMicroButtonMicroTest'} onClick={record == false ? startRecording : stopRecording}></button>
          </div>
        </div>
        <div className='DivTextForStartTest'>
          <span className='TextForStartTest'>Натисніть, щоб почати тестування мікрофона</span>
        </div>
        <div className='DivDescribeOfMicro'>
            <span className='TextOfDescribeMicro'>Опис властивостей мікрофона</span>
        </div>
        <div className='ToolTip'>
            <div className='FirstRow'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='SecondRow'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
     </>
        :
        null
    }
    </div>
  );
}