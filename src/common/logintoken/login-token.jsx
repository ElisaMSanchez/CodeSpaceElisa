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

    const deleteToken = () => {
        console.log("Deleting token");
        sessionStorage.removeItem(tokenName);
        setToken(null);
    };

    return [
        token,
        saveToken,
        deleteToken
    ];
}

export default useToken;
