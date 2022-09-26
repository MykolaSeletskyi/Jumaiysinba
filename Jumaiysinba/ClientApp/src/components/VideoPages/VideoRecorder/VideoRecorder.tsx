import * as React from "react";
import { connect } from "react-redux";
import styles from "./VideoRecorder.module.scss";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import VideoPagesImages from "../VideoPagesImages";
import { style } from "wavesurfer.js/src/util";
import { FFmpegWorker } from '../../FFmpegWorker/FFmpegWorker';
import DropDown, { IDropDownItem } from "../../DropDown/DropDown";
interface IVideoRecorderState {
  IsAgree: boolean;
  IsShared: boolean;
  IsRecording: boolean;
  IsPlaying: boolean;
  EnabledDownload: boolean;
  SelectedVideoDevice?: IDropDownItem;
  VideoDevices: IDropDownItem[];
}

class VideoRecorder extends React.PureComponent<{}, IVideoRecorderState> {

  state: IVideoRecorderState = {
    IsAgree: false,
    IsShared: false,
    IsRecording: false,
    IsPlaying: false,
    EnabledDownload: false,
    VideoDevices: [],
  };

  videoContainer: React.RefObject<HTMLVideoElement> = React.createRef<HTMLVideoElement>();
  captureStream: MediaStream | null = null;
  chunksCapture: Blob[] = [];
  mediaRecorder: MediaRecorder | null = null;
  FFmpegWorker: FFmpegWorker = FFmpegWorker.get();

  public render() {
    return (
      <div className={styles.VideoRecorder}>
        {this.getIntroduction()}
        {this.getVideo()}
        {this.getControls()}
        {this.getInfo()}
      </div>
    );
  }

