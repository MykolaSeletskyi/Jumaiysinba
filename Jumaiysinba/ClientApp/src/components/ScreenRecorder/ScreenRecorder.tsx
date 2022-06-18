import * as React from 'react';
import { connect } from 'react-redux';
import "./ScreenRecorder.scss"
interface IScreenRecorderState {
    captureStream: MediaStream | null;
    isRecording: boolean;
}
class ScreenRecorder extends React.PureComponent<{}, IScreenRecorderState> {
    videoContainer: any;
    constructor(props: any) {
        super(props);
        this.state = {
            captureStream: null,
            isRecording: false,
        }
        this.videoContainer = React.createRef();
    }
    private startRecord = async (displayMediaOptions: any) => {
        console.log("click")
        let captureStream = null;
        try {
            captureStream = await (navigator.mediaDevices as any).getDisplayMedia(displayMediaOptions);
            console.log(this.videoContainer);
            (this.videoContainer.current as any).srcObject = captureStream;
            this.setState({ 
                captureStream: captureStream,
                isRecording: true
            });
            console.log((this.state as any).captureStream)

        } catch (err) {
            console.error("Error: " + err);
        }
    }
    private stopRecord = async (displayMediaOptions: any) => {
        let captureStream = null;
        try {
            captureStream = await (navigator.mediaDevices as any).getDisplayMedia(displayMediaOptions);
            console.log(this.videoContainer);
            (this.videoContainer.current as any).srcObject = captureStream;
            this.setState({ 
                captureStream: captureStream,
                isRecording: false
            });
            console.log((this.state as any).captureStream)

        } catch (err) {
            console.error("Error: " + err);
        }
    }
    public render() {
        console.log(this.state.isRecording);
        return (
            <div className='ScreenRecorder'>
                <div>
                    <button onClick={this.startRecord}>Start</button>
                    <button>Stop</button>
                </div>
                <div id="videoContainer" hidden={!this.state.isRecording}>
                    <video id="screenVideo" autoPlay={true} ref={this.videoContainer}></video>
                </div>
            </div>
        );
    }
}
export default connect()(ScreenRecorder);
