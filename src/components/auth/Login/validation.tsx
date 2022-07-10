import { string, object } from "yup";

export const LoginSchema = object({
    email: string()
        .required("Вкажіть пошту"),

    password: string()
        .required("Вкажіть пароль"),
});