import './new-customer.css';
import {useContext, useState} from 'react';
import AdminButton from '../common/admin-button';
import handleOnChangeInput from '../../common/form/change-handler';
import AdminButtonLabel from '../common/admin-button-label';
import {registerCustomer} from '../api';
import {AdminOverlayContext, OverlayErrorType, OverlayMessageType} from "../common/admin-overlay";

function NewCustomer() {
    const emptyCustomer = {
        name: '',
        firstSurname: '',
        lastSurname: '',
        email: '',
        phone: '',
        comments: ''
    }

    const [customer, setCustomer] = useState(emptyCustomer);
    const handleChange = handleOnChangeInput(setCustomer);

    const {setOverlayConfig} = useContext(AdminOverlayContext);
    const errorCallback = () => setOverlayConfig({
        message: 'Hubo problemas contactando con el servidor, por favor pruebe otra vez mas tarde',
        type: OverlayErrorType
    });

    const isCustomerIncomplete = (customer) => {
        return customer.name === ''
            || customer.firstSurname === ''
            || customer.lastSurname === ''
            || customer.email === ''
            || customer.phone === ''
            ;
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        if (isCustomerIncomplete(customer)) {
            setOverlayConfig({
                message: 'Por favor rellene todos los datos del cliente',
                type: OverlayErrorType
            })
        } else {
            const registeredCustomer = await registerCustomer(customer, errorCallback);

            if (registeredCustomer) {
                setCustomer(emptyCustomer);
                setOverlayConfig({message: 'Cliente dado de alta', type: OverlayMessageType});
            }
        }
    }

    return (
        <div className='new-customer'>
            <div className='new-customer-form'>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Nombre: </label>
                    <input type='text' required={true} name='name' onChange={handleChange} value={customer.name}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Apellido 1: </label>
                    <input type='text' required={true} name='firstSurname' onChange={handleChange}
                           value={customer.firstSurname}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Apellido 2: </label>
                    <input type='text' name='lastSurname' onChange={handleChange} value={customer.lastSurname}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Telefono: </label>
                    <input type='tel' required={true} name='phone' onChange={handleChange} value={customer.phone}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Email: </label>
                    <input type='email' required={true} name='email' onChange={handleChange} value={customer.email}/>
                </div>
                <div className='new-customer-form-item observaciones'>
                    <label className='new-customer-form-item-label-observaciones'>Observaciones: </label>
                    <textarea name='comments' className='new-customer-form-item-input-observaciones'
                              onChange={handleChange} value={customer.comments}/>
                </div>
            </div>
            <div>
                <div className='new-customer-form-item'>
                    <AdminButton onClick={handleOnSubmit} extraClass='new-customer-form-item-button'>
                        <AdminButtonLabel label='Alta Cliente'/>
                    </AdminButton>
                </div>
            </div>
        </div>
    );
}

export default NewCustomer;