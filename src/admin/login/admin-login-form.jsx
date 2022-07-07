import './admin-login.css';
import {useContext, useState} from 'react';
import AdminButton from '../common/admin-button';
import AdminButtonLabel from '../common/admin-button-label';
import handleOnChangeInput from '../../common/form/change-handler';
import {doLogin} from '../api';
import {AdminOverlayContext, OverlayErrorType} from "../common/admin-overlay";

function AdminLoginForm({setToken}) {
    const [login, setLogin] = useState({username: '', password: ''});
    const handleChange = handleOnChangeInput(setLogin);

    const {setOverlayConfig} = useContext(AdminOverlayContext);
    const errorCallback = (err) => {
        const message = err.status === 401 ? 'Usuario/Contraseña invalidos' : 'Hubo problemas contactando con el servidor, por favor pruebe otra vez mas tarde';
        setOverlayConfig({
            message: message,
            type: OverlayErrorType
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await doLogin(login, errorCallback);
        if (token) {
            setToken(token);
        }
    }
    const handleEnter = async (event) => {
        if (event.code === "Enter") {
            const token = await doLogin(login, errorCallback);
            if (token) {
                setToken(token);
            }
        }
    }

    return (
        <div className="login-wrapper">
            <h2 className=""> Por favor, identifíquese</h2>
            <label>
                <p>Usuario</p>
                <input type="text" name='username' onChange={handleChange} value={login.username}
                       onKeyPress={handleEnter}/>
            </label>
            <label>
                <p>Contraseña</p>
                <input type="password" name='password' onChange={handleChange} value={login.password}
                       onKeyPress={handleEnter}/>

            </label>
            <div className="button-login">
                <AdminButton onClick={handleSubmit}>
                    <AdminButtonLabel label='Entrar'/>
                </AdminButton>
            </div>
        </div>
    );
}

export default AdminLoginForm;