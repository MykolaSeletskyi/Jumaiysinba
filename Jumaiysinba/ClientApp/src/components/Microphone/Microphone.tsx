import * as React from 'react';
import { ReactMic } from 'react-mic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';

async function SendRecord(record: any)
{
  
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
  
  const saveBlob = (recordedAudio: Blob, fileName: string) => {
    let a:HTMLAnchorElement = document.createElement("a");
    document.body.appendChild(a);
    a.style.display = "none";
    var url = window.URL.createObjectURL(recordedAudio);
    a.href = url;
    a.download = fileName + ".mp3";
    console.log(a);
    a.click();
    window.URL.revokeObjectURL(url);
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

  return (
    <div>
      <ReactMic
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
      </div>
    </div>
  );

}