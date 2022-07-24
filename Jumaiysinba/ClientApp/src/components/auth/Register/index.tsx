import { Form, FormikHelpers, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import InputGroup from "../../common/InputGroup";
import SignWithGoogleAccount from "../../common/SignWithGoogleAccount";
import { IErrorFields } from "../types";
import { IRegisterModel } from "./types";
import { RegisterSchema } from "./validation";
import './register.scss';

const RegisterPage = () => {
    const initialState: IRegisterModel = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        token: ""
    }

    const [error, setError] = useState<string>("");

    const { UserRegister } = useActions();

    const onHandleSubmit = async (
        values: IRegisterModel,
        { setFieldError }: FormikHelpers<IRegisterModel>
    ) => {
        try {
            setError("");
            let fields: IErrorFields = { setFieldError: setFieldError, setError: setError };
            var reToken = localStorage.getItem("reToken");
            if (reToken) {
                values.token = reToken;
                UserRegister(values, fields);
            }
        } catch (ex) {
        }
    };

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: RegisterSchema,
        onSubmit: onHandleSubmit
    });

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className="MainDivRegister">
                <div className="FormRegister">
                    <div className="JubaTextRegister">
                        <img src={require('../../../images/Logo.svg').default} alt="Logotype" />
                    </div>
                    {
                        error ?
                            <div className="text-center alert-danger m-1 p-2 rounded shadow-lg">
                                {error}
                            </div> : null
                    }
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <div className="LabelOfUserNameRegister">
                                <p>Create a username:</p>
                            </div>
                            <InputGroup
                                className="UserNameInputRegister UserNameInputIconRegister"
                                label=""
                                field="name"
                                error={errors.name}
                                touched={touched.name}
                                onChange={handleChange} />
                            <div className="LabelOfEmailRegister">
                                <p>Email:</p>
                            </div>
                            <InputGroup
                                className="EmailInputRegister EmailIconRegister"
                                label=""
                                field="email"
                                error={errors.email}
                                touched={touched.email}
                                onChange={handleChange}
                            />
                            <div className="LabelOfPasswordRegister">
                                <p>Create a password:</p>
                            </div>
                            <InputGroup
                                className="PasswordInputRegister PasswordIconRegister"
                                label=""
                                field="password"
                                type="password"
                                error={errors.password}
                                touched={touched.password}
                                onChange={handleChange} />
                            {/* <div className="LabelOfPasswordConfirmationRegister">
                                <p>Confirm the password:</p>
                            </div>
                            <div className="">
                                <InputGroup
                                    className="PasswordConfirmationInputRegister PasswordIconRegister"    /* Підтвердженння паролю - стилі готові
                                    label=""
                                    field="password_confirmation"
                                    type="password"
                                    error={errors.password_confirmation}
                                    touched={touched.password_confirmation}
                                    onChange={handleChange} />
                            </div> */}

                            {/* <div className="">
                                <Link to="/login" className="btn btn btn-outline-success px-3">Вже маю акаунт</Link>
                            </div> */}

                            <div className="">
                                <button className="SignInButtonRegister"><p className="SignInTextRegister">Sign in</p></button>
                            </div>
                            <hr className="hr-textRegister" data-content="OR" />
                            <div className="">
                                <button className="GoogleButtonRegister">
                                    <div className="DivForGoogleIconRegister">
                                        <img src={require('../../../images/Google.svg').default} className="GoogleIconRegister" alt="asd" />
                                    </div>
                                    <p className="TextInGoogleRegister">Register with Google</p></button>
                            </div>
                            <p className="LoginTextRegister">If you have an account, you can easily <Link to="/login" style={{ textDecoration: 'none' }} className="ForSpanRegister">Login</Link></p>
                        </Form>
                    </FormikProvider>
                    {/* <div className="mt-3 text-center">
                        <SignWithGoogleAccount buttonText="Sign with Google" setError={setError} />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default RegisterPage;