import { IInputInfo } from './types';
import './index.css';

const InputInfo = ({ field, label, type = "text" }: IInputInfo) => {
    return (
        <div className='row mt-3'>
            <label className='form-label p-0 m-0' htmlFor={field}>
                {label}:
            </label>
            <input
                className='input-info'
                type={type}
                name={field}
                value={field}
                disabled />
        </div>
    );
}

export default InputInfo;