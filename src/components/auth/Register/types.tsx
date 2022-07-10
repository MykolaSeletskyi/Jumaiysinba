
export interface IRegisterModel {
    name: string,
    // photo?: File,
    email: string,
    password: string,
    password_confirmation: string,
    token: string
}

export interface IRegisterResponse {
    token: string,
}