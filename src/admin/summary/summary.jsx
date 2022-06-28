import './summary.css';
import Customers from '../customer/customers';
import {useCallback, useState} from 'react';

function Summary() {

    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    const handleOnSearchCustomers = useCallback(async (searchText, callback) => {
        console.log("Cadena de busqueda: " + searchText);
        callback([
            {
                id: '1',
                name: 'Joaquin',
                firstSurname: 'Montesinos',
                lastSurname: 'Zamarra',
                phone: '+34 676883404',
                email: 'zurvarian@gmail.com'
            },
            {
                id: '2',
                name: 'Elisa Maria',
                firstSurname: 'Sanchez',
                lastSurname: 'Perez',
                phone: '+34 636843673',
                email: 'emsp.star@gmail.com'
            },
            {
                id: '3',
                name: 'Virginia',
                firstSurname: 'Reguero',
                lastSurname: 'Garcia',
                phone: '+34 635410670',
                email: 'vreguerogarcia@gmail.com'
            },
            {
                id: '4',
                name: 'Jesus Christ',
                firstSurname: 'Nazaret',
                lastSurname: '',
                phone: '+34 600000000',
                email: 'jc@gmail.com'
            },
            {
                id: '5',
                name: 'Tony',
                firstSurname: 'Stark',
                lastSurname: '',
                phone: '+34 666696969',
                email: 'ellisto@gmail.com'
            }
        ]);
    }, []);

    const handleOnSelectCustomer = (id) => {
        console.log("Cliente seleccinado; " + id);
        setSelectedCustomerId(id);
    }

    return (
        <div className='summary'>
            <div className='summary-customers'>
                <Customers onSearchCustomers={handleOnSearchCustomers} onSelectCustomer={handleOnSelectCustomer}/>
            </div>
            TODO
        </div>
    )
}

export default Summary;