import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import DefaultLayout from './components/containers/DefaultLayout';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import ScreenRecorder from './components/ScreenRecorder/ScreenRecorder';
import Microphone from './components/Microphone/Microphone';

import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from "react-router";
import { useEffect } from 'react';
import CameraRecorderPage from './components/camera-access/camera-recorder-page';
import SpeakerTest from './components/SpeakerTest/SpeakerTest';
import WordCounter from './components/text/word-counter';

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
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/microphone' element={<Microphone />} />
        <Route path='/camera-recorder' element={<CameraRecorderPage />} />
        <Route path='/ScreenRecorder' element={<ScreenRecorder />} />
        <Route path='/speaker-test' element={<SpeakerTest />} />
        <Route path='/word-counter' element={<WordCounter />} />
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