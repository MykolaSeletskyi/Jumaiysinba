import * as React from 'react';
import { connect } from 'react-redux';
import styles from "./ScreenRecorder.module.scss"
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import VideoPagesImages from '../VideoPagesImages';
import { style } from 'wavesurfer.js/src/util';
interface IScreenRecorderState {
    IsAgree:boolean;
}
class ScreenRecorder extends React.PureComponent<{}, IScreenRecorderState> {
    state: IScreenRecorderState = {
        IsAgree: false,
    };
    public render() {

        return (
            <div className={styles.ScreenRecorder}>
                {this.getIntroduction()}
                <div className={styles.screenContainer}></div>
                {this.state.IsAgree&&this.getControls()}
                {this.getInfo()}
            </div>
        );
    }

    getIntroduction = () => 
    (<div className={styles.introductionContainer}>
            <VideoPagesImages.VideoPerson className={styles.Person} />
            <div className={styles.accessContainer}>
                <h4>Запис екрану</h4>
                <p>Записуйте та діліться вашими відео</p>
                <div className={styles.borderDiv}>
                    <p>Щоб використовувати цей інструмент, ви повинні<br />погодитися з нашими<br /><b>Умовами обслуговування і Політикою конфіденційності.</b></p>
                    <div className={styles.inputGroupAccess}>
                        <label>Погоджуюсь</label>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
        </div>)

    getControls = () =>
    (<div className={styles.controlsContainer}>
        <button><VideoPagesImages.ScreenBtnIcon /></button>
        <p>Натисніть, щоб почати показ екрана</p>
        <div>
            <button><VideoPagesImages.StartRecordBtnIcon /></button>
            <button><VideoPagesImages.PlayBtnIcon /></button>
            <button><VideoPagesImages.DownloadBtnIcon /></button>
        </div>
        <p>Відтворіть або завантажте записане відео або почніть запис знову</p>
    </div>)

    getInfo = () =>
    (<div className={styles.infoContainer}>
        <div>
            <h4>Не оновлюйте та не закривайте веб-сторінку перед збереженням запису</h4>
            <p>Зауважте, що якщо вам не вдасться зберегти свій голосовий запис, повернути його неможливо. Аудіодані не надсилаються через Інтернет, тому ваш запис зберігається лише в пам’яті вашого браузера до його збереження. Тому, якщо ви оновите цю веб -сторінку або закриєте веб -переглядач перед збереженням запису голосу, вона буде втрачена. Якщо ви втратили запис, немає сенсу звертатися до нас: на жаль, ми нічого не можемо зробити з нашого боку.</p>
        </div>
        <div>
            <h4>Зробіть тестовий запис із заданим періодом часу</h4>
            <p>Зауважте, що немає обмежень щодо тривалості запису. Але якщо ви плануєте записувати свій екран протягом тривалого часу, вам слід спочатку протестувати запис протягом такого періоду часу на пристрої та в браузері, які ви плануєте використовувати. Це пояснюється тим, що відеодані, які ви записуєте, зберігаються у вашому браузері, який має обмежений обсяг пам’яті. </p>
        </div>
    </div>)
}
export default connect()(ScreenRecorder);
