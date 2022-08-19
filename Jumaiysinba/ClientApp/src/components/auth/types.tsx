import internal from "stream";

export enum AuthActionTypes {
    Token = "Token",
    Logout = "Logout",
}

//////////////

export interface IUser {
    id: internal,
    email: string,
    name: string,
    roles: []
}

export interface IUserToken {
    id: internal,
    email: string,
    name: string,
    exp: number,
    roles: []
}

export interface AuthState {
    user: IUser | null,
    isAuth: boolean;
}

export interface IAuthError {
    errors: {
        password: [string],
        email: [string],
        firstName: [string],
        confirmPassword: [string],
        photo: [string],
        authError: string
    };
}

export interface IAuthByGoogleAccountResponse {
    token: string
}

export interface IErrorFields {
    setFieldError: (field: string, message: string | undefined) => void,
    setError: (error: string) => void
}

//////////////

export interface ITokenAction {
    type: AuthActionTypes.Token,
    user: IUser,
}

export interface ILogoutAction {
    type: AuthActionTypes.Logout
}

export type AuthAction = ITokenAction | ILogoutAction;