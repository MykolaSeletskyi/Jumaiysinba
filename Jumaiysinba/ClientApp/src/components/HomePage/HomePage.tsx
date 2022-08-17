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
                    </div>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.detail}>
                        <div className={styles.detailBackground_1}>
                            <HomePageImages.DetailBackground_1 className={styles.Background} />
                        </div>
                        <HomePageImages.LocationPerson className={styles.Person}/>
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
                        <HomePageImages.AudioPerson className={styles.Person}/>
                    </div>
                    <div className={styles.detail}>
                        <HomePageImages.VideoPerson className={styles.Person}/>
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
                        <HomePageImages.TextPerson className={styles.Person}/>
                    </div>
                </div>
            </div>
        );
    }
}