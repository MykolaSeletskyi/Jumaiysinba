import { Dispatch } from "react";
import { AuthAction, IErrorFields } from "../types";
import { IRegisterModel, IRegisterResponse } from "./types";
import http from '../../../http_common'
import { UserFromToken } from "../actions";
import { authErrorSetter } from "../authFunction";

export const UserRegister = (model: IRegisterModel, fields: IErrorFields) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        let token: string = "";
        const shortModel = { email: model.email, password: model.password, username: model.name, token: model.token };
        http.post<IRegisterResponse>('auth/register', shortModel).then(x => {
            token = `${x.data.token}`;
            localStorage.token = token;
            UserFromToken(token, dispatch);
        }, error => {
            authErrorSetter(error, fields)
        });
        return Promise.resolve();
    }
}