import { useActions } from "../../../hooks/useActions";

const LogoutModal = () => {
    const { LogoutUser } = useActions();
    return (
        <div className="btn text-danger" onClick={LogoutUser} >
            Logout
        </div>
    );
}


export default LogoutModal;