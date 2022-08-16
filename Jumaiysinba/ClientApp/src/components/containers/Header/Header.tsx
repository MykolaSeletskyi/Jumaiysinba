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
                    <DropDownLinks Links={locationLinks}>Місцезнаходження</DropDownLinks>
                    <DropDownLinks Links={audioLinks}>Аудіо</DropDownLinks>
                    <DropDownLinks Links={videoLinks}>Відео</DropDownLinks>
                    <DropDownLinks Links={textLinks}>Текст</DropDownLinks>
                </div>
                {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                    <Link to="/">Home page</Link>
                    </li>
                    <li>
                    <Link to="/camera-recorder">Camera recorder</Link>
                    </li>
                    <li>
                    <Link to="/ScreenRecorder">Screen recorder</Link>
                    </li>
                    <li>
                    <Link to="/microphone">Microphone</Link>
                    </li>
                </ul> */}
                <div className={styles.containerProfile}>
                    <div className={styles.containerLanguage}>
                        <button className={styles.currentLanguage}>UA</button>
                        <button>ENG</button>
                    </div>
                    <img src={require('../../../images/Profile.svg').default} alt="Profile"/>
                    {/* <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        {isAuth ?
                            <li>
                            <LogoutModal />
                            </li> :
                            <>
                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                            <li>
                            <Link to="/register">Register</Link>
                            </li>
                            </>}
                        </ul> */}
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;