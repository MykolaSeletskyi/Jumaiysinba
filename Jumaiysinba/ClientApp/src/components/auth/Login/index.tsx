import { useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import InputGroup from "../../common/InputGroup";
import { ILoginModel } from "./types";
import { useFormik, Form, FormikProvider, FormikHelpers } from "formik";
import { LoginSchema } from './validation';
import { IErrorFields } from "../types";
import SignWithGoogleAccount from "../../common/SignWithGoogleAccount";
import './login.scss'

const LoginPage = () => {
    const initialState: ILoginModel = {
        email: "",
        password: "",
        token: ""
    }

    const [error, setError] = useState<string>("");

    const { UserLogin } = useActions();

    const onHandleSubmit = async (
        values: ILoginModel,
        { setFieldError }: FormikHelpers<ILoginModel>
    ) => {
        try {
            setError("");
            let fields: IErrorFields = { setFieldError: setFieldError, setError: setError };

            var reToken = localStorage.getItem("reToken");
            if (reToken) {
                values.token = reToken;
                UserLogin(values, fields);
            } else setError("Помилка, перезавантажте сторінку");
        } catch (ex) {
        };
    }

    const formik = useFormik({
        initialValues: initialState,
        validationSchema: LoginSchema,
        onSubmit: onHandleSubmit
    });

    const { errors, touched, handleChange, handleSubmit } = formik;

    return (
        <>
            <div className="MainDivLogin">
                <div className="FormLogin">
                    <div className="JubaTextLogin">
                        <img src={require('../../../Logo.svg').default} alt="Logotype" />
                    </div>
                    {
                        error ?
                            <div className="text-center alert-danger m-1 p-2 rounded shadow-lg">
                                {error}
                            </div> : null
                    }
                    <FormikProvider value={formik}>
                        <Form onSubmit={handleSubmit}>
                            <div className="LabelOfEmailLogin">
                                <p>Username or email:</p>
                            </div>
                            <div className="">
                                <InputGroup
                                    className="EmailInputLogin EmailIconLogin"
                                    label=""
                                    field="email"
                                    error={errors.email}
                                    touched={touched.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="LabelOfPasswordLogin">
                                <p>Password:</p>
                            </div>
                            <div className="">
                                <InputGroup
                                    className="PasswordInputLogin PasswordIconLogin"
                                    label=""
                                    field="password"
                                    type="password"
                                    error={errors.password}
                                    touched={touched.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="">
                                <button type="submit" className="SignInButtonLogin"><p className="SignInTextLogin">Sign In</p></button>
                            </div>
                            <p className="LinkForPasswordLogin">Forgot password?</p>
                            <hr className="hr-textLogin" data-content="OR"/>
                            <div className="">
                                <button className="GoogleButtonLogin"><p className="TextInGoogleLogin">Continue with Google</p></button>
                            </div>
                            <p className="SignUpTextLogin">If you dont have an account, you can easily create it by <Link to="/register" style={{ textDecoration: 'none' }} className="ForSpanLogin">Signing Up</Link></p>
                        </Form>
                    </FormikProvider>
                    {/* <div className="Row">
                        <img src={require('./g.png')} className="GoogleImg"></img>
                        <div className="GoogleButton">
                            <SignWithGoogleAccount buttonText="Sign with Google" setError={setError} />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default LoginPage;