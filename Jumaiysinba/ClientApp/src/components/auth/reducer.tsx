import { AuthState, AuthAction, AuthActionTypes } from "./types";

const initialState: AuthState = {
    user: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionTypes.Token:
            return {
                ...state,
                user: action.user,
                isAuth: true
            };
        case AuthActionTypes.Logout:
            return {
                ...state,
                user: null,
                isAuth: false
            };
        default: return state;
    };
}