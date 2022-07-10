import { Dispatch } from 'react'
import { bearer } from '../../../http_common'
import { AuthAction, AuthActionTypes } from '../types'
import { ILogoutResponse } from './types'

export const LogoutUser = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        let token = localStorage.token;
        if (token) {
            bearer(token).post<ILogoutResponse>('/auth/logout').then(x => {
                token = `${x.data.token}`;
                localStorage.token = token;
                dispatch({
                    type: AuthActionTypes.Logout
                })
            });
        }
        return Promise.resolve();
    }
}