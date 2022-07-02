import './summary.css';
import Customers from '../customer/customers';
import {useCallback, useEffect, useState} from 'react';
import Voucher from './voucher/voucher';

function Summary() {

    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [activeVoucher, setActiveVoucher] = useState(null);

    useEffect(() => {
        if (selectedCustomerId) {
            // TODO Get the Active Voucher for the customer here.
            if (selectedCustomerId === '1') {
                setActiveVoucher({
                    id: `Voucher ${selectedCustomerId}`,
                    customerId: '1',
                    maxLessons: 5,
                    lessons: [{
                        id: `Lesson 1 - ${selectedCustomerId}`,
                        createdAt: '2021-12-01',
                        internalComment: 'This is an internal comment',
                        externalComment: 'This is an external comment'
                    }, {
                        id: `Lesson 2 - ${selectedCustomerId}`,
                        createdAt: '2021-12-15',
                        internalComment: 'This is another internal comment',
                        externalComment: 'This is another external comment'
                    }]
                })
            } else {
                setActiveVoucher(null)
            }
        }
    }, [selectedCustomerId]);

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

    const handleOnClickActivateVoucher = async () => {
        setActiveVoucher({
            id: `Voucher ${selectedCustomerId}`,
            customerId: String(selectedCustomerId),
            maxLessons: 5,
            currentLessons: 2
        });
    }

    const handleOnClickCloseVoucher = async (voucher) => {
        console.log(JSON.stringify(voucher))

        setActiveVoucher(null);
    }

    return (
        <div className='summary'>
            <div className='summary-customers'>
                <Customers onSearchCustomers={handleOnSearchCustomers} onSelectCustomer={handleOnSelectCustomer}/>
            </div>
            <div className='summary-active-voucher'>
                <Voucher activeVoucher={activeVoucher} onClickActivateVoucher={handleOnClickActivateVoucher}
                         onClickCloseVoucher={handleOnClickCloseVoucher}
                         display={selectedCustomerId !== null}/>
            </div>
            TODO
        </div>
    )
}

export default Summary;