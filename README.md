# SMSPool.js
Unofficial API wrapper for [SMSPool.net](https://www.smspool.net/). With this wrapper you are able to call all endpoints with functions.  
[Join the SMSPool.net Discord server](https://discord.gg/Rcb526SEFw).
<br>
<br>
## Table Of Contents
- [SMSPool.net Documentation](https://github.com/Siddhart/SMSPool.js/edit/main/README.md#smspoolnet-api-documentation)
- [Getting Started](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getting-started)
- [Main Documentation](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#main-documentation)
    - [client()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#client)
    - [getCountries()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getcountries)
    - [getServices()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getservices)
    - [getCountryServices(country)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getcountryservicescountry)
    - [getBalance()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getbalance)
    - [getOrderHistory()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getorderhistory)
    - [getActiveOrders()](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getactiveorders)
- [SMS Documentation](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#sms-documentation)
    - [getSMSServicePrice(country, service)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getsmsservicepricecountry-service)
    - [purchaseSMS(country, service, pool)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#purchasesmscountry-service-poolnot-required)
    - [checkSMS(orderID)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#checksmsorderid)
    - [resendSMS(orderID)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#resendsmsorderid)
    - [cancelSMS(orderID)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#cancelsmsorderid)
    - [archiveSMSOrders(orderID)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#archivesmsordersorderid)
- [Rentals Documentation](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#sms-documentation)
    - [getRentals(type)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getrentalstype)
    - [purchaseRental(rentalID, days, service_id)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#purchaserentalrentalid-days-service_id)
    - [getRentalMessage(rental_code)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getrentalmessagerental_code)
    - [getRentalStatus(rental_code)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#getrentalstatusrental_code)
    - [refundRental(rental_code)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#refundrentalrental_code)
    - [extendRental(rental_code, days)](https://github.com/Siddhart/SMSPool.js/blob/main/README.md#extendrentalrental_code-days)  
<br>

## SMSpool.net API Documentation
Checkout the official API documentation here [https://www.smspool.net/article/how-to-use-the-smspool-api](https://www.smspool.net/article/how-to-use-the-smspool-api#).
<br>  
## Getting Started
To get started you have to install the smspool npm package
```
npm install smspool.js
```

After that we can import smspool.js
``` javascript
const smspool = require("./index");
smspool.client("<api-key>");

(async function() {
    let result = await smspool.getBalance()
    console.log(result);
}())
```
<br>

# Main Documentation

### client()
To assign an api key to the client use the client() method.
``` javascript
smspool.client("<your-api-key>");
```
[Copy your api key at the botom of the page](https://www.smspool.net/my/settings)

---

### getCountries()
Returns a list of Countries.

Response:
```json
[
  {
    "ID": "1",
    "name": "United States",
    "region": "Americas"
  },
  {
    "ID": "2",
    "name": "United Kingdom",
    "region": "Europe"
  },
  {
    "ID": "3",
    "name": "Netherlands",
    "region": "Europe"
  },
]
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#country_endpoint)  

---

### getServices()
Returns a list of all services.

Response:
```json
[
  {
    "ID": "1",
    "name": "service1"
  },
  {
    "ID": "2",
    "name": "service2"
  },
  {
    "ID": "3",
    "name": "service3"
  },
]
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#service_endpoint)  

---

### getCountryServices(country)
Returns a list of all the services for a specific country.  
`country` = Use either the country number or country code required to retrieve services by country.

Response:
```json
[
  {
    "ID": "1",
    "name": "service1"
  },
  {
    "ID": "2",
    "name": "service2"
  },
  {
    "ID": "3",
    "name": "service3"
  },
]
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#service_endpoint)  

---

### getBalance()
Returns the balance of the user.  
API Key required!

Response:
```json
{
  "balance": "1.00"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#balance_endpoint)  

---

### getOrderHistory()
Returns a list of all orders.  
API Key required!  

[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#order_history_endpoint)  
---

### getActiveOrders()
Returns a list of all active orders.  
API Key required!

Response:
```json
{
   "timestamp":"2022-05-24 21:20:07",
   "order_code":"ABCDEFGH",
   "phonenumber":"123456789",
   "code":"0",
   "full_code":"0",
   "short_name":"US",
   "service":"Service",
   "status":"pending",
   "expiry":"1653420607"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#active_orders_endpoint)  

<br>

# SMS Documentation

### getSMSServicePrice(country, service)
Returns the price of a specific service.  
API Key required!

`country` = The country code/ID that you can retrieve from the country endpoint.  
`service` = The service ID/name that you can retrieve from the service endpoint.

Response:
```json
{
   "timestamp":"2022-05-24 21:20:07",
   "order_code":"ABCDEFGH",
   "phonenumber":"123456789",
   "code":"0",
   "full_code":"0",
   "short_name":"US",
   "service":"Service",
   "status":"pending",
   "expiry":"1653420607"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#price_endpoint)  

---

### purchaseSMS(country, service, pool(not required))
Order a number.  
API Key required!

`country` = The country code/ID that you can retrieve from the country endpoint.  
`service` = The service ID/name that you can retrieve from the service endpoint.  
`pool` = The pool you'd like to order from is not required, in case it's empty it'll automatically select a suitable pool. Pools can be selected by number or by name (for example Alpha).

Response:
```json
{
   "success":1,
   "number":"123456789",
   "order_id":"ABCDEFG",
   "country":"United States",
   "service":"Service",
   "pool":5,
   "expires_in":599,
   "message":""
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#order_sms_endpoint)  

---

### checkSMS(orderID)
View sms order details.  
API Key required!  

`orderID` = The order_id you received from the Order SMS endpoint.

Response:
```json
{
  "status": 3,
  "sms": "00000",
  "full_sms": "full SMS"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#check_sms_endpoint)  

---

### resendSMS(orderID)
Resend code to number.  
API Key required!  

`orderID` = The order_id you received from the Order SMS endpoint.

Response:
```json
{
  "success":1,
  "message":"Number has been requested again",
  "resend":0
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#resend_sms_endpoint)  

---

### cancelSMS(orderID)
Cancel an SMS order.  
API Key required!  

`orderID` = The order_id you received from the Order SMS endpoint.

Response:
```json
{
  "success": 1
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#cancel_sms_endpoint)  

---

### archiveSMSOrders(orderID)
Archive all SMS orders.
API Key required!  

`orderID` = The order_id you received from the Order SMS endpoint.

Response:
```json
{
   "success":1,
   "message":"All your inactive orders have been archived."
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#archive_sms_endpoint)  

<br>

# Rentals Documentation

### getRentals(type)
Archive all SMS orders.  

`type` = true/false  
true = Extendable  
false = one-time  

Response:
```json
{
   "0":{
      "name":"United States",
      "region":"Americas",
      "pricing":"{\"7\":18,\"14\":25,\"30\":30}"
   }
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#retrieve_rentals_endpoint)  

---

### purchaseRental(rentalID, days, service_id)
Purchase a rental.  
API Key required!  

`rentalID` = The rental ID was retrieved from the "Retrieve all rentals" endpoint.  
`days` = The number of days you'd like to rent for.  
`service_id` = Specify a service ID to only purchase a line for that service and get 50% off. Only works for US extendable rentals.  

Response:
```json
{
   "success":1,
   "message":"",
   "phonenumber":"123456789",
   "days":30,
   "rental_code":"ABCDEFG",
   "expiry":"1653758381"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#order_rental_endpoint)  

---

### getRentalMessage(rental_code)
Retrieve rental message.  
API Key required!  

`rental_code` = The retrieved rental code from the `Order rental` endpoint.  

Response:
```json
{
   "success":1,
   "messages":{
      "0":{
         "ID":6,
         "sender":null,
         "message":"Message 1",
         "timestamp":"11 May 2022 18:39:54"
      },
      "1":{
         "ID":6,
         "sender":null,
         "message":"Message 2",
         "timestamp":"11 May 2022 01:11:35"
      }
   },
   "source":"6"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#rental_messages_endpoint)  

---

### getRentalStatus(rental_code)
Get the status of a rental.  
API Key required!  

`rental_code` = The retrieved rental code from the "Order rental" endpoint.  

Response:
```json
{
   "success":1,
   "status":{
      "expiry":1654495533,
      "available":1,
      "phonenumber":"123456789",
      "activeFor":90
   }
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#retrieve_rental_status_endpoint)  

---

### refundRental(rental_code)
Refund a rental.  
API Key required!  

`rental_code` = The retrieved rental code from the `Order rental` endpoint.  

Response:
```json
{
   "success":1,
   "message":"Your rental has been refunded!"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#refund_rental_endpoint)  

---

### extendRental(rental_code, days)
Refund a rental.  
API Key required!  

`rental_code` = The retrieved rental code from the `Order rental` endpoint.  
`days` = The amount of days you'd like to extend it with.  

Response:
```json
{
   "success":1,
   "message":"Your rental has been succesfully extended!"
}
```
[Checkout the official documentation](https://www.smspool.net/article/how-to-use-the-smspool-api#extend_rental_endpoint)  
