import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import LogoutModal from "../../auth/Logout";

const HeaderMenu = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
        // <Menu theme="dark" mode="horizontal" className="px-5" defaultSelectedKeys={['0']} selectable={false}>
        //     <Menu.Item className="rounded" key="homepage">
        //         <Link className="text-decoration-none" to="/">Home page</Link>
        //     </Menu.Item>
        //     {isAuth ?
        //         <Menu.Item className="rounded" style={{ marginLeft: "auto" }} key="logout">
        //             <LogoutModal />
        //         </Menu.Item> :
        //         <>
        //             <Menu.Item className="rounded" style={{ marginLeft: "auto" }} key="login">
        //                 <Link className="text-decoration-none" to="/login">Login</Link>
        //             </Menu.Item>
        //             <Menu.Item className="rounded" key="register">
        //                 <Link className="text-decoration-none" to="/register">Register</Link>
        //             </Menu.Item>
        //         </>}
        // </Menu>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse " >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home page</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/camera-recorder">Camera recorder</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ScreenRecorder">Screen recorder</Link>
                    </li>
                </ul>
                <div className="navbar-collapse collapse order-3 dual-collapse2 ">
                    <ul className="navbar-nav ms-auto me-2">
                        {isAuth ?
                            <li className="nav-item">
                                <LogoutModal />
                            </li> :
                            <>
                                <li className="nav-item" >
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/register">Register</Link>
                                </li>
                            </>}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderMenu;