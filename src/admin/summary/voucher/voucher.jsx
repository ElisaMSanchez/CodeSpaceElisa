import './voucher.css'
import AdminButton from '../../common/admin-button';
import AdminButtonLabel from '../../common/admin-button-label';
import {FaPaw} from "react-icons/fa";

export default function Voucher({display, openVoucher, lessons, onClickActivateVoucher, onClickCloseVoucher}) {

    const voucherClassName = `voucher ${display ? 'visible' : 'hidden'}`;
    const usedLessons = lessons.length;

    const handleOnClickActivateVoucher = (event) => {
        event.preventDefault();
        onClickActivateVoucher();
    }

    const handleOnClickCloseVoucher = (event) => {
        event.preventDefault();
        onClickCloseVoucher(openVoucher);
    }


    return (
        <div className={voucherClassName}>
            {

                openVoucher ?
                    <div className='voucher-status active'>
                        <label>
                            Clases disponibles en Bono:
                        </label>
                        <div className='voucher-status-lessons' >
                            {
                                Array(openVoucher.maxLessons).fill().map((val, index) => {
                                    const voucherLessonClass = `voucher-status-lesson ${index < usedLessons ? 'used' : 'free'}`;

                                    return (
                                        <FaPaw key={String(index)} className={voucherLessonClass}/>
                                    );
                                })
                            }
                        </div>
                        <div className='voucher-status-close'>
                            <AdminButton onClick={handleOnClickCloseVoucher} extraClass='voucher-status-close-button'>
                                <AdminButtonLabel label='Cerrar Bono'/>
                            </AdminButton>
                        </div>
                    </div>
                    :
                    <div className='voucher-status inactive'>
                        <AdminButton onClick={handleOnClickActivateVoucher} extraClass='voucher-status-activate-button'>
                            <AdminButtonLabel label='Activar Bono'/>
                        </AdminButton>
                    </div>
            }
        </div>
    )
}

