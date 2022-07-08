import { string, object } from "yup";

export const RegisterSchema = object({
    name: string()
        .required("Вкажіть ім'я"),

    //  photo: string()
    //      .required("Виберіть фото"),

    email: string()
        .required("Вкажіть пошту"),

    password: string()
        .required("Вкажіть пароль"),

    password_confirmation: string()
        .required("Підтвердіть пароль")
        .test(
            'passwordConfirm',
            'Потрібно, щоб збігався',
            function () {
                return this.parent.password === this.parent.password_confirmation;
            }
        ),
});