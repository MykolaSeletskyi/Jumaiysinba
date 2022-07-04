import * as React from 'react';
import { connect } from 'react-redux';
import "./ScreenRecorder.scss"
interface IScreenRecorderState {
    captureStream: any;
    mediaRecorder: any;
    isRecording: boolean;
}
class ScreenRecorder extends React.PureComponent<{}, IScreenRecorderState> {
    videoContainer: any;
    chunksCapture:any[] = [];
    constructor(props: any) {
        super(props);
        this.state = {
            captureStream: null,
            mediaRecorder: null,
            isRecording: false,
        }
        this.videoContainer = React.createRef();
    }
    private saveBlob(blob:Blob, fileName:string) {
        let a:HTMLAnchorElement = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    private startRecord = async (displayMediaOptions: any) => {
        console.log("click")
        try {
            let captureStream:any = await (navigator.mediaDevices as any).getDisplayMedia(displayMediaOptions);
            // let captureStream:any = await (navigator.mediaDevices as any).getUserMedia({
            //     audio: false,
            //     video: true
            // })
            console.log(this.videoContainer);
            (this.videoContainer.current as any).srcObject = captureStream;
            let mediaRecorder = new MediaRecorder(captureStream);
            mediaRecorder.ondataavailable = (e:any) => {
                this.chunksCapture.push(e.data);
            }
            mediaRecorder.onstop=(e:any)=>{
                const blob = new Blob(this.chunksCapture, { 'type' : 'video/mp4;' });
                this.saveBlob(blob,"test.mp4");
                this.chunksCapture=[];
            }
            mediaRecorder.start();
            this.setState({ 
                captureStream: captureStream,
                mediaRecorder: mediaRecorder,
                isRecording: true,
            });
            console.log((this.state as any).captureStream)

        } catch (err) {
            console.error("Error: " + err);
        }
    }
    private stopRecord = async (displayMediaOptions: any) => {
        let captureStream = null;
        try {
            this.state.mediaRecorder.stop()
        } catch (err) {
            console.error("Error: " + err);
        }
    }
    public render() {

        console.log((this.videoContainer.current as any)?.currentTime);
        console.log(this.state.isRecording);
        return (
            <div className='ScreenRecorder'>
                <div>
                    <button onClick={this.startRecord}>Start</button>
                    <button onClick={this.stopRecord}>Stop</button>
                </div>
                <div id="videoContainer" hidden={!this.state.isRecording}>
                    <video id="screenVideo" autoPlay={true} ref={this.videoContainer}></video>
                </div>
            </div>
        );
    }
}
export default connect()(ScreenRecorder);
