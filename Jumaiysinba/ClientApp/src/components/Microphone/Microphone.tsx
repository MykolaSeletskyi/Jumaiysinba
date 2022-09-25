import * as React from 'react';
import { ReactMic } from 'react-mic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import wavesurfer from 'wavesurfer.js';
import './Microphone.scss';
import { FFmpegWorker } from '../FFmpegWorker/FFmpegWorker';

export default function Microphone() {
  let [waveform, setWaveform] = React.useState<any>()
  const waveformRef = React.useRef<HTMLDivElement>(null);
  const [record, setRecord] = React.useState(false);
  const [recordedBlob, setRecordedBlob] = React.useState<any>();
  const [chunksCapture, setChunksCapture] = React.useState<any>([]);
  const [recordedAudio, setRecordedAudio] = React.useState<any>([]);
  const [confirm, setConfirm] = React.useState<any>(false);
  const [stopPlayWaveSurfer, setStopPlayWaveSurfer] = React.useState<any>(false);
  const [waveOrFrec, setWaveOrFrec] = React.useState<any>("sinewave");

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
        barHeight: 7,
        barMinHeight: 0.2,
      });
      
      setWaveform(currentWavesurfer)
    }
    
  }, [confirm])

  React.useEffect(() => {
    if(recordedBlob) {
      waveform.load(recordedBlob!.blobURL)
    }
  }, [recordedBlob])



  const saveBlob = (recordedAudio: Blob, fileName: string) => {
    let a: HTMLAnchorElement = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    var url = window.URL.createObjectURL(recordedAudio);
    a.href = url;
    a.download = fileName + ".mp3";
    console.log(a);
    setRecordedAudio(url);
    a.click();
    window.URL.revokeObjectURL(url);

  }

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
  }
  const onData = (recordedBlob: any) => {
    setChunksCapture(recordedBlob);
  }

  const onStop = (recordedBlob: any) => {
    setRecordedBlob(recordedBlob);
    console.log("RecordedBlob", recordedBlob);
    console.log("curr", waveformRef.current);
    console.log("wave", waveform);
    waveform.load(recordedBlob!.blobURL);
  }
  const onDownload = (recordedAudio: Blob, fileName: string) => {
    console.log('Download', recordedAudio);
    saveBlob(recordedAudio, fileName)
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

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='MainDivMicro'>
      <div>
      </div>
      <div className='UpperRow'>
        <div className='Confirm'>
          <div className='DivOfTextMicro'>
            <span className='TextOfMicro'>Онлайн Диктофон</span>
          </div>
          <div className='DivSecurityText'>
            <p className='SecurityText'>Записуйте голос з мікрофона в безпеці. Запис та кодування MP3 виконуються прямо у браузері, тому ваша конфіденційність захищена.</p>
          </div>
          <div className='DivOfPromtText'>
            <p className='PromptText'>Щоб використовувати цей інструмент, ви повинні погодитися з нашими <br /> <span className='HelpClassForSecrText'>Умовами обслуговування і Політикою конфіденційності.</span></p>
          </div>
          <p className='TextOfConfirmSecr'>Погоджуюсь</p>
          <input disabled={confirm == true ? true : false} type="checkbox" className='CheckBox' onClick={onConfirm} />
        </div>

        <div className='MicrophoneHeart'>
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
        <div className='ButtonsRow'>
          <div className='DivForMicroButton'>
            <button className={record == false ? 'MicroButton' : 'StopMicroButton'} onClick={record == false ? startRecording : stopRecording}></button>
          </div>
          <div className='DivForStartButton'>
            <button className={stopPlayWaveSurfer == true ? 'StartButton' : 'PauseButton'} disabled={record == true || recordedBlob == null ? true : false} onClick={() => Start()}
            style = {{opacity: record == true || recordedBlob == null ? "0.5" : "1"}}
            ></button>
          </div>
          <div className='DivForDownloadButton' aria-disabled={recordedBlob == null ? true : false}>
            <button onClick={() => onDownload(recordedBlob.blob, recordedBlob.blobURL)} disabled={recordedBlob == null || record == true ? true : false} className='DownloadButton' 
            style={{opacity: recordedBlob == null || record == true ? "0.5" : "1"}}></button>
          </div>
        </div>
        :
        null
      }

      {confirm ?
        <div className='DivOfSwithcer'>
          <img src={require('../../images/WaveText.svg').default} alt="Форма хвилі" className='WaveText' />
          <label className="switch">
            <input type="checkbox" disabled={record == false ? false : true} defaultChecked={waveOrFrec} />
            <span aria-disabled={record == false ? false : true} onClick={record == false ? changeWave : undefined} className="slider-red round"></span>
          </label>
          <img src={require('../../images/FrequencyText.svg').default} alt="Частота" className='FrequencyText' />
        </div>
        :
        null
      }

      <div className='FooterRow'>
        <div className='FirstHint'>
          <span className='MainHint'>Як записати звук з мікрофона?</span>
          <p className='Hint1'>1. Натисніть синю кнопку мікрофона, щоб розпочати запис.</p>
          <p className='Hint2'>2. Звукові хвилі, захоплені мікрофоном, з'являться на екрані.</p>
          <p className='Hint2'>3. Натисніть червону кнопку зупинки, щоб зупинити запис.</p>
          <p className='Hint2'>4. Щоб відтворити запис голосу, натисніть зелену кнопку відтворення.</p>
          <p className='Hint2'>5. Щоб зберегти запис голосу, натисніть жовту кнопку збереження.</p>
        </div>

        <div className='SecondHint'>
          <p className='TextForSecondHint'>Не оновлюйте та не закривайте веб-сторінку перед збереженням запису</p>
          <p className='TextForSecondHint2'>Зауважте, що якщо вам не вдасться зберегти свій голосовий запис, повернути його неможливо. Аудіодані не надсилаються через Інтернет,
            тому ваш запис зберігається лише в пам’яті вашого браузера до його збереження. Тому, якщо ви оновите цю веб -сторінку або закриєте веб -переглядач перед
            збереженням запису голосу, вона буде втрачена. Якщо ви втратили запис, немає сенсу звертатися до нас: на жаль, ми нічого не можемо зробити з нашого боку.</p>
        </div>

      </div>
    </div>
  );
}