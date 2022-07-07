import './customers.css';
import {useEffect, useState} from 'react';
import {FaSearch} from "react-icons/fa";

function Customers({onSearchCustomers, onSelectCustomer}) {

    const [searchText, setSearchText] = useState('');
    const [customers, setCustomers] = useState([]);
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);

    useEffect(() => {
        onSearchCustomers(searchText, setCustomers);
    }, [onSearchCustomers, searchText]);

    const handleOnChangeSearchText = (event) => {
        setSelectedCustomerId(null);
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
                <div className='customers-search-icon'><FaSearch className="customers-search-icon"/></div>
                <input type='search' className='customers-search-input' value={searchText} placeholder={"insertar..."}
                       onChange={handleOnChangeSearchText}/>
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
                            customers.map((customer, i) => {
                                const trOddEven = i % 2 === 0 ? 'customers-table-tr-white' : 'customers-table-tr-green';
                                const trClassName = `customers-table-tr body ${trOddEven} ${selectedCustomerId === customer.id ? 'selected' : ''} `;

                                return (
                                    <tr key={customer.id} className={trClassName}
                                        onClick={(event) => handleOnClick(event, customer.id)}>
                                        <td className='customers-table-td name'>{customer.name} {customer.firstSurname} {customer.lastSurname}</td>
                                        <td className='customers-table-td phone'>{customer.phone}</td>
                                        <td className='customers-table-td email'>{customer.email}</td>
                                    </tr>
                                )
                            })
                            :
                            <tr className='customers-table-tr body empty'>
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