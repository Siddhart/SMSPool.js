var apiKey;

//Function START
function client(key) {
    apiKey = key;
}

async function requestURL(url) {
    const axios = require("axios");

    var result = "{}";
    await axios
        .get(
            url
        )
        .then((response) => {
            result = response.data;
        })
        .catch((err) => {
            console.log(err);
        });

    return result;
}

function generateURL(endpoint, params) {
    return endpoint.toString() + "?" + new URLSearchParams(params).toString();
}

function checkApiKey() {
    if (apiKey == null) {
        console.error("PLEASE ENTER YOUR API KEY!");
        return false;
    }
    return true;
}

//Function END

//Main START
async function getCountries() {
    return requestURL(generateURL("https://api.smspool.net/country/retrieve_all", {}));
};

async function getServices(country) {
    let params = {};

    if(country != null){
        params.country = country
    }

    return requestURL(generateURL("https://api.smspool.net/service/retrieve_all", params));
};

async function getBalance() {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/request/balance", { key: apiKey }));
    }

    return {};
}

async function getOrderHistory() {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/request/history", { key: apiKey }));

    }
    return {};
}

async function getActiveOrders() {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/request/active", { key: apiKey }));

    }
    return {};
}

//Main END

//SMS START
async function getSMSServicePrice(country, service) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/request/price", { key: apiKey, country: country, service: service }));
    }
    return {};
}

async function purchaseSMS(country, service, pool) {
    let params = { key: apiKey, country: country, service: service }

    if (pool != null) {
        params.pool = pool;
    }

    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/purchase/sms", params));
    }
    return {};
}

async function checkSMS(orderId) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/sms/check", { key: apiKey, orderid: orderId }));
    }
    return {};
}

async function resendSMS(orderId) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/sms/resend", { key: apiKey, orderid: orderId }));
    }
    return {};
}

async function cancelSMS(orderId) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/sms/cancel", { key: apiKey, orderid: orderId }));
    }
    return {};
}

async function archiveSMSOrders() {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/request/archive", { key: apiKey }));
    }
    return {};
}

//SMS END

//RENTALS START
async function getRentals(type) {
    let typeParam = type ? 1 : 0; // one-time = 0 | extendable = 1 (default)

    return requestURL(generateURL("https://api.smspool.net/rental/retrieve_all", { type: typeParam }));
}

async function purchaseRental(rentalID, days, service_id) {
    let params = { key: apiKey, id: rentalID, days: days }

    if (service_id != null) {
        params.service_id = service_id;
    }

    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/purchase/rental", params));
    }
    return {};
}

async function getRentalMessage(rental_code) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/rental/retrieve_messages", { key: apiKey, rental_code: rental_code }));
    }
    return {};
}

async function getRentalStatus(rental_code) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://smspool.net/api/rental/retrieve_status.php", { key: apiKey, rental_code: rental_code }));
    }
    return {};
}

async function refundRental(rental_code) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/rental/refund.php", { key: apiKey, rental_code: rental_code }));
    }
    return {};
}

async function extendRental(rental_code, days) {
    if (checkApiKey()) {
        return requestURL(generateURL("https://api.smspool.net/rental/extend.php", { key: apiKey, days: days, rental_code: rental_code }));
    }
    return {};
}

//RENTALS END

module.exports = {
    //main
    client: client,
    getCountries: getCountries,
    getServices: getServices,
    getBalance: getBalance,
    getOrderHistory: getOrderHistory,
    getActiveOrders: getActiveOrders,

    //sms
    getSMSServicePrice: getSMSServicePrice,
    purchaseSMS: purchaseSMS,
    checkSMS: checkSMS,
    resendSMS: resendSMS,
    cancelSMS: cancelSMS,
    archiveSMSOrders: archiveSMSOrders,

    //rentals
    getRentals: getRentals,
    purchaseRental: purchaseRental,
    getRentalMessage: getRentalMessage,
    getRentalStatus: getRentalStatus,
    refundRental: refundRental,
    extendRental: extendRental
}
