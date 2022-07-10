import { FC } from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { captchaKey, GoogleReCaptcha } from "../../recaptcha";

const ReCaptcha: FC = () => {
    const onVerifyCaptcha = (token: string) => {
        localStorage.setItem("reToken", token);
    }

    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={captchaKey}
            language="uk"
        >
            <GoogleReCaptcha
                onVerify={onVerifyCaptcha} />
        </GoogleReCaptchaProvider>
    );
}

export default ReCaptcha;