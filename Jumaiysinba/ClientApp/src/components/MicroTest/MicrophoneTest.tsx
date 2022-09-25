import * as React from 'react';
import { ReactMic } from 'react-mic';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import axios from 'axios';
import wavesurfer from 'wavesurfer.js';
import './MicrophoneTest.scss'

export default function MicrophoneTest() {
  const [record, setRecord] = React.useState(false);
  const [recordedBlob, setRecordedBlob] = React.useState<any>();
  const [chunksCapture, setChunksCapture] = React.useState<any>([]);
  const [recordedAudio, setRecordedAudio] = React.useState<any>([]);
  const [confirm, setConfirm] = React.useState<any>(false);
  const [stopPlayWaveSurfer, setStopPlayWaveSurfer] = React.useState<any>(false);
  const [waveOrFrec, setWaveOrFrec] = React.useState<any>("sinewave");
  const [valueOfValume, setValueOfValume] = React.useState<any>(0);

  const renderMicro = () => {
    return (
      <ReactMic
        key={waveOrFrec}
        record={record}
        className="MicrophoneStyle"
        onStop={onStop}
        onData={onData}
        mimeType="audio/webm"    // defaults -> "audio/webm".  you can set it to "audio/wav"
        visualSetting={waveOrFrec}
        strokeColor="#EE706C"
      />
    )
  }

  const onConfirm = () => {
    if (confirm == false) {
      setConfirm(true);
    }
    else {
      setConfirm(false);
    }
    console.log(confirm);
  }

  const startRecording = () => {
    setRecord(true);
    checkVolume();
  }
  const checkVolume = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    const audioContext = new AudioContext();
    const mediaStreamAudioSourceNode = audioContext.createMediaStreamSource(stream);
    const analyserNode = audioContext.createAnalyser();
    mediaStreamAudioSourceNode.connect(analyserNode);
    
    const pcmData = new Float32Array(analyserNode.fftSize);
    const onFrame = () => {
        analyserNode.getFloatTimeDomainData(pcmData);
        let sumSquares = 0.0;
        pcmData.forEach(amplitude => 
          {
            sumSquares += amplitude*amplitude;
          })
          setValueOfValume(Math.sqrt(sumSquares / pcmData.length) * 100);
        window.requestAnimationFrame(onFrame);
    };
    window.requestAnimationFrame(onFrame);
  }

  const changeWave = () => {
    if (waveOrFrec == "sinewave") {
      setWaveOrFrec("frequencyBars")
    }
    else {
      setWaveOrFrec("sinewave")
    }
  }

  const stopRecording = async () => {
    setRecord(false);
    // await waveform.loadBlob(recordedBlob.blobURL);
  }
  const onData = (recordedBlob: any) => {
    // console.log('chunk of real-time data is: ', recordedBlob);
    setChunksCapture(recordedBlob);
  }

  const onStop = (recordedBlob: any) => {
    setRecordedBlob(recordedBlob);
    console.log("RecordedBlob", recordedBlob);
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='MainDivMicroTest'>
      <div>
      </div>
      <div className='UpperRowMicroTest'>
        <div className='ConfirmMicroTest'>
          <div className='DivOfTextMicroTest'>
            <span className='TextOfMicroTest'>Тест мікрофону</span>
          </div>
          <div className='DivSecurityTextMicroTest'>
            <p className='SecurityTextMicroTest'>Використовуйте цей онлайн -інструмент, щоб перевірити свій мікрофон і знайти рішення, щоб його виправити.</p>
          </div>
          <div className='DivOfPromtTextMicroTest'>
            <p className='PromptTextMicroTest'>Щоб використовувати цей інструмент, ви повинні погодитися з нашими <br /> <span className='HelpClassForSecrTextMicroTest'>Умовами обслуговування і Політикою конфіденційності.</span></p>
          </div>
          <p className='TextOfConfirmSecrMicroTest'>Погоджуюсь</p>
          <input disabled={confirm == true ? true : false} type="checkbox" className='CheckBox' onClick={onConfirm} />
        </div>

        <div className='MicrophoneHeartMicroTest'>
          <img src={require('../../images/MicrophoneHeart.svg').default} alt="MicroHeart" />
        </div>
      </div>

      {confirm ?  //If user confirmed our license than show Micro
        <>
          <div style={{visibility: record == true ? "visible" : "hidden"}}>{renderMicro()}</div>
        </>
        :
        null
      }

      {confirm ?
      <>
        <div style={{visibility: record == true ? "visible" : "hidden"}} className="TextMicrophone">
          <span>Мікрофон</span>
        </div>
        <div style={{marginTop: record == true ? "80px" : "-138px"}} className='ButtonsRowMicroTest'>
          <div className='DivForMicroButtonMicroTest'>
            <button style={{visibility: record == true ? "hidden" : "visible"}} className={record == false ? 'MicroButtonMicroTest' : 'StopMicroButtonMicroTest'} onClick={record == false ? startRecording : stopRecording}></button>
            <button style={{visibility: record == true ? "visible" : "hidden"}} className={valueOfValume == 0 || valueOfValume == undefined ? 'MicrophoneDontWork' : 'MicrophoneWork'}></button>
          </div>
        </div>
        <div className='DivTextForStartTest'>
          <span style={{visibility: record == true ? "hidden" : "visible"}} className='TextForStartTest'>Натисніть, щоб почати тестування мікрофона</span>
          <span style={{visibility: record == true ? "visible" : "hidden"}} className='TextForStartTest'>{valueOfValume == 0 || valueOfValume == undefined ? <span style={{marginLeft: "-220px"}}>Помилка <br />{<span style={{marginLeft: "-216px"}}>Проблема з мікрофоном. Нижче ви знайдете інструкції щодо виправлення мікрофона на різних пристроях.</span>}</span> : <span style={{marginLeft: "-252px"}}>Мікрофон працює</span>}</span>
        </div>
        <div className='DivDescribeOfMicro'>
            <span className='TextOfDescribeMicro'>Опис властивостей мікрофона</span>
        </div>

        <div className='FooterRowMicroTest'>
          <div className='FirstHintMicroTest'>
            <div className='Div1'>
              <span className='MainHintMicroTest'>Частота вибірки</span>
              <img style={{marginLeft: "20px"}} src={require('../../images/MicroTestSmileOne.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfFirstHint'>
              <p className='TextOfHint'>Частота дискретизації вказує, скільки аудіо семплів береться кожну секунду. Типовими значеннями є 44 100 (CD-аудіо), 48 000 (цифрове аудіо), 96 000 (мастеринг аудіо та пост-продакшн) і 192 000 (аудіо з високою роздільною здатністю).</p>
            </div>
          </div>
          <div className='SecondHintMicroTest'>
            <div className='Div1'>
              <span className='MainHintMicroTest'>Обсяг вибірки</span>
              <img style={{marginLeft: "29px"}} src={require('../../images/MicroTestSmileTwo.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfSecondHint'>
              <p className='TextOfHint'>Розмір вибірки вказує, скільки бітів використовується для представлення кожного звукового зразка. Типовими значеннями є 16 біт (аудіо CD та інші), 8 біт (зменшена пропускна здатність) і 24 біти (аудіо високої роздільної здатності).</p>
            </div>
          </div>
          <div className='ThirdHintMicroTest'>
            <div className='Div1'>
              <span className='MainHintMicroTest'>Затримка</span>
              <img style={{marginLeft: "43px", marginTop: "-4px"}} src={require('../../images/MicroTestSmileThree.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfThirdHint'>
              <p className='TextOfHint'>Затримка — це оцінка затримки між моментом, коли звуковий сигнал надходить до мікрофона, і моментом, коли аудіосигнал готовий до використання пристроєм захоплення. Наприклад, час, необхідний для перетворення аналогового аудіо в цифровий, сприяє затримці.</p>
            </div>
          </div>
          <div className='FourHintMicroTest'>
            <div className='Div1'>
              <span className='MainHintMicroTest'>Відлуння</span>
              <img style={{marginLeft: "35px", marginTop: "-3px"}} src={require('../../images/MicroTestSmileFour.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfFourHint'>
              <p className='TextOfHint'>Відлуння — це функція мікрофона, яка намагається обмежити ефект відлуння або реверберації, коли звук, записаний мікрофоном, відтворюється в динаміках, а потім знову записується мікрофоном у нескінченному циклі.</p>
            </div>
          </div>
          <div className='FiveHintMicroTest'>
            <div className='Div1'>
              <span className='MainHintMicroTest'>Придушення шуму</span>
              <img style={{marginLeft: "31px", marginTop: "-10px"}} src={require('../../images/MicroTestSmileFive.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfFiveHint'>
              <p className='TextOfHint'>Придушення шуму – це функція мікрофона, яка усуває фоновий шум із звуку.</p>
            </div>
          </div>
          <div className='SixHintMicroTest'>
            <div className='Div2'>
              <span className='MainHintMicroTest'>Автоматичне регулювання посилення</span>
              <img style={{marginLeft: "193px", marginTop: "-131px"}} src={require('../../images/MicroTestSmileSix.svg').default} alt="Smile:)" />
            </div>
            <div className='DivOfSixHint'>
              <p className='TextOfHint'>Автоматичне підсилення — це функція мікрофона, яка автоматично керує гучністю вхідного аудіо, щоб підтримувати стабільний рівень гучності.</p>
            </div>
          </div>

          <div className='DivLinkOnDevicesText'>
            <p className='LinkOnDevicesText'>Посилання на тестування та вказівки щодо виправлення вашого мікрофон за допомогою пристроїв</p>
          </div>


        <div className='LinkOnDevices'>
          <div className='FirstLink'>
              <div style={{marginTop: "40px", marginLeft: "31px"}}>
                <span className='DeviceName'>iPhone та iPad</span>
              </div>
              <div style={{marginTop: "17px", marginLeft: "33px"}}>
                <span className='DeviceText'>Рішення щодо усунення проблем з мікрофоном на iPhone та iPad →</span>
              </div>
          </div>
          <div className='SecondLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Mac</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
                <span className='DeviceText'>Рішення щодо усунення проблем з мікрофоном на Mac →</span>
            </div>
          </div>
          <div className='ThirdLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Android</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
              <span className='DeviceText'>Рішення щодо усунення проблем з мікрофоном на Android →</span>
            </div>
          </div>
          <div className='FourLink'>
            <div style={{marginTop: "40px", marginLeft: "31px"}}>
              <span className='DeviceName'>Windows</span>
            </div>
            <div style={{marginTop: "17px", marginLeft: "33px", width: "190px"}}>
              <span className='DeviceText'>Рішення щодо усунення проблем з мікрофоном на Windows →</span>
            </div>
          </div>
        </div>
      </div>
     </>
        :
        null
    }
    </div>
  );
}