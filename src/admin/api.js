const pathHost = "http://localhost:3001"

export function to(promise) {
    return promise.then(response => {
        return response.ok ? [null, response] : [response]
    })
        .catch(err => [err]);
}

async function extractBody(data) {
    const body = await data.text();
    return body ? JSON.parse(body) : null;
}

export async function registerCustomer(customer, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer`, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function searchCustomers(searchText, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer?search=${searchText}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
    ));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function fetchOpenVoucher(customerId, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/active`, {
        method: 'GET',
        headers: {
            'Accepted': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function markOpenVoucher(customerId, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/open`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function closeVoucher(customerId, voucherId, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/${voucherId}/closed`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}


//TODO metodo para llamar al backend para buscar lessons

export async function findLessons(customerId, voucherId, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/${voucherId}/lesson`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }));
    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }

}

export async function registerLesson(customerId, voucherId, lesson, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/${voucherId}/lesson`, {
        method: 'POST',
        body: JSON.stringify(lesson),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function updateLesson(customerId, voucherId, lesson, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/${voucherId}/lesson/${lesson.id}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function deleteLesson(customerId, voucherId, lesson, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/customer/${customerId}/voucher/${voucherId}/lesson/${lesson.id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}

export async function doLogin(login, errorCallback) {
    const [err, data] = await to(fetch(`${pathHost}/login`, {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }));

    if (data) {
        return extractBody(data);
    } else {
        errorCallback(err);
        return null;
    }
}
