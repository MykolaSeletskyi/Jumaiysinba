// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { Routes, Route, useLocation } from 'react-router';
import DefaultLayout from './components/containers/DefaultLayout';
import LoginPage from './components/auth/Login';
import RegisterPage from './components/auth/Register';
import ScreenRecorder from './components/ScreenRecorder/ScreenRecorder';

import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from "react-router";
import { useEffect } from 'react';
import CameraRecorderPage from './components/camera-access/camera-recorder-page';

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
        <Route path='/camera-recorder' element={<CameraRecorderPage />} />
        <Route path='/ScreenRecorder' element={<ScreenRecorder />} />
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