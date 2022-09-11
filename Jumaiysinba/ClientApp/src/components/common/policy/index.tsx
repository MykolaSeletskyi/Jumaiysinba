import { PolicyParameters } from "./types";
import './index.css';

const Policy = ({ onChangePolicy, header, explain, borderColor, logo, isLeft = true }: PolicyParameters) => {
    return (
        <>
            <div className="row">
                {
                    !isLeft &&
                    <div className="col-7 d-flex justify-content-center">
                        <img src={logo} alt="Not found" />
                    </div>
                }
                <div className="col-5">
                    <div className="row">
                        <h3 className="p-0">{header}</h3>
                    </div>
                    <br />
                    <div className="row pt-3">
                        <p className="p-0">
                            {explain}
                        </p>
                    </div>
                    <br />
                    <div className="row">
                        <div className="policy py-4 px-5" style={{ borderColor: borderColor }}>
                            <div className="row">
                                <p className="pt-3">
                                    Щоб використовувати цей інструмент, ви повинні<br /> погодитися з нашими<br />
                                    <b>Умовами обслуговування</b> і <b>Політикою конфіденційності</b>.
                                </p>
                            </div>
                            <div className="row pt-4">
                                <div className="acceptPolicy">
                                    <label>
                                        Погоджуюсь
                                    </label>
                                    <input className="ms-4" type="checkbox" onChange={onChangePolicy} id="check" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    isLeft &&
                    <div className="col-7 d-flex justify-content-center">
                        <img src={logo} alt="Not found" />
                    </div>
                }
            </div>
        </>
    );
}

export default Policy;