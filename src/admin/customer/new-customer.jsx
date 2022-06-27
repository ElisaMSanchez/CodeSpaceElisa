import './new-customer.css';
import {useState} from 'react';
import AdminButton from '../common/admin-button';
import handleOnChangeInput from '../../common/form/change-handler';
import AdminButtonLabel from '../common/admin-button-label';

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

    const handleOnSubmit = async (event) => {
        event.preventDefault();

/* TODO llamar al backend para que guarde*/

        if (customer) {
            setCustomer(emptyCustomer);
        }
    }

    return (
        <div className='new-customer'>
            <div className='new-customer-form'>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Nombre: </label>
                    <input type='text' required={true} name='name' className='new-customer-form-item-input' onChange={handleChange} value={customer.name}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Apellido 1: </label>
                    <input type='text' required={true} name='firstSurname' className='new-customer-form-item-input' onChange={handleChange} value={customer.firstSurname}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Apellido 2: </label>
                    <input type='text' name='lastSurname' className='new-customer-form-item-input' onChange={handleChange} value={customer.lastSurname}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Telefono: </label>
                    <input type='tel' required={true} name='phone' className='new-customer-form-item-input' onChange={handleChange} value={customer.phone}/>
                </div>
                <div className='new-customer-form-item'>
                    <label className='new-customer-form-item-label'>Email: </label>
                    <input type='email' required={true} name='email' className='new-customer-form-item-input' onChange={handleChange} value={customer.email}/>
                </div>
                <div className='new-customer-form-item observaciones'>
                    <label className='new-customer-form-item-label-observaciones'>Observaciones: </label>
                    <textarea name='comments' className='new-customer-form-item-input-observaciones' onChange={handleChange} value={customer.comments}/>
                </div>
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