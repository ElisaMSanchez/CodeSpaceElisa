import './summary.css';
import Customers from '../customer/customers';
import {useCallback, useContext, useEffect, useState} from 'react';
import Voucher from './voucher/voucher';
import {
    markOpenVoucher,
    closeVoucher,
    deleteLesson,
    fetchOpenVoucher,
    registerLesson,
    searchCustomers,
    updateLesson, findLessons
} from "../api";
import Lessons from "./lesson/lessons";
import {AdminOverlayContext, OverlayErrorType} from "../common/admin-overlay";

function Summary() {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [openVoucher, setOpenVoucher] = useState(null);
    const [lessons, setLessons] = useState(null);

    const {setOverlayConfig} = useContext(AdminOverlayContext);

    const errorCallback = useCallback(() =>setOverlayConfig({message: 'Hubo problemas contactando con el servidor, por favor pruebe otra vez mas tarde', OverlayErrorType}),
        [setOverlayConfig]);

    useEffect(() => {
        if (selectedCustomerId) {
            fetchOpenVoucher(selectedCustomerId, errorCallback)
                .then((openVoucher) => setOpenVoucher(openVoucher));

        }
    }, [selectedCustomerId, errorCallback]);

    useEffect(() => {
        if (openVoucher) {
            findLessons(openVoucher.customerId, openVoucher.id, errorCallback)
                .then((lessons) => setLessons(lessons));
        }
    }, [openVoucher, errorCallback]);

    const handleOnSearchCustomers = useCallback(async (searchText, callback) => {
            setSelectedCustomerId(null);
            callback(await searchCustomers(searchText, errorCallback) || []);
        }, [errorCallback]
    );

    const handleOnSelectCustomer = (id) => {
        setSelectedCustomerId(id);
    }

    const handleOnClickActivateVoucher = async () => {
        setOpenVoucher(await markOpenVoucher(selectedCustomerId, errorCallback));
    }

    const handleOnClickCloseVoucher = async (voucher) => {
        await closeVoucher(selectedCustomerId, voucher.id, errorCallback);

        setOpenVoucher(null);
    }

    const handleOnNewLesson = async (newLesson) => {
        await registerLesson(selectedCustomerId, openVoucher.id, newLesson, errorCallback);
        setLessons(await findLessons(selectedCustomerId, openVoucher.id, errorCallback));
    }

    const handleOnLessonUpdated = async (lessonUpdated) => {
        await updateLesson(selectedCustomerId, openVoucher.id, lessonUpdated, errorCallback);
        setLessons(await findLessons(selectedCustomerId, openVoucher.id, errorCallback));
    }

    const handleOnLessonDeleted = async (lessonDeleted) => {
        console.log(`Summary - Handle Lesson deleted: ${lessonDeleted.id}`);

        await deleteLesson(selectedCustomerId, openVoucher.id, lessonDeleted, errorCallback);
        setLessons(await findLessons(selectedCustomerId, openVoucher.id, errorCallback));
    }

    return (
        <div className='summary'>
            <div className='summary-customers'>
                <Customers onSearchCustomers={handleOnSearchCustomers} onSelectCustomer={handleOnSelectCustomer}/>
            </div>
            <div className='summary-active-voucher'>
                <Voucher openVoucher={openVoucher} lessons={lessons || []} onClickActivateVoucher={handleOnClickActivateVoucher}
                         onClickCloseVoucher={handleOnClickCloseVoucher}
                         display={selectedCustomerId !== null}/>
            </div>
            <div className='summary-lessons'>
                <Lessons lessons={lessons || []} display={openVoucher !== null}
                         onNewLesson={handleOnNewLesson} onLessonUpdated={handleOnLessonUpdated}
                         onLessonDeleted={handleOnLessonDeleted}/>
            </div>
        </div>
    )
}

export default Summary;