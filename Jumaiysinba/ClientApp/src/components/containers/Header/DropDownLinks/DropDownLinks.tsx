import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './DropDownLinks.module.scss'
export interface IDropDownLink {
  To: string,
  Title: string,
  Icon: any
}
export interface IDropDownLinkProps {
  Links: IDropDownLink[],
  children: any;
  className?: string;
}
export default class DropDownLinks extends React.Component<IDropDownLinkProps, {}> {
  render() {
    let links = this.props.Links;
    return (
      <div className={styles.dropdown+" "+this.props.className}>
        <button className={styles.dropbtn} style={{}}>{this.props.children}
          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.82415 6.38027C6.20651 6.73088 6.79349 6.73088 7.17585 6.38027L11.9669 1.98704C12.639 1.37072 12.203 0.25 11.291 0.25H1.70896C0.797032 0.25 0.360986 1.37072 1.03312 1.98704L5.82415 6.38027Z" fill="#282828" />
          </svg>
        </button>
        <div className={styles.dropdownContent}>
          <div className={styles.dropdownItems}>
            {links.map((link, id) => (
              <Link key={link.Title + id} to={link.To} className={styles.link}>
                <link.Icon />
                {link.Title}
              </Link>))}
          </div>
        </div>
      </div>
    );
  }
}