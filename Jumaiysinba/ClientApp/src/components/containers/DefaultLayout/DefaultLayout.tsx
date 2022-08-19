import { Outlet } from "react-router";
import HeaderMenu from "../Header/Header";
import Footer from "../Footer/Footer";


import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReCaptcha from "../../common/ReCaptcha";

import styles from "./DefaultLayout.module.scss"

const DefaultLayout = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        <div className="layout">
            <HeaderMenu />
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                <div className={styles.layout} style={{display: "flex", justifyContent: "center", backgroundColor:"#FAFAFA"}}>
                    {
                        !isAuth ? <ReCaptcha />
                            : <></>
                    }
                    <Outlet />
                </div>
                <Footer/>
            {/* <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer> */}
        </div>
    );
}

export default DefaultLayout;