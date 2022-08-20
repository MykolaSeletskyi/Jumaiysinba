import { useState } from "react";
import Policy from "../policy";
import "./index.css";
import "../index.css";

const WordCounter = () => {
    const [policy, setPolicy] = useState<boolean>(false);

    const [allSymbols, setAllSymbols] = useState<number>(0);
    const [symbolsWithoutSpace, setSymbolsWithoutSpace] = useState<number>(0);
    const [symbolsWithoutSpaceAndNewline, setSymbolsWithoutSpaceAndNewline] = useState<number>(0);
    const [lines, setLines] = useState<number>(1);
    const [wordAmount, setWordAmount] = useState<number>(0);

    const [words, setWords] = useState<string[]>();
    const [wordDictionary, setWordDictionary] = useState<{ [key: string]: number }>();

    const onChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        setAllSymbols(text.length);

        let textWithoutSpacing = text.replaceAll(' ', '');
        setSymbolsWithoutSpace(textWithoutSpacing.length);

        let textWithoutSpacingAndNewline = textWithoutSpacing.replaceAll('\n', '');
        setSymbolsWithoutSpaceAndNewline(textWithoutSpacingAndNewline.length);

        let textWithoutNewLine = text.replaceAll('\n', '');
        setLines(text.length - textWithoutNewLine.length + 1);

        let words = text.toLowerCase().replace(/[&\/\\#,+()$~%.'":;*?<>@!-_`|№{} \n]/g, '^').split('^').filter(value => value != '');
        setWordAmount(words.length);

        let onlyWord = words.filter((item, index) => words.indexOf(item) == index).sort();
        setWords(onlyWord);

        let counts: { [key: string]: number } = {};
        words.forEach(word => {
            counts[word] = (counts[word] || 0) + 1;
        });
        setWordDictionary(counts);
    }

    const onChangePolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
        let checked = e.target.checked;

        if (checked) {
            setPolicy(checked);
            e.target.disabled = true;
        }
    }

    return (
        <div className="word-counter">
            <Policy onChangePolicy={onChangePolicy}
                header={"Кількість Слів І Символів"}
                explain={
                    "Використовуйте наш лічильник слів і інструмент аналізатора тексту," +
                    " щоб підрахувати символи, слова, рядки та частоту кожного слова у вашому тексті."
                } />
            {
                policy ?
                    <>
                        <div className="counter row justify-content-lg-between mt-5 pt-3">
                            <div className="col-2 square">
                                <div className="row">
                                    <span className="mb-4">{wordAmount}</span>
                                    <span>Слова</span>
                                </div>
                            </div>
                            <div className="col-2 square">
                                <div className="row">
                                    <span className="mb-4">{allSymbols}</span>
                                    <span>Символи</span>
                                </div>
                            </div>
                            <div className="col-2 square">
                                <div className="row">
                                    <span className="mb-4">{symbolsWithoutSpace}</span>
                                    <span>Символи<br />(Без Пробілів)</span>
                                </div>
                            </div>
                            <div className="col-2 square">
                                <div className="row">
                                    <span className="mb-4">{symbolsWithoutSpaceAndNewline}</span>
                                    <span>Символи(Без Пробілів<br />Або Нового Рядка)</span>
                                </div>
                            </div>
                            <div className="col-2 square ">
                                <div className="row">
                                    <span className="mb-4">{lines}</span>
                                    <span>Лінії</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <textarea className="form-control text-area" rows={6} placeholder="Введіть текст" onChange={onChangeArea} />
                        </div>
                        {
                            words && wordDictionary && words.length > 0 ?
                                <>
                                    <div className="row mt-5">
                                        <h3 className="text-center">Частота слів</h3>
                                    </div>
                                    <div className="row mt-4 justify-content-center">
                                        <div className="text-area pt-0 row">
                                            {
                                                words.map((word, index) => { // index bad idea
                                                    return (
                                                        <div key={index} className="col-3 mt-3 pb-2 pt-2 scrollable-y">
                                                            <span>
                                                                {word + ' : ' + wordDictionary[word]}
                                                            </span>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </>
                                : <></>
                        }
                    </>
                    : <></>
            }
        </div >
    );
}

export default WordCounter;