  getConnectedDevices = async (type: string):Promise<MediaDeviceInfo[]> => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    return devices.filter(device => device.kind === type)
  }

  onStopSharing = async (): Promise<void> => {
    await this.setState({ IsShared: false });
    (this.videoContainer.current as HTMLVideoElement).srcObject = null;
    this.captureStream = null;
    this.onRecordScreen();
  };

  onShareScreen = async (): Promise<void> => {
    if (this.state.IsShared) {
      this.captureStream?.getTracks().forEach(function (track) {
        track.stop();
      });
      this.onStopSharing();
    }
    else {
      let deviceId:any = true;
      if(this.state.SelectedVideoDevice!=undefined){
        deviceId = this.state.SelectedVideoDevice?.Value.deviceId
      }
      let displayMediaOptions: DisplayMediaStreamConstraints = {
        audio: true,
        video: {deviceId:deviceId},
      };
      this.captureStream = await navigator.mediaDevices.getUserMedia(
        displayMediaOptions
      );
      this.setState({ IsShared: true });
      var devices: MediaDeviceInfo[] = await this.getConnectedDevices("videoinput");
      var VideoDevices: IDropDownItem[] = devices.map(d => {
        let videoDevice: IDropDownItem = { Title: d.label, Value: d };
        return videoDevice
      });
      if (devices.length > 0) {
        this.setState({
          SelectedVideoDevice: VideoDevices[0],
          VideoDevices: VideoDevices,
        })
      }
      this.captureStream.getVideoTracks()[0].onended = this.onStopSharing;
      (this.videoContainer.current as HTMLVideoElement).srcObject = this.captureStream;
    }
  };

  onRecordScreen = (): void => {
    if (this.state.IsRecording) {
      this.setState({
        IsRecording: false,
        EnabledDownload: true,
      });
      this.mediaRecorder?.stop();
    }
    else if (this.state.IsShared) {
      this.chunksCapture = [];
      let mediaRecorder = new MediaRecorder((this.captureStream as MediaStream), { mimeType: "video/webm; codecs=vp8" });
      mediaRecorder.ondataavailable = async (e) => {
        this.chunksCapture.push(e.data);
        console.log("ondataavailable (MediaRecorder)")
      }
      mediaRecorder.onstop = async (e) => {
        console.log("onstop (MediaRecorder)")
      }
      mediaRecorder.start(1000);
      console.log("start (MediaRecorder)")
      this.mediaRecorder = mediaRecorder;
      this.setState({
        IsRecording: true,
        EnabledDownload: false
      });
    }
  }

  onDownloadVideo = async (): Promise<void> => {
    let blob = new Blob(this.chunksCapture, { 'type': 'video/webm; codecs=vp8' });
    blob = await this.FFmpegWorker.FixDurationBlobWebm(blob);
    this.FFmpegWorker.SaveBlob(blob, "VideoRecord.webm");
  }

  onPlayVideo = async () => {
    if(!this.state.IsPlaying){
      let blob:Blob = new Blob(this.chunksCapture, { 'type': 'video/webm; codecs=vp8' });
      let video:HTMLVideoElement = (this.videoContainer.current as HTMLVideoElement);
      (video.parentElement as HTMLElement).style.height = `${video.clientHeight}px`;
      video.srcObject = null;
      video.src = URL.createObjectURL(blob);
      await video.play();
      (video.parentElement as HTMLElement).style.height = "auto"
      video.onpause = async () => {
        video.style.height = `${video.clientHeight}px`;
        (video.parentElement as HTMLElement).style.height = `${video.clientHeight}px`;
        video.src = "";
        video.srcObject = this.captureStream;
        (video.parentElement as HTMLElement).style.height = "auto"
        this.setState({IsPlaying:false});
      };
      this.setState({IsPlaying:true});
    }else{
      let video:HTMLVideoElement = (this.videoContainer.current as HTMLVideoElement);
      video.pause()
      video.style.height = `${video.clientHeight}px`;
      (video.parentElement as HTMLElement).style.height = `${video.clientHeight}px`;
      video.src = "";
      video.srcObject = this.captureStream;
      (video.parentElement as HTMLElement).style.height = "auto"
      this.setState({IsPlaying:false});
    }
  }

  getIntroduction = (): JSX.Element => (
    <div className={styles.introductionContainer}>
      <VideoPagesImages.VideoPerson className={styles.Person} />
      <div className={styles.accessContainer}>
        <h4>Онлайн відеозапис</h4>
        <p>Записуйте відео з браузера</p>
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

  getVideo = (): JSX.Element => (
    <div className={styles.videoContainer} hidden={!this.state.IsShared}>
      <video
        className={styles.video}
        autoPlay={true}
        ref={this.videoContainer}
        muted
      />
    </div>
  );

  getControls = (): JSX.Element => {
    let shareText: string = "Натисніть, щоб запустити камеру";
    let recordText: string = "";
    let hideArrowStop: boolean = true;
    let devicesList:IDropDownItem[] = this.state.VideoDevices;
    let onChangeDeviceVideo=(item:IDropDownItem)=>{
      this.setState({SelectedVideoDevice:item})
    }
    if (this.state.IsShared) {
      shareText = "Натисніть, щоб зупинити камеру";
      recordText = "Натисніть, щоб почати запис";
      hideArrowStop = false;
    }

    if (this.state.IsRecording) {
      recordText = "Натисніть, щоб зупинити запис екрана";
    }

    if (this.state.EnabledDownload) {
      recordText = "Відтворіть або завантажте записане відео або почніть запис знову";
      hideArrowStop = true;
    }

    if(this.state.IsPlaying){
      recordText = "Зупинити відтворення";
    }

    return (<div className={styles.controlsContainer} hidden={!this.state.IsAgree}>
      <DropDown disabled={this.state.IsRecording} hidden={!this.state.IsShared} items={devicesList} onChange={onChangeDeviceVideo}></DropDown>
      <div className={styles.buttons}>
        <div className={styles.divRelative}>
          <button className={styles.btn} onClick={this.onShareScreen}>
            {this.state.IsShared ? <VideoPagesImages.StopBtnIcon /> : <VideoPagesImages.PlayBtnIcon />}
          </button>
          <VideoPagesImages.ArrowShareAccessIcon className={styles.arrowShareAccessIcon} />
        </div>
        <p>{shareText}</p>
        <div>
          <div className={styles.divRelative}>
            <button className={styles.btn} disabled={!this.state.IsShared} onClick={this.onRecordScreen}>
              {this.state.IsRecording ? <VideoPagesImages.StopBtnIcon /> : <VideoPagesImages.StartRecordBtnIcon />}
            </button>
            <VideoPagesImages.ArrowStopRecordIcon hidden={hideArrowStop} className={styles.arrowStopRecordIcon} />
          </div>
          <div className={styles.divRelative}>
            <button className={styles.btn} disabled={this.state.EnabledDownload == false || this.state.IsShared == false} onClick={this.onPlayVideo}>
              {this.state.IsPlaying ? <VideoPagesImages.StopBtnIcon /> : <VideoPagesImages.PlayBtnIcon />}
            </button>
            <VideoPagesImages.ArrowStopPlayIcon hidden={!this.state.IsPlaying} className={styles.arrowStopPlayIcon} />
          </div>
          <button className={styles.btn} disabled={!this.state.EnabledDownload} onClick={this.onDownloadVideo}>
            <VideoPagesImages.DownloadBtnIcon />
          </button>
        </div>
        <p>{recordText}</p>
      </div></div>
    )
  };

  getInfo = (): JSX.Element => (
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
          обмежений обсяг пам’яті.
        </p>
      </div>
    </div>
  );
}
export default connect()(VideoRecorder);
