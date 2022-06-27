import './admin-login.css';
import {useState} from 'react';
import AdminButton from '../common/admin-button';
import AdminButtonLabel from '../common/admin-button-label';
import handleOnChangeInput from '../../common/form/change-handler';

function AdminLogin({setToken}) {
    const [login, setLogin] = useState({username: '', password: ''});
    const handleChange = handleOnChangeInput(setLogin);

    const handleSubmit = (event) => {
        event.preventDefault();
        setToken({"token": "test"});
    }

    return (
        <div className="login-wrapper">
            <h2>Por favor, identifíquese</h2>
            <label>
                <p>Usuario</p>
                <input type="text" name='username' onChange={handleChange} value={login.username}/>
            </label>
            <label>
                <p>Contraseña</p>
                <input type="password" name='password' onChange={handleChange} value={login.password}/>
            </label>
            <div>
                <AdminButton onClick={handleSubmit}>
                    <AdminButtonLabel label='Entrar'/>
                </AdminButton>
            </div>
        </div>
    );
}

export default AdminLogin;