import { Outlet, useLocation } from "react-router";
import HeaderMenu from "../Header/Header";
import Footer from "../Footer/Footer";


import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReCaptcha from "../../common/ReCaptcha";

import styles from "./DefaultLayout.module.scss"
import { useEffect, useState } from "react";

const DefaultLayout = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    const [authLocation, setAuthLocation] = useState<boolean>(false);
    const [rootLocation, setRootLocation] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        let pathname: string = location.pathname;
        if (pathname === "/register" || pathname === "/login") {
            setAuthLocation(true);
            setRootLocation(true);
        }
        else setAuthLocation(false) ;
        if (pathname === "/") {
            setRootLocation(true);
        }
        else setRootLocation(false);
    }, [location.pathname])
    
    return (
        <>
            { !authLocation && <HeaderMenu/>}
            <div className={styles.layout}>
                {!isAuth && <ReCaptcha/>}
                <Outlet />
            </div>
            { !authLocation && <Footer/>}
        </>
    );
}

export default DefaultLayout;