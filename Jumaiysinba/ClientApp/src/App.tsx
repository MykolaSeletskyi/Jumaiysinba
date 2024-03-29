import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from "react-router";
import { useEffect } from 'react';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import ScreenRecorder from './components/VideoPages/ScreenRecorder/ScreenRecorder';
import VideoRecorder from './components/VideoPages/VideoRecorder/VideoRecorder';
import WebCamTest from './components/VideoPages/CameraTest/CameraTest';
import Microphone from './components/Microphone/Microphone';
import CameraRecorderPage from './components/camera-access/camera-recorder-page';
import SpeakerTest from './components/SpeakerTest/SpeakerTest';
import WordCounter from './components/text/word-counter';
import HomePage from './components/HomePage/HomePage';
import MicrophoneTest from './components/MicroTest/MicrophoneTest';
import GetLocation from './components/geolocation/my-location';
import Layout from './components/containers/Layout/Layout';

function App() {
  const { isAuth } = useTypedSelector(state => state.auth);

  // Clear recaptcha
  const location = useLocation();
  useEffect(() => {
    var idTimeout = localStorage.getItem("idTimeout");
    if (idTimeout) {
      clearTimeout(idTimeout);
      localStorage.removeItem("idTimeout");
    }
  }, [location]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/microphone' element={<Microphone />} />
        <Route path='/microphone-test' element={<MicrophoneTest />} />
        <Route path='/camera-recorder' element={<CameraRecorderPage />} />
        <Route path='/screen-recorder' element={<ScreenRecorder />} />
        <Route path='/video-recorder' element={<VideoRecorder />} />
        <Route path='/camera-test' element={<WebCamTest />} />
        <Route path='/speaker-test' element={<SpeakerTest />} />
        <Route path='/word-counter' element={<WordCounter />} />
        <Route path='/get-location' element={<GetLocation />} />
        {!isAuth ?
          (<>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </>
          ) : <></>}
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;