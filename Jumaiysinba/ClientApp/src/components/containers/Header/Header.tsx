import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import LogoutModal from "../../auth/Logout";
import DropDownLinks, { IDropDownLink } from "./DropDownLinks/DropDownLinks";
import styles from "./Header.module.scss"
import SVGforLinks from "./SvgForDropDownLinks";

const HeaderMenu = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const textLinks: IDropDownLink[] = [
        {
            To: "/word-counter",
            Title: "Word And Character Count",
            Icon: SVGforLinks.WordAndCharacterCountSVG
        },
        {
            To: "",
            Title: "Word Finder",
            Icon: SVGforLinks.WordFinderSVG
        }
    ];
    const videoLinks: IDropDownLink[] = [
        {
            To: "/video-recorder",
            Title: "Video Recorder",
            Icon: SVGforLinks.VideoRecorderSVG
        },
        {
            To: "/camera-test",
            Title: "Webcam Test",
            Icon: SVGforLinks.WebcamTestSVG
        },
        {
            To: "/screen-recorder",
            Title: "Screen Recorder",
            Icon: SVGforLinks.ScreenRecorderSVG
        }
    ];
    const locationLinks: IDropDownLink[] = [
        {
            To: "/get-location",
            Title: "My Current Location",
            Icon: SVGforLinks.MyCurrentLocationSVG
        },
        {
            To: "",
            Title: "Share My Location",
            Icon: SVGforLinks.ShareMyLocationSVG
        }
    ];
    const audioLinks: IDropDownLink[] = [
        {
            To: "/microphone",
            Title: "Voice Recorder",
            Icon: SVGforLinks.VoiceRecorderSVG
        },
        {
            To: "/",
            Title: "Send Voice Messages",
            Icon: SVGforLinks.SendVoiceMessagesSVG
        },
        {
            To: "/microphone-test",
            Title: "Microphone Test",
            Icon: SVGforLinks.MicrophoneTestSVG
        },
        {
            To: "/speaker-test",
            Title: "Speaker Test",
            Icon: SVGforLinks.SpeakerTestSVG
        }
    ];
    return (
        <header className={styles.header}>
            <div className={styles.containerHeader}>
                <Link to="/">
                    <svg width="192" height="30" viewBox="0 0 192 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.90499 22.6835C4.3521 23.1043 4.86497 23.5251 5.44358 23.9459C6.0485 24.3404 6.82437 24.5377 7.7712 24.5377C8.95473 24.5377 9.84895 24.222 10.4539 23.5908C11.0851 22.9333 11.4007 21.9076 11.4007 20.5136V3.82583H17.2395V21.3027C17.2395 22.8018 16.9896 24.0905 16.4899 25.1689C16.0165 26.2472 15.3721 27.1414 14.5568 27.8515C13.7415 28.5354 12.8078 29.0482 11.7558 29.3901C10.73 29.7057 9.6517 29.8636 8.52077 29.8636C7.60024 29.8636 6.75862 29.7715 5.9959 29.5874C5.23318 29.4296 4.53621 29.2192 3.90499 28.9562C3.30007 28.6669 2.73461 28.3381 2.20859 27.9699C1.68258 27.6017 1.19601 27.2203 0.748901 26.8258L3.90499 22.6835Z" fill="#282828" />
                        <path d="M21.981 10.927H27.8197V21.2632C27.8197 22.3678 28.0696 23.2489 28.5693 23.9064C29.0953 24.564 29.8581 24.8927 30.8575 24.8927C31.8569 24.8927 32.6065 24.564 33.1062 23.9064C33.6059 23.2489 33.8558 22.3678 33.8558 21.2632V10.927H39.734V21.2632C39.734 23.9722 38.9318 26.0894 37.3275 27.6148C35.7231 29.114 33.5665 29.8636 30.8575 29.8636C28.1222 29.8636 25.9524 29.114 24.3481 27.6148C22.77 26.0894 21.981 23.9722 21.981 21.2632V10.927Z" fill="#282828" />
                        <path d="M43.6227 15.819H55.1819V20.7504H43.6227V15.819Z" fill="#282828" />
                        <path d="M59.5159 0.985352H65.3547V12.7812C66.0385 12.0974 66.7749 11.5451 67.5639 11.1243C68.3793 10.7035 69.3656 10.4931 70.5228 10.4931C71.7063 10.4931 72.7978 10.7035 73.7972 11.1243C74.823 11.5451 75.704 12.1632 76.4405 12.9785C77.1769 13.7938 77.7423 14.8064 78.1368 16.0162C78.5577 17.2261 78.7681 18.62 78.7681 20.198C78.7681 21.6183 78.5577 22.9333 78.1368 24.1431C77.7423 25.3267 77.1769 26.3393 76.4405 27.1809C75.704 28.0225 74.823 28.68 73.7972 29.1534C72.7978 29.6268 71.7063 29.8636 70.5228 29.8636C69.4182 29.8636 68.445 29.6926 67.6034 29.3507C66.7618 28.9825 65.9991 28.4959 65.3152 27.891V29.3901H59.5159V0.985352ZM69.142 25.09C70.4307 25.09 71.4302 24.6166 72.1403 23.6697C72.8504 22.7229 73.2055 21.5525 73.2055 20.1586C73.2055 18.7383 72.8372 17.5811 72.1008 16.6869C71.3644 15.7664 70.365 15.3061 69.1025 15.3061C67.8138 15.3061 66.8012 15.7795 66.0648 16.7263C65.3547 17.6469 64.9996 18.7909 64.9996 20.1586C64.9996 21.7629 65.3941 22.9859 66.1832 23.8275C66.9722 24.6692 67.9585 25.09 69.142 25.09Z" fill="#282828" />
                        <path d="M94.6607 27.6148C93.9769 28.2987 93.2273 28.8378 92.412 29.2323C91.623 29.6268 90.663 29.8241 89.5321 29.8241C88.3485 29.8241 87.2439 29.6137 86.2182 29.1929C85.2187 28.7721 84.3508 28.154 83.6144 27.3387C82.878 26.5234 82.2994 25.5108 81.8785 24.3009C81.4577 23.0911 81.2473 21.6972 81.2473 20.1191C81.2473 18.6989 81.4577 17.397 81.8785 16.2135C82.2994 15.0299 82.878 14.0174 83.6144 13.1757C84.3508 12.3341 85.2187 11.6897 86.2182 11.2426C87.2439 10.7692 88.3485 10.5325 89.5321 10.5325C90.6104 10.5325 91.5572 10.7035 92.3725 11.0454C93.2141 11.3873 93.9769 11.8607 94.6607 12.4656V10.927H100.499V29.3901H94.6607V27.6148ZM90.9128 25.0111C92.2016 25.0111 93.201 24.5508 93.9111 23.6303C94.6212 22.7098 94.9763 21.5525 94.9763 20.1586C94.9763 18.5805 94.5818 17.3839 93.7928 16.5685C93.03 15.7532 92.0569 15.3456 90.8734 15.3456C89.5847 15.3456 88.5852 15.8058 87.8751 16.7263C87.1913 17.6206 86.8494 18.7646 86.8494 20.1586C86.8494 21.5788 87.2044 22.7492 87.9146 23.6697C88.6247 24.564 89.6241 25.0111 90.9128 25.0111Z" fill="#282828" />
                        <path d="M103.58 3.82583H122.871V8.95447H116.165V29.3901H110.326V8.95447H103.58V3.82583Z" fill="#282828" />
                        <path d="M131.907 25.0111C132.591 25.0111 133.182 24.8796 133.682 24.6166C134.208 24.3536 134.642 24.0116 134.984 23.5908C135.352 23.1437 135.615 22.6309 135.773 22.0522C135.957 21.4473 136.049 20.8161 136.049 20.1586C136.049 19.5011 135.957 18.883 135.773 18.3044C135.615 17.6995 135.352 17.1866 134.984 16.7658C134.642 16.3187 134.208 15.9636 133.682 15.7006C133.182 15.4376 132.591 15.3061 131.907 15.3061C131.223 15.3061 130.618 15.4376 130.092 15.7006C129.592 15.9636 129.158 16.3187 128.79 16.7658C128.448 17.1866 128.185 17.6995 128.001 18.3044C127.817 18.883 127.725 19.5011 127.725 20.1586C127.725 20.8161 127.817 21.4473 128.001 22.0522C128.185 22.6309 128.448 23.1437 128.79 23.5908C129.158 24.0116 129.592 24.3536 130.092 24.6166C130.618 24.8796 131.223 25.0111 131.907 25.0111ZM131.907 29.9819C130.408 29.9819 129.053 29.732 127.843 29.2323C126.66 28.7063 125.634 28.0094 124.766 27.1414C123.925 26.2472 123.28 25.2083 122.833 24.0248C122.386 22.815 122.162 21.5262 122.162 20.1586C122.162 18.7909 122.386 17.5154 122.833 16.3318C123.28 15.1483 123.925 14.1094 124.766 13.2152C125.634 12.321 126.66 11.624 127.843 11.1243C129.053 10.5983 130.408 10.3353 131.907 10.3353C133.406 10.3353 134.747 10.5983 135.931 11.1243C137.141 11.624 138.166 12.321 139.008 13.2152C139.876 14.1094 140.533 15.1483 140.981 16.3318C141.428 17.5154 141.651 18.7909 141.651 20.1586C141.651 21.5262 141.428 22.815 140.981 24.0248C140.533 25.2083 139.876 26.2472 139.008 27.1414C138.166 28.0094 137.141 28.7063 135.931 29.2323C134.747 29.732 133.406 29.9819 131.907 29.9819Z" fill="#282828" />
                        <path d="M153.867 25.0111C154.551 25.0111 155.143 24.8796 155.642 24.6166C156.168 24.3536 156.602 24.0116 156.944 23.5908C157.312 23.1437 157.575 22.6309 157.733 22.0522C157.917 21.4473 158.009 20.8161 158.009 20.1586C158.009 19.5011 157.917 18.883 157.733 18.3044C157.575 17.6995 157.312 17.1866 156.944 16.7658C156.602 16.3187 156.168 15.9636 155.642 15.7006C155.143 15.4376 154.551 15.3061 153.867 15.3061C153.183 15.3061 152.578 15.4376 152.052 15.7006C151.552 15.9636 151.118 16.3187 150.75 16.7658C150.408 17.1866 150.145 17.6995 149.961 18.3044C149.777 18.883 149.685 19.5011 149.685 20.1586C149.685 20.8161 149.777 21.4473 149.961 22.0522C150.145 22.6309 150.408 23.1437 150.75 23.5908C151.118 24.0116 151.552 24.3536 152.052 24.6166C152.578 24.8796 153.183 25.0111 153.867 25.0111ZM153.867 29.9819C152.368 29.9819 151.013 29.732 149.803 29.2323C148.62 28.7063 147.594 28.0094 146.726 27.1414C145.885 26.2472 145.24 25.2083 144.793 24.0248C144.346 22.815 144.122 21.5262 144.122 20.1586C144.122 18.7909 144.346 17.5154 144.793 16.3318C145.24 15.1483 145.885 14.1094 146.726 13.2152C147.594 12.321 148.62 11.624 149.803 11.1243C151.013 10.5983 152.368 10.3353 153.867 10.3353C155.366 10.3353 156.707 10.5983 157.891 11.1243C159.101 11.624 160.126 12.321 160.968 13.2152C161.836 14.1094 162.494 15.1483 162.941 16.3318C163.388 17.5154 163.611 18.7909 163.611 20.1586C163.611 21.5262 163.388 22.815 162.941 24.0248C162.494 25.2083 161.836 26.2472 160.968 27.1414C160.126 28.0094 159.101 28.7063 157.891 29.2323C156.707 29.732 155.366 29.9819 153.867 29.9819Z" fill="#282828" />
                        <path d="M167.274 0.985352H173.113V29.3901H167.274V0.985352Z" fill="#282828" />
                        <path d="M178.568 23.5908C179.278 24.0379 180.133 24.4851 181.133 24.9322C182.158 25.3793 183.223 25.6028 184.328 25.6028C185.669 25.6028 186.34 25.1689 186.34 24.3009C186.34 23.8538 186.143 23.5251 185.748 23.3147C185.38 23.078 184.854 22.8281 184.17 22.5651L182.237 21.8155C181.474 21.5525 180.791 21.2632 180.186 20.9476C179.607 20.6057 179.094 20.2112 178.647 19.7641C178.226 19.2907 177.898 18.7646 177.661 18.186C177.45 17.5811 177.345 16.8578 177.345 16.0162C177.345 15.2009 177.503 14.4513 177.819 13.7675C178.161 13.0574 178.634 12.4525 179.239 11.9528C179.844 11.453 180.567 11.0585 181.409 10.7692C182.277 10.4799 183.237 10.3353 184.289 10.3353C185.814 10.3353 187.09 10.5457 188.115 10.9665C189.141 11.3873 190.075 11.8607 190.916 12.3867L189.062 16.0557C188.536 15.7927 187.852 15.4902 187.011 15.1483C186.195 14.8064 185.393 14.6354 184.604 14.6354C184.026 14.6354 183.565 14.7669 183.223 15.0299C182.908 15.2666 182.75 15.5823 182.75 15.9768C182.75 16.4239 182.895 16.7658 183.184 17.0025C183.473 17.2129 183.96 17.4496 184.644 17.7126L186.498 18.3833C187.261 18.6463 187.971 18.9224 188.628 19.2118C189.286 19.5011 189.851 19.8561 190.325 20.2769C190.824 20.6714 191.206 21.158 191.469 21.7366C191.758 22.2889 191.903 22.9728 191.903 23.7881C191.903 24.656 191.745 25.4713 191.429 26.2341C191.114 26.9705 190.653 27.628 190.048 28.2066C189.444 28.7589 188.681 29.1929 187.76 29.5085C186.866 29.8241 185.814 29.9819 184.604 29.9819C182.947 29.9819 181.435 29.732 180.067 29.2323C178.7 28.7063 177.529 28.1409 176.556 27.5359L178.568 23.5908Z" fill="#282828" />
                    </svg>
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
                    {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0C11.2795 0.00516438 8.61922 0.800663 6.34318 2.2896C4.06714 3.77854 2.27358 5.89665 1.18097 8.38594C0.0883573 10.8752 -0.256152 13.6283 0.189405 16.3097C0.634961 18.9912 1.85135 21.4853 3.69042 23.4883C5.00391 24.9108 6.59806 26.0461 8.37242 26.8226C10.1468 27.5991 12.0629 28 14 28C15.9371 28 17.8532 27.5991 19.6276 26.8226C21.4019 26.0461 22.9961 24.9108 24.3096 23.4883C26.1486 21.4853 27.365 18.9912 27.8106 16.3097C28.2562 13.6283 27.9116 10.8752 26.819 8.38594C25.7264 5.89665 23.9329 3.77854 21.6568 2.2896C19.3808 0.800663 16.7205 0.00516438 14 0ZM14 25.2261C11.0943 25.2217 8.30366 24.0913 6.21521 22.0728C6.84928 20.5306 7.92791 19.2115 9.31405 18.2831C10.7002 17.3548 12.3313 16.8591 14 16.8591C15.6687 16.8591 17.2998 17.3548 18.6859 18.2831C20.0721 19.2115 21.1507 20.5306 21.7848 22.0728C19.6963 24.0913 16.9057 25.2217 14 25.2261ZM11.1947 11.2116C11.1947 10.6572 11.3592 10.1153 11.6675 9.65438C11.9757 9.19345 12.4138 8.83419 12.9264 8.62205C13.4391 8.4099 14.0031 8.3544 14.5473 8.46255C15.0915 8.5707 15.5913 8.83765 15.9837 9.22964C16.376 9.62163 16.6432 10.1211 16.7514 10.6648C16.8597 11.2085 16.8041 11.772 16.5918 12.2842C16.3795 12.7964 16.0199 13.2341 15.5586 13.5421C15.0972 13.8501 14.5548 14.0145 14 14.0145C13.256 14.0145 12.5424 13.7192 12.0163 13.1935C11.4902 12.6679 11.1947 11.955 11.1947 11.2116ZM23.6924 19.6203C22.4392 17.4785 20.5103 15.8126 18.208 14.8834C18.9222 14.0743 19.3875 13.0764 19.5482 12.0096C19.7089 10.9428 19.558 9.85234 19.1138 8.86906C18.6695 7.88578 17.9507 7.05147 17.0437 6.46624C16.1366 5.881 15.0798 5.56971 14 5.56971C12.9202 5.56971 11.8634 5.881 10.9563 6.46624C10.0493 7.05147 9.33049 7.88578 8.88624 8.86906C8.44198 9.85234 8.29114 10.9428 8.4518 12.0096C8.61247 13.0764 9.07782 14.0743 9.79201 14.8834C7.48967 15.8126 5.56083 17.4785 4.30759 19.6203C3.30881 17.9205 2.7811 15.9856 2.77869 14.0145C2.77869 11.041 3.96093 8.18928 6.06533 6.0867C8.16974 3.98411 11.0239 2.8029 14 2.8029C16.9761 2.8029 19.8303 3.98411 21.9347 6.0867C24.0391 8.18928 25.2213 11.041 25.2213 14.0145C25.2189 15.9856 24.6912 17.9205 23.6924 19.6203Z" fill="#282828" />
                    </svg> */}
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;