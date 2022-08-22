import * as React from 'react';
import { connect } from 'react-redux';
import styles from "./ScreenRecorder.module.scss"
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import VideoPagesImages from '../VideoPagesImages';
import { style } from 'wavesurfer.js/src/util';
interface IScreenRecorderState {
}
class ScreenRecorder extends React.PureComponent<{}, IScreenRecorderState> {

    public render() {
        return (
            <div className={styles.ScreenRecorder}>
                <div className={styles.introductionContainer}>
                    <VideoPagesImages.VideoPerson className={styles.Person} />
                    <div className={styles.accessContainer}>
                        <h4>Запис екрану</h4>
                        <p>Записуйте та діліться вашими відео</p>
                        <div className={styles.borderDiv}>
                            <p>Щоб використовувати цей інструмент, ви повинні<br/>погодитися з нашими<br/><b>Умовами обслуговування і Політикою конфіденційності.</b></p>
                            <div className={styles.inputGroupAccess}>
                                <label>Погоджуюсь</label>
                                <input type="checkbox" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.screenContainer}></div>
                <div className={styles.controlsContainer}></div>
                <div className={styles.infoContainer}></div>
            </div>
        );
    }
}
export default connect()(ScreenRecorder);
