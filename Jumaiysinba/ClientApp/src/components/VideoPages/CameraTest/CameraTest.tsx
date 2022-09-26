import * as React from "react";
import { connect } from "react-redux";
import styles from "./CameraTest.module.scss";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import VideoPagesImages from "../VideoPagesImages";
import { style } from "wavesurfer.js/src/util";
import { FFmpegWorker } from '../../FFmpegWorker/FFmpegWorker';
import DropDown, { IDropDownItem } from "../../DropDown/DropDown";
interface IVideoDetail{
  AspectRatio: string;
  FrameRate: string;
  Height: string;
  Width: string;
}
interface ICameraTestState {
  IsAgree: boolean;
  IsShared: boolean;
  IsRecording: boolean;
  IsPlaying: boolean;
  EnabledDownload: boolean;
  SelectedVideoDevice?: IDropDownItem;
  VideoDevices: IDropDownItem[];
  VideoDetail: IVideoDetail;
}
class CameraTest extends React.PureComponent<{}, ICameraTestState> {

  state: ICameraTestState = {
    IsAgree: false,
    IsShared: false,
    IsRecording: false,
    IsPlaying: false,
    EnabledDownload: false,
    VideoDevices: [],
    VideoDetail:{
      AspectRatio: "0",
      FrameRate: "0",
      Height: "0",
      Width: "0"
    }
  };

  videoContainer: React.RefObject<HTMLVideoElement> = React.createRef<HTMLVideoElement>();
  captureStream: MediaStream | null = null;
  chunksCapture: Blob[] = [];
  mediaRecorder: MediaRecorder | null = null;
  FFmpegWorker: FFmpegWorker = FFmpegWorker.get();

  public render() {
    return (
      <div className={styles.CameraTest}>
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
      let mediaTrackSettings:MediaTrackSettings = this.captureStream.getVideoTracks()[0].getSettings();
      let videoDetail:IVideoDetail = {
        AspectRatio: mediaTrackSettings.aspectRatio?.toFixed(2).toString() as string,
        FrameRate: mediaTrackSettings.frameRate?.toFixed(0).toString() as string,
        Height: mediaTrackSettings.height?.toFixed(0).toString() as string,
        Width: mediaTrackSettings.width?.toFixed(0).toString() as string,
      }
      this.setState({VideoDetail: videoDetail});
      (this.videoContainer.current as HTMLVideoElement).srcObject = this.captureStream;
    }
  };

  getIntroduction = (): JSX.Element => (
    <div className={styles.introductionContainer}>
      <VideoPagesImages.VideoPerson className={styles.Person} />
      <div className={styles.accessContainer}>
        <h4>Тест Веб-Камери</h4>
        <p>Перевірте свою камеру в Інтернеті та знайдіть інструкції щодо її виправлення</p>
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
    let shareText: string = "Натисніть, щоб почати тестування камери";
    let devicesList:IDropDownItem[] = this.state.VideoDevices;
    let videoDetail:IVideoDetail=this.state.VideoDetail;
    let onChangeDeviceVideo=(item:IDropDownItem)=>{
      this.setState({SelectedVideoDevice:item})
    }

    return (<div className={styles.controlsContainer} hidden={!this.state.IsAgree}>
      <div className={styles.videoInfo} hidden={!this.state.IsShared}>
        <div className={styles.videoInfoCol}>
          <label>Співвідношення сторін:<b>{videoDetail.AspectRatio}</b></label>
          <label>Частота кадрів:<b>{videoDetail.FrameRate}</b></label>
        </div>
        <div className={styles.videoInfoCol}>
          <label>Висота:<b>{videoDetail.Height}</b></label>
          <label>Ширина:<b>{videoDetail.Width}</b></label>
        </div>
      </div>
      <DropDown hidden={!this.state.IsShared} items={devicesList} onChange={onChangeDeviceVideo}></DropDown>
      <div hidden={this.state.IsShared} className={styles.buttons}>
        <div className={styles.divRelative}>
          <button className={styles.btn} onClick={this.onShareScreen}>
            {this.state.IsShared ? <VideoPagesImages.StartRecordBtnIcon /> : <VideoPagesImages.PlayBtnIcon />}
          </button>
          <VideoPagesImages.ArrowShareAccessIcon className={styles.arrowShareAccessIcon} />
        </div>
        <p>{shareText}</p>
      </div>
    </div>
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
export default connect()(CameraTest);
