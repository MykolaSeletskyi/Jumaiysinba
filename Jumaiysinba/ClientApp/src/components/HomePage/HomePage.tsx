import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss'
import HomePageImages from "./HomePageImages"

export default class HomePage extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.HomePage}>
                <div className={styles.introductionContainer}>
                    <HomePageImages.IntroductionImage className={styles.introductionBackground} />
                    <div className={styles.introduction}>
                        <Link to="/">
                            <HomePageImages.Logo />
                        </Link>
                        <p className={styles.introductionText}>Інформація про сайт/цей інструмент, щоб знайти свої координати, адресу вулиці вашого місцезнаходження, перетворити адреси в координати (геокодування), перетворити координати в адреси (зворотне геокодування), поділитися місцезнаходженням тощо.</p>
                        <a href="#detailsContainer" className={styles.startBtn}>Почати</a>
                    </div>
                </div>
                <div id="detailsContainer" className={styles.detailsContainer}>
                    <div className={styles.detail}>
                        <div className={styles.detailBackground_1}>
                            <HomePageImages.DetailBackground_1 className={styles.Background} />
                        </div>
                        <HomePageImages.LocationPerson className={styles.Person} />
                        <div className={styles.detailsTextBlock}>
                            <h4 className={styles.detailTitle} style={{ color: "#FCC016" }}>Місцезнаходження</h4>
                            <p className={styles.detailDesc}>Категорія інструментів, які використуваються для того, щоб знайти свої координати, адресу вулиці вашого місцезнаходження, перетворити адресу в координати (геокодування), перетворити координати в адресу (зворотне геокодування), поділитися місцезнаходженням тощо.</p>
                        </div>
                        <div className={styles.detailBackground_2}>
                            <HomePageImages.DetailBackground_2 className={styles.Background} />
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.detailsTextBlock}>
                            <h4 className={styles.detailTitle} style={{ color: "#EE706C" }}>Аудіо</h4>
                            <p className={styles.detailDesc}>Категорія інструментів, які використовуються для того, щоб знайти записати звук з мікрофона, надсилати голосові повідомлення, зробити тест мікрофона на наявність помилок.</p>
                        </div>
                        <HomePageImages.AudioPerson className={styles.Person} />
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.detailBackground_3}>
                            <HomePageImages.DetailBackground_3 className={styles.Background} />
                        </div>
                        <HomePageImages.VideoPerson className={styles.Person} />
                        <div className={styles.detailsTextBlock}>
                            <h4 className={styles.detailTitle} style={{ color: "#FFC8E2" }}>Відео</h4>
                            <p className={styles.detailDesc}>Категорія інструментів, які використовуються для того, щоб записати відео із камер та екрану, зробити тест камери на наявність помилок.</p>
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.detailsTextBlock}>
                            <h4 className={styles.detailTitle} style={{ color: "#74C8F4" }}>Текст</h4>
                            <p className={styles.detailDesc}>Категорія інструментів, які використовуються для того, щоб знайти потрібні слова за властивостями, порахувати кількість символів або слів н.</p>
                        </div>
                        <HomePageImages.TextPerson className={styles.Person} />
                        <div className={styles.detailBackground_4}>
                            <HomePageImages.DetailBackground_4 className={styles.Background} />
                        </div>
                    </div>
                </div>
                <div className={styles.features}>
                    <h3>Особливості</h3>
                    <div className={styles.featuresContainer}>
                        <div className={styles.feature}>
                            <h4 className={styles.featureTitle}>Підтримуються всі пристрої</h4>
                            <p className={styles.featureDesc}>Моє Поточне Місцезнаходження – це онлайн-інструмент, який працює на будь-якому пристрої, який має веб-браузер, включаючи мобільні телефони, планшети та настільні комп’ютери.</p>
                        </div>
                        <div className={styles.feature}>
                            <h4 className={styles.featureTitle}>Без встановлення ПЗ</h4>
                            <p className={styles.featureDesc}>Цей інструмент працює у вашому веб-браузері, на вашому пристрої не встановлено програмне забезпечення</p>
                        </div>
                        <div className={styles.feature}>
                            <h4 className={styles.featureTitle}>Сейф</h4>
                            <p className={styles.featureDesc}>Не соромтеся надавати дозволи на доступ до необхідних ресурсів на вашому пристрої, ці ресурси не використовуються для інших цілей, крім зазначених</p>
                        </div>
                    </div>
                </div>
                <div className={styles.instruction}>
                    <h3>Інструкції</h3>
                    <div className={styles.instructionContainer}>
                        <div>
                            <p>Ми розробляємо безпечні онлайн-інструменти, які базуються на хмарі або виконуються локально на вашому пристрої. Захист вашої конфіденційності є однією з наших основних турбот при розробці наших інструментів.</p>
                            <p>Нашим онлайн-інструментам, які виконуються локально на вашому пристрої, не потрібно надсилати ваші дані (ваші файли, ваші аудіо- чи відеодані тощо) через Інтернет. Вся робота виконується локально самим браузером, що робить ці інструменти дуже швидкими та безпечними. Для цього ми використовуємо HTML5 і WebAssembly, форму коду, яка запускається самим браузером, що дозволяє нашим інструментам виконуватися з майже рідною швидкістю.</p>
                            <p>Ми наполегливо працюємо, щоб наші інструменти працювали локально на вашому пристрої, оскільки уникати надсилання даних через Інтернет є більш безпечним.</p>
                        </div>
                        <div>
                            <p>Однак іноді це не є оптимальним або можливим для інструментів, які, наприклад, вимагають високої потужності обробки, відображають карти з інформацією про ваше поточне місцезнаходження або дозволяють обмінюватися даними.</p>
                            <p>Наші хмарні онлайн-інструменти використовують HTTPS для шифрування ваших даних, надісланих і завантажених з нашої хмарної інфраструктури, і лише ви маєте доступ до своїх даних (якщо ви не вирішили поділитися ними). Це робить наші хмарні інструменти дуже безпечними.<br />Для отримання додаткової інформації див. наш Політика конфіденційності.</p>
                        </div>
                    </div>
                </div>
                <div className={styles.response}>
                    <div className={styles.detailBackground_5}>
                        <HomePageImages.DetailBackground_5 className={styles.Background} />
                    </div>
                    <h3>Залиште відгук</h3>
                    <div className={styles.responseForm}>
                        <div className={styles.groupUserData}>
                            <div className={styles.groupName}>
                                <label>Ім’я:</label>
                                <input />
                            </div>
                            <div className={styles.groupEmail}>
                                <label>Електронна адреса:</label>
                                <input />
                            </div>
                        </div>
                        <div className={styles.groupMessage}>
                            <label>Ваше повідомлення:</label>
                            <textarea />
                        </div>
                    </div>
                    <button className={styles.sendBtn}>Надіслати</button>
                    <div className={styles.detailBackground_6}>
                        <HomePageImages.DetailBackground_6 className={styles.Background} />
                    </div>
                </div>
            </div>
        );
    }
}