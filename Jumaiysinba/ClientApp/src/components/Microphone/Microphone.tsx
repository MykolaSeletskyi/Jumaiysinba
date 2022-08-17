import * as React from 'react';
import { ReactMic } from 'react-mic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import './Microphone.scss'

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

export default function Microphone() {
  const [record, setRecord] = React.useState(false);
  const [recordedBlob, setRecordedBlob] = React.useState<any>();
  const [chunksCapture, setChunksCapture] = React.useState<any>([]);
  const [confirm, setConfirm] = React.useState<any>(false);

  const saveBlob = (recordedAudio: Blob, fileName: string) => {
    let a: HTMLAnchorElement = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    var url = window.URL.createObjectURL(recordedAudio);
    a.href = url;
    a.download = fileName + ".mp3";
    console.log(a);
    a.click();
    window.URL.revokeObjectURL(url);
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

  const stopRecording = () => {
    setRecord(false);
  }
  const onData = (recordedBlob: any) => {
    console.log('chunk of real-time data is: ', recordedBlob);
    setChunksCapture(recordedBlob);
  }
  const onStop = (recordedBlob: any) => {
    console.log('recordedBlob is:', recordedBlob.blobURL);
    setRecordedBlob(recordedBlob);
  }
  const onDownload = (recordedAudio: Blob, fileName: string) => {
    console.log('Download', recordedAudio);
    saveBlob(recordedAudio, fileName)
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
          <input type="checkbox" className='CheckBox' onClick={onConfirm} />
        </div>

        <div className='MicrophoneHeart'>
          <img src={require('../../images/MicrophoneHeart.svg').default} alt="MicroHeart" />
        </div>
      </div>
      {confirm ?
        <div className='ButtonsRow'>
          <div className='DivForMicroButton'>
            <button className='MicroButton'></button>
          </div>
          <div className='DivForStartButton'>
            <button className='StartButton'></button>
          </div>
          <div className='DivForDownloadButton'>
            <button className='DownloadButton'></button>
          </div>
        </div>
        :
        null
      }

      {confirm ?
        <div className='DivOfSwithcer'>
          <img src={require('../../images/WaveText.svg').default} alt="Форма хвилі" className='WaveText' />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider-red round"></span>
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


  {/* <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        mimeType="audio/webm"    // defaults -> "audio/webm".  you can set it to "audio/wav"
        visualSetting="frequencyBars"
        strokeColor="#fdbb2d" />
      <button onClick={startRecording} type="button">Start</button>
      <button onClick={stopRecording} type="button">Stop</button>

      {recordedBlob ?
        <button onClick={() => onDownload(recordedBlob.blob, recordedBlob.blobURL)} type="button">Download</button>
      :
        null
      }
      <div>

      {recordedBlob ?
        <AudioPlayer
        src = {recordedBlob!.blobURL}
        style={{ width: "400px" }}
        onPlay={() => console.log("onPlay")}
      />
      :
        null
      }
      </div> */}

}