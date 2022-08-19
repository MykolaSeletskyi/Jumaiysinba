import React, { Component } from 'react';
import styles from "./Footer.module.scss";
import FooterImages from "./FooterImages"

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
        <div className={styles.footer}>
        <div className={styles.footerInfo}>
            <FooterImages.logo className={styles.logo}/>
            <p className={styles.title}>Інноваційні хмарні або локально виконувані онлайн–інструменти, головними завданнями яких є зручність користувача та конфіденційність інформації.</p>
        </div>
        <div className={styles.footerContacts}>
            <span className={styles.label}>Контактна інформація</span>
            <div className={styles.contacts}>
                <a href="#" target="_blank" rel="noopener noreferrer"><FooterImages.instagramIcon/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FooterImages.twitterIcon/></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FooterImages.facebookIcon/></a>
            </div>
        </div>
        <div className={styles.footerPoliticy}>
            <a className={styles.footerPoliticyText} href="#" target="_blank" rel="noopener noreferrer">Умови обслуговування та Політика конфіденційності</a>
            <span className={styles.copyright}>&copy; 2022 Ju-baTools. Всі права захищені</span>
        </div>
    </div>
    );
  }
}