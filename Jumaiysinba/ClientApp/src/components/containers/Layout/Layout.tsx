import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import ReCaptcha from "../../common/ReCaptcha";
import styles from "./Layout.module.scss"

const Layout = () => {
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
        else setAuthLocation(false);
        if (pathname === "/") {
            setRootLocation(true);
        }
        else setRootLocation(false);
    }, [location.pathname])

    return (
        <>
            {!authLocation && <Header />}
            <div className={styles.layout}>
                {!isAuth && <ReCaptcha />}
                <Outlet />
            </div>
            {!authLocation && <Footer />}
        </>
    );
}

export default Layout;