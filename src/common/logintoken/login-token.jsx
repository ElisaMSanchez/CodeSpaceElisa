import {useState} from 'react';

function useToken(tokenName) {
    const getToken = () => {
        const tokenString = sessionStorage.getItem(tokenName);
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem(tokenName, JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return [
        token,
        saveToken
    ];
}

export default useToken;
