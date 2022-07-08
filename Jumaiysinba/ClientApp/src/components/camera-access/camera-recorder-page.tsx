import React, { useRef } from "react";

const CameraRecorderPage = () => {
    const videoRef = useRef<HTMLVideoElement>();
    const access = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(stream => {
        console.log(stream);
        console.log(videoRef);
    }).catch(error => {
        console.log(error)
    });
    return (
        <>
            {
                videoRef ?
                    <></> :
                    <video ref={videoRef}
                        autoPlay
                        aria-label="video"></video>
            }
        </>
    )
}

export default CameraRecorderPage;