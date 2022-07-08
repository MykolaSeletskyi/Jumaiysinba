import { useEffect, useRef } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const captchaKey = "6Le2y4sgAAAAAFNTk9DBkqyAUlzy1eYBC9D4OMP2";

interface IGoogleRecaptchaProps {
    onVerify: (token: string) => void;
    action?: string;
}

export function GoogleReCaptcha({ action, onVerify }: IGoogleRecaptchaProps) {
    const googleRecaptchaContextValue = useGoogleReCaptcha();
    let idTimeout = useRef<any>(undefined);

    useEffect(() => {
        const { executeRecaptcha } = googleRecaptchaContextValue;
        if (!executeRecaptcha) {
            return;
        }

        const handleExecuteRecaptcha = async () => {
            const token = await executeRecaptcha(action);
            if (!onVerify) {
                return;
            }

            onVerify(token);

            if (idTimeout.current) {
                clearTimeout(idTimeout.current);
            }

            idTimeout.current = setTimeout(() => {
                handleExecuteRecaptcha();
                clearTimeout(idTimeout.current);
            }, 115_000);

            localStorage.setItem("idTimeout", idTimeout.current);
        }
        handleExecuteRecaptcha();
    }, [action, onVerify, googleRecaptchaContextValue]);

    return null;
}