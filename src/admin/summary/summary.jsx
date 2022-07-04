import './summary.css';
import Customers from '../customer/customers';
import {useCallback, useEffect, useState} from 'react';
import Voucher from './voucher/voucher';
import {activateVoucher, closeVoucher, fetchActiveVoucher, searchCustomers} from "../api";

function Summary() {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [activeVoucher, setActiveVoucher] = useState(null);

    const errorCallback = useCallback((err) => console.log(err),
        []);

    useEffect(() => {
        if (selectedCustomerId) {
            fetchActiveVoucher(selectedCustomerId, errorCallback)
                .then((activeVoucher) => setActiveVoucher(activeVoucher));

        }
    }, [selectedCustomerId, errorCallback]);

    const handleOnSearchCustomers = useCallback(async (searchText, callback) => {
            setSelectedCustomerId(null);
            callback(await searchCustomers(searchText, errorCallback) || []);
        }, [errorCallback]

    );

    const handleOnSelectCustomer = (id) => {
        setSelectedCustomerId(id);
    }

    const handleOnClickActivateVoucher = async () => {
        setActiveVoucher(await activateVoucher(selectedCustomerId, errorCallback));
    }

    const handleOnClickCloseVoucher = async (voucher) => {
        await closeVoucher(selectedCustomerId, voucher.id, errorCallback);

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