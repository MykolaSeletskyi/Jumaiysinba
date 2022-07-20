import { FC, InputHTMLAttributes } from "react";
import classNames from 'classnames';
import '../auth/Login/login.scss';

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    field: string,
    className?: string,
    touched?: boolean | null,
    error?: string | null,
    type?: "text" | "email" | "password"
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputGroup: FC<InputGroupProps> = ({ label, field, className, onChange, touched = null, error = null, type = "text" }: InputGroupProps) => {
    return (
        <div className="">
            <label htmlFor={field} className="form-label">
                {label}
            </label>
            <input
                type={type}
                name={field}
                className={classNames(className,
                    { "is-invalid": touched && error },
                    { "is-valid": touched && !error }
                )}
                id={field}
                onChange={onChange}
            />
            {(touched && error) && <div className="invalid-feedback">{error}</div>}
        </div>
    );
}

export default InputGroup;