import './admin-button.css';

function AdminButton({onClick, extraClass, children}) {

    const classes = `admin-button-overlay ${extraClass || ''}`
    return (
        <div className={classes} onClick={onClick}>
            <div className='admin-button'>
                {children}
            </div>
        </div>
    )
}

export default AdminButton;