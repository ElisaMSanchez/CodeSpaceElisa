import './admin-button-label.css';

function AdminButtonLabel({label, extraClass}) {

    const classes = `admin-button-label ${extraClass || ''}`
    return (
        <label className={classes}>
            {label}
        </label>
    )
}

export default AdminButtonLabel;