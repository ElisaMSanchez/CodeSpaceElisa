import './admin-login.css';
import AdminOverlay from "../common/admin-overlay";
import AdminLoginForm from "./admin-login-form";

function AdminLogin({setToken}) {
    return (
        <AdminOverlay>
            <AdminLoginForm setToken={setToken}/>
        </AdminOverlay>
    );
}

export default AdminLogin;
