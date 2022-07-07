import AdminMenu from './menu/admin-menu';
import './admin.css';
import {Outlet} from 'react-router-dom';
import AdminLogin from './login/admin-login';
import useToken from '../common/logintoken/login-token';

function Admin() {
    const adminMenuTabConfigs = [
        {path: '/admin', label: 'Resumen'},
        {path: '/admin/new-customer', label: 'Alta Cliente'}
    ];

    const [token, setToken, deleteToken] = useToken('admin-token');
    console.log(`token: ${token}`);

    return token ?
        displayAdmin(adminMenuTabConfigs, deleteToken)
        : displayAdminLogin(setToken);
}

function displayAdmin(adminMenuTabConfigs, deleteToken) {
    return (
        <div className='admin'>
            <div className='admin-menu-overlay'>
                <AdminMenu tabConfigs={adminMenuTabConfigs} onLogout={deleteToken}/>
            </div>
            <div className='admin-content-overlay'>
                <Outlet/>
            </div>
        </div>
    );
}

function displayAdminLogin(setToken) {
    return (
        <AdminLogin setToken={setToken}/>
    );
}

export default Admin;
