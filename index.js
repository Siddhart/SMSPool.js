// module.exports exports the function getContests as a promise and exposes it as a module.
// we can import an exported module by using require().
module.exports = async function getCountries() {
    const axios = require("axios"); // Importing the Axios module to make API requests
    var result;

    await axios // Making a GET request using axios and requesting information from the API
        .get(
            "https://smspool.net/api/country/retrieve_all"
        )
        .then((response) => { // If the GET request is successful, this block is executed
            return response; // The response of the API call is passed on to the next block
        })
        .then((contests) => { // In this block, we store the response data into a variable 'result'
            result = contests.data.objects;
        })
        .catch((err) => {
            console.log(err); // Error handler
        });
    return result; // The contest data is returned
};