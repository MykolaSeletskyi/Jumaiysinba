import * as React from "react";
import { connect } from "react-redux";
import styles from "./ScreenRecorder.module.scss";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import VideoPagesImages from "../VideoPagesImages";
import { style } from "wavesurfer.js/src/util";
import { FFmpegWorker } from '../../FFmpegWorker/FFmpegWorker';
interface IScreenRecorderState {
  IsAgree: boolean;
  IsShared: boolean;
  IsRecording: boolean;
}
class ScreenRecorder extends React.PureComponent<{}, IScreenRecorderState> {
  state: IScreenRecorderState = {
    IsAgree: true, //before publish change to false
    IsShared: false,
    IsRecording: false,
  };
  videoContainer: React.RefObject<HTMLVideoElement> = React.createRef<HTMLVideoElement>();
  captureStream: MediaStream | null = null;
  chunksCapture: Blob[] = [];
  FFmpegWorker:FFmpegWorker = FFmpegWorker.get();

  public render() {
    return (
      <div className={styles.ScreenRecorder}>
        {this.getIntroduction()}
        {this.getVideo()}
        {this.getControls()}
        {this.getInfo()}
      </div>
    );
  }

  onShareScreen = async () => {
    let stopSharing = () => {
      this.setState({ IsShared: false });
      (this.videoContainer.current as HTMLVideoElement).srcObject = null;
      this.captureStream = null;
    };
    if(this.state.IsShared)
    {
      this.captureStream?.getTracks().forEach(function(track) {
        track.stop();
      });
      stopSharing();
    }
    else {
      let displayMediaOptions: DisplayMediaStreamConstraints = {
        audio: true,
        video: true,
      };
      this.captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );
      this.setState({ IsShared: true });
      this.captureStream.getVideoTracks()[0].onended = stopSharing;
      (this.videoContainer.current as HTMLVideoElement).srcObject = this.captureStream;
    }
  };

  onRecordScreen = () => {
    console.log(this.state.IsRecording)
    if(this.state.IsRecording){
      this.setState({IsRecording:false});
    }
    else{
      this.chunksCapture = [];
      let mediaRecorder = new MediaRecorder((this.captureStream as MediaStream),{mimeType:"video/webm; codecs=vp8"});
      mediaRecorder.ondataavailable = async (e) => {
        this.chunksCapture.push(e.data);
      }
      mediaRecorder.onstop=async (e)=>{        
        const blob = new Blob(this.chunksCapture, { 'type' : 'video/webm; codecs=vp8' });   
      }
      mediaRecorder.start(1000);
      this.setState({IsRecording:true});
    }
  }

  getIntroduction = () => (
    <div className={styles.introductionContainer}>
      <VideoPagesImages.VideoPerson className={styles.Person} />
      <div className={styles.accessContainer}>
        <h4>Запис екрану</h4>
        <p>Записуйте та діліться вашими відео</p>
        <div className={styles.borderDiv}>
          <p>
            Щоб використовувати цей інструмент, ви повинні
            <br />
            погодитися з нашими
            <br />
            <b>Умовами обслуговування і Політикою конфіденційності.</b>
          </p>
          <div className={styles.inputGroupAccess}>
            <label>Погоджуюсь</label>
            <input
              type="checkbox"
              disabled={this.state.IsAgree}
              onClick={() => this.setState({ IsAgree: true })}
            />
          </div>
        </div>
      </div>
    </div>
  );

  getVideo = () => (
    <div className={styles.screenContainer} hidden={!this.state.IsShared}>
      <video
        className={styles.screenVideo}
        autoPlay={true}
        ref={this.videoContainer}
      />
    </div>
  );

  getControls = () => (
    <div className={styles.controlsContainer}  hidden={!this.state.IsAgree}>
      <div className={styles.divRelative}>
        <button onClick={this.onShareScreen}>
          <VideoPagesImages.ScreenBtnIcon />
        </button>
        <VideoPagesImages.ArrowShareAccessIcon className={styles.arrowShareAccessIcon} />
      </div>
      <p>{this.state.IsShared ? "Натисніть, щою зупинити показ екрана" : "Натисніть, щоб почати показ екрана"}</p>
      <div>
        <div className={styles.divRelative}>
          <button disabled={!this.state.IsShared} onClick={this.onRecordScreen}>
            {this.state.IsRecording ? <VideoPagesImages.StopBtnIcon /> : <VideoPagesImages.StartRecordBtnIcon />}
          </button>
          <VideoPagesImages.ArrowStopRecordIcon className={styles.arrowStopRecordIcon} />
        </div>
        <button disabled={!this.state.IsShared}>
          <VideoPagesImages.PlayBtnIcon />
        </button>
        <button>
          <VideoPagesImages.DownloadBtnIcon />
        </button>
      </div>
      <p>Відтворіть або завантажте записане відео або почніть запис знову</p>
    </div>
  );

  getInfo = () => (
    <div className={styles.infoContainer}>
      <div>
        <h4>
          Не оновлюйте та не закривайте веб-сторінку перед збереженням запису
        </h4>
        <p>
          Зауважте, що якщо вам не вдасться зберегти свій голосовий запис,
          повернути його неможливо. Аудіодані не надсилаються через Інтернет,
          тому ваш запис зберігається лише в пам’яті вашого браузера до його
          збереження. Тому, якщо ви оновите цю веб -сторінку або закриєте веб
          -переглядач перед збереженням запису голосу, вона буде втрачена. Якщо
          ви втратили запис, немає сенсу звертатися до нас: на жаль, ми нічого
          не можемо зробити з нашого боку.
        </p>
      </div>
      <div>
        <h4>Зробіть тестовий запис із заданим періодом часу</h4>
        <p>
          Зауважте, що немає обмежень щодо тривалості запису. Але якщо ви
          плануєте записувати свій екран протягом тривалого часу, вам слід
          спочатку протестувати запис протягом такого періоду часу на пристрої
          та в браузері, які ви плануєте використовувати. Це пояснюється тим, що
          відеодані, які ви записуєте, зберігаються у вашому браузері, який має
          обмежений обсяг пам’яті.{" "}
        </p>
      </div>
    </div>
  );
}
export default connect()(ScreenRecorder);
