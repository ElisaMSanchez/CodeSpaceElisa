import './customers.css';
import {useEffect, useState} from 'react';

function Customers({onSearchCustomers, onSelectCustomer}) {

    const [searchText, setSearchText] = useState('');
    const [customers, setCustomers] = useState([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    useEffect(() => {
        onSearchCustomers(searchText, setCustomers);
    }, [onSearchCustomers, searchText]);

    const handleOnChangeSearchText = (event) => {
        setSearchText(event.target.value);
    }

    const handleOnClick = (event, id) => {
        event.preventDefault();

        setSelectedCustomerId(id);
        onSelectCustomer && onSelectCustomer(id);
    }

    return (
        <div className='customers'>
            <div className='customers-empty-start-block'/>
            <div className='customers-search'>
                <div className='customers-search-icon'>TODO</div>
                <input type='search' className='customers-search-input' value={searchText} onChange={handleOnChangeSearchText}/>
            </div>
            <div className='customers-table-overlay'>
                <table className='customers-table'>
                    <thead>
                    <tr className='customers-table-tr head'>
                        <th className='customers-table-th name'>Nombre Completo</th>
                        <th className='customers-table-th phone'>Teléfono</th>
                        <th className='customers-table-th email'>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customers.length > 0 ?
                            customers.map(customer => {
                                const trClassName = `customers-table-tr body ${selectedCustomerId === customer.id ? 'selected' : ''} `;

                                return (
                                    <tr key={customer.id} className={trClassName} onClick={(event) => handleOnClick(event, customer.id)}>
                                        <td className='customers-table-td name'>{customer.name} {customer.firstSurname} {customer.lastSurname}</td>
                                        <td className='customers-table-td phone'>{customer.phone}</td>
                                        <td className='customers-table-td email'>{customer.email}</td>
                                    </tr>
                                )
                            })
                            :
                            <tr className='customers-table-tr body'>
                                <td className='customers-table-td' colSpan={3}>
                                    Sin Clientes
                                </td>
                            </tr>
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customers;