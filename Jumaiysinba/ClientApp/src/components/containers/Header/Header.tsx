import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import LogoutModal from "../../auth/Logout";
import DropDownLinks, { IDropDownLink } from "./DropDownLinks/DropDownLinks";
import styles from "./Header.module.scss"
import SVGforLinks from "./SvgForDropDownLinks";

const HeaderMenu = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const textLinks:IDropDownLink[] = [
        {
            To: "",
            Title: "Word And Character Count",
            Icon: SVGforLinks.WordAndCharacterCountSVG
        },
        {
            To: "",
            Title: "Word Finder",
            Icon: SVGforLinks.WordFinderSVG
        }
    ];
    const videoLinks:IDropDownLink[] = [
        {
            To: "",
            Title: "Video Recorder",
            Icon: SVGforLinks.VideoRecorderSVG
        },
        {
            To: "",
            Title: "Webcam Test",
            Icon: SVGforLinks.WebcamTestSVG
        },
        {
            To: "/ScreenRecorder",
            Title: "Screen Recorder",
            Icon: SVGforLinks.ScreenRecorderSVG
        }
    ];
    const locationLinks:IDropDownLink[] = [
        {
            To: "",
            Title: "My Current Location",
            Icon: SVGforLinks.MyCurrentLocationSVG
        },
        {
            To: "",
            Title: "Share My Location",
            Icon: SVGforLinks.ShareMyLocationSVG
        }
    ];
    const audioLinks:IDropDownLink[] = [
        {
            To: "",
            Title: "Voice Recorder",
            Icon: SVGforLinks.VoiceRecorderSVG
        },
        {
            To: "",
            Title: "Send Voice Messages",
            Icon: SVGforLinks.SendVoiceMessagesSVG
        },
        {
            To: "",
            Title: "Microphone Test",
            Icon: SVGforLinks.MicrophoneTestSVG
        },
        {
            To: "",
            Title: "Speaker Test",
            Icon: SVGforLinks.SpeakerTestSVG
        }
    ];
    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <Link to="/">
                    <img src={require('../../../images/Logo.svg').default} alt="Logo" />
                </Link>
                <div className={styles.containerLinks}>
                    <DropDownLinks className={styles.locationDropDown} Links={locationLinks}>Місцезнаходження</DropDownLinks>
                    <DropDownLinks className={styles.audioDropDown} Links={audioLinks}>Аудіо</DropDownLinks>
                    <DropDownLinks className={styles.videoDropDown} Links={videoLinks}>Відео</DropDownLinks>
                    <DropDownLinks className={styles.textDropDown} Links={textLinks}>Текст</DropDownLinks>
                </div>
                <div className={styles.containerProfile}>
                    <div className={styles.containerLanguage}>
                        <button className={styles.currentLanguage}>UA</button>
                        <button>ENG</button>
                    </div>
                    <img src={require('../../../images/Profile.svg').default} alt="Profile"/>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;