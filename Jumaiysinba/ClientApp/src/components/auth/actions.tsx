import { Dispatch } from "react";
import { AuthAction, AuthActionTypes, IAuthByGoogleAccountResponse, IErrorFields, IUser } from "./types";
import jwt from "jwt-decode";
import { authErrorSetter } from "./authFunction";
import http from '../../http_common'

export const UserFromToken = (token: string, dispatch: Dispatch<AuthAction>) => {
    const user = jwt(token) as IUser;
    dispatch({
        type: AuthActionTypes.Token,
        user: { id: user.id, email: user.email, name: user.name, roles: user.roles }
    });
}

export const UserAuthByGoogleAccount = (tokenId: string, fields: IErrorFields) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        let token: string = "";
        http.post<IAuthByGoogleAccountResponse>('auth/auth-by-google-account', { token: tokenId }).then(x => {
            token = `${x.data.token}`;
            localStorage.token = token;
            UserFromToken(token, dispatch);
        }, error => {
            authErrorSetter(error, fields);
        });
        return Promise.resolve();
    }
}