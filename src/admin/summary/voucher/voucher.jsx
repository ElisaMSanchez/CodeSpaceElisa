import './voucher.css'
import AdminButton from '../../common/admin-button';
import AdminButtonLabel from '../../common/admin-button-label';

function Voucher({display, activeVoucher, onClickActivateVoucher, onClickCloseVoucher}) {

    const voucherClassName = `voucher ${display ? 'visible' : 'hidden'}`;
    const lessons = activeVoucher ? activeVoucher.lessons : [];
    const usedLessons = lessons ? lessons.length : 0;

    const handleOnClickActivateVoucher = (event) => {
        event.preventDefault();
        onClickActivateVoucher();
    }

    const handleOnClickCloseVoucher = (event) => {
        event.preventDefault();
        onClickCloseVoucher(activeVoucher);
    }

    return (
        <div className={voucherClassName}>
            {
                activeVoucher ?
                    <div className='voucher-status active'>
                        <label>
                            Clases disponibles en Bono:
                        </label>
                        <div className='voucher-status-lessons'>
                            {
                                Array(activeVoucher.maxLessons).fill().map((val, index) => {
                                    const voucherLessonClass = `voucher-status-lesson ${index < usedLessons ? 'used' : 'free'}`;

                                    return (
                                        <div key={String(index)} className={voucherLessonClass}/>
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

export default Voucher;