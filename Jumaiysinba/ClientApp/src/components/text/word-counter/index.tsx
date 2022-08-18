import "./index.css";
import TextLogo from "../../../images/word-counter.svg";

const WordCounter = () => {

    return (
        <div className="container word-counter">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <h3 className="logoWordCounter">Кількість Слів І Символів</h3>
                    </div>
                    <br />
                    <div className="row">
                        <p>
                            Використовуйте наш лічильник слів і інструмент аналізатора тексту,
                            щоб підрахувати символи, слова, рядки та частоту кожного слова у вашому тексті.
                        </p>
                    </div>
                    <br />
                    <div className="row">
                        <div className="policy py-4 px-5">
                            <div className="row">
                                <p className="pt-3">
                                    Щоб використовувати цей інструмент, ви повинні<br /> погодитися з нашими<br />
                                    <b>Умовами обслуговування</b> і <b>Політикою конфіденційності</b>.
                                </p>
                            </div>
                            <div className="row pt-4">
                                <div className="form-check acceptPolicy">
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Погоджуюсь
                                    </label>
                                    <input className="ms-3 checkBox" type="checkbox" value="" id="flexCheckDefault" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-end pe-4">
                    <img src={TextLogo} alt="Not found" />
                </div>
            </div>
            <div className="counter row justify-content-lg-between mt-5 pt-3">
                <div className="col-2 square">
                    <div className="row">
                        <span className="mb-4">0</span>
                        <span>Слова</span>
                    </div>
                </div>
                <div className="col-2 square">
                    <div className="row">
                        <span className="mb-4">0</span>
                        <span>Символи</span>
                    </div>
                </div>
                <div className="col-2 square">
                    <div className="row">
                        <span className="mb-4">0</span>
                        <span>Символи<br />(Без Пробілів)</span>
                    </div>
                </div>
                <div className="col-2 square">
                    <div className="row">
                        <span className="mb-4">0</span>
                        <span>Символи(Без Пробілів<br />Або Нового Рядка)</span>
                    </div>
                </div>
                <div className="col-2 square ">
                    <div className="row">
                        <span className="mb-4">0</span>
                        <span>Лінії</span>
                    </div>
                </div>
            </div>
            <div className="row form-group mt-5">
                <textarea className="form-control text-area" rows={12} placeholder="Введіть текст"></textarea>
            </div>
            <div className="row mt-5">
                <h3 className="text-center">Частота слів</h3>
            </div>
            <div className="row form-group mt-4">
                <div className="text-area">

                </div>
            </div>
        </div >
    );
}

export default WordCounter;