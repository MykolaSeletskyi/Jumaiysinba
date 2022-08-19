import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import LogoutModal from "../../auth/Logout";

const HeaderMenu = () => {
    const { isAuth } = useTypedSelector(state => state.auth);
    return (
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
                    <li className="nav-item">
                        <Link className="nav-link" to="/microphone">Microphone</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/speaker-test">Spk-test</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/word-counter">Word counter</Link>
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