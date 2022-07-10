import { Dispatch } from "react";
import { AuthAction, IErrorFields } from "../types";
import { ILoginModel, ILoginResponse } from "./types";
import http from '../../../http_common';
import { UserFromToken } from "../actions";
import { authErrorSetter } from "../authFunction";

export const UserLogin = (model: ILoginModel, fields: IErrorFields) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        let token: string = "";
        http.post<ILoginResponse>('auth/login', model).then(x => {
            token = `${x.data.token}`;
            localStorage.setItem("token", token);
            UserFromToken(token, dispatch);
        }, error => {
            authErrorSetter(error, fields);
        });
        return Promise.resolve();
    }
}
