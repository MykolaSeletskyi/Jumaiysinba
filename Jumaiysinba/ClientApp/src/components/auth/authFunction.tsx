import { AxiosError } from "axios";
import { IAuthError, IErrorFields } from "./types";

export const authErrorSetter = (error: any, fields: IErrorFields) => {
    let setError = fields.setError;
    let setFieldError = fields.setFieldError;
    let dataResponce = (((error as AxiosError).response?.data) as IAuthError);
    console.log("dataResponce", dataResponce);
    let errorsResponse = dataResponce.errors;
    if (errorsResponse.authError && setError)
        setError(errorsResponse.authError);
    if (setFieldError) {
        if (errorsResponse.email)
            setFieldError("email", errorsResponse.email[0]);
        if (errorsResponse.password)
            setFieldError("password", errorsResponse.password[0]);
        if (errorsResponse.confirmPassword)
            setFieldError("confirmPassword", errorsResponse.confirmPassword[0]);
        if (errorsResponse.firstName)
            setFieldError("firstName", errorsResponse.firstName[0]);
        if (errorsResponse.photo)
            setFieldError("photo", errorsResponse.photo[0]);
    }
};