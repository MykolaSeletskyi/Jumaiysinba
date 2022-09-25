import React, { Component } from 'react';
import styles from './DropDown.module.scss'
export interface IDropDownItem {
  Title: string,
  Value: any
}
export interface IDropDownProps {
  items: IDropDownItem[];
  className?: string;
  value?: IDropDownItem;
  hidden?: boolean;
  disabled?: boolean;
  onChange?:(item:IDropDownItem)=>void;
}
export interface IDropDownState {
  isOpen: boolean
}
export default class DropDown extends React.Component<IDropDownProps, IDropDownState> {
  state:IDropDownState={
    isOpen:false
  }
  onChange = (item: IDropDownItem) => {
    this.setState({isOpen:false});
    if(this.props.onChange!=undefined){
      this.props.onChange(item);
    }
  }
  onBtnClick = () => { 
    console.log(this.state.isOpen)
    this.setState({isOpen:!this.state.isOpen})
  }
  render() {
    let items: IDropDownItem[] = this.props.items;
    let hidden: boolean = this.props.hidden as boolean;
    let disabled: boolean = this.props.disabled as boolean;
    let defaultValue:string = "undefined";
    if(this.props.value == undefined && items.length > 0){
      defaultValue = items[0].Title
    }else if(this.props.value != undefined){
      defaultValue = (this.props.value?.Title as string);
    }
    let dropdownClassName = styles.dropdown + " " + this.props.className;
    if(this.state.isOpen){
      dropdownClassName = styles.dropdown + " " + styles.dropdownShow + " " + this.props.className;
    }
    return (
      <div className={dropdownClassName} hidden={hidden}>
        <button disabled={disabled} className={styles.dropbtn} style={{}} onClick={this.onBtnClick}>{defaultValue}
          <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.82415 6.38027C6.20651 6.73088 6.79349 6.73088 7.17585 6.38027L11.9669 1.98704C12.639 1.37072 12.203 0.25 11.291 0.25H1.70896C0.797032 0.25 0.360986 1.37072 1.03312 1.98704L5.82415 6.38027Z" fill="#282828" />
          </svg>
        </button>
          <div className={styles.dropdownItems}>
            {items.map((item: IDropDownItem, id) => (<span className={styles.span} key={id} onClick={() => this.onChange(item)}>{item.Title}</span>))}
          </div>
      </div>
    );
  }
}