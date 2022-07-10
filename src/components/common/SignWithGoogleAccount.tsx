import { gapi } from "gapi-script";
import { FC, useEffect } from "react";
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { useActions } from "../../hooks/useActions";
import { IErrorFields } from "../auth/types";

interface SignWithGoogleAccountProps {
    buttonText: string;
    setError: (error: string) => void
}

const SignWithGoogleAccount: FC<SignWithGoogleAccountProps> = ({ buttonText, setError }: SignWithGoogleAccountProps) => {

    const ClintID = "207335147785-dccv6vjmvttes3cmqg7n25lpkklhmho3.apps.googleusercontent.com";

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: ClintID,
                scope: "openid",
            })
        }
        gapi.load('client:auth2', start);
    }, []);

    const handleFailure = (result: any) => {
        switch (result.error) {
            case "popup_closed_by_user":
                setError("Вікно авторизації закрито");
                break;
            default: break;
        }
    }

    const { UserAuthByGoogleAccount } = useActions();

    const handleSuccess = (googleData: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        let data: GoogleLoginResponse = googleData as GoogleLoginResponse;
        if (data) {
            let fields: IErrorFields = { setFieldError: () => { }, setError: setError };
            UserAuthByGoogleAccount(data.tokenId, fields);
        }
    }

    return (
        <>
            <GoogleLogin
                clientId={"207335147785-dccv6vjmvttes3cmqg7n25lpkklhmho3.apps.googleusercontent.com"}
                buttonText={buttonText}
                onSuccess={handleSuccess}
                onFailure={handleFailure} >
            </GoogleLogin>
        </>
    )
}


export default SignWithGoogleAccount;