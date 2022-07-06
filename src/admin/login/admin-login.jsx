import './admin-login.css';
import {useCallback, useState} from 'react';
import AdminButton from '../common/admin-button';
import AdminButtonLabel from '../common/admin-button-label';
import handleOnChangeInput from '../../common/form/change-handler';
import {doLogin} from '../api';

function AdminLogin({setToken}) {
    const [login, setLogin] = useState({username: '', password: ''});
    const handleChange = handleOnChangeInput(setLogin);

    const errorCallback = (err) => console.log(err);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setToken(await doLogin(login, errorCallback));
    }
    const handleEnter = async (event) => {
        if (event.code === "Enter") {
            setToken(await doLogin(login, errorCallback));
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
                <input type="password" name='password' onChange={handleChange} value={login.password}  onKeyPress={handleEnter}/>

            </label>
            <div className="button-login">
                <AdminButton onClick={handleSubmit}>
                    <AdminButtonLabel label='Entrar'/>
                </AdminButton>
            </div>
        </div>
    );
}

export default AdminLogin;