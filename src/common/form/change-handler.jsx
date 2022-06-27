function handleOnChangeInput(stateSetter) {

    return (event) => {
        event.preventDefault();

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        stateSetter(values => ({...values, [name]: value}));
    }
}

export default handleOnChangeInput;
