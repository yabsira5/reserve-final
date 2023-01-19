// import React from 'react';
// import { useLocation } from 'react-router-dom';
// // import TeleSignSDK from 'telesignsdk';
// var TeleSignSDK = require('telesignsdk');

// const sms =() =>{

// const customerId = "92DED352-6F94-4550-AA21-C98B115F5662";
// const apiKey = "+En16ab+jL1eZRwcP6UHdToqmw1+TY+uRsumfJlgdH3qJCAOWQ2knV/Kj8IlRSyAoMdkB+ZIRZGZz5+Jm2DUOQ==";
// const rest_endpoint = "https://rest-api.telesign.com";
// const timeout = 10*1000; // 10 secs

// const client = new TeleSignSDK( customerId,
// apiKey,
// rest_endpoint,
// timeout // optional
// // userAgent
// );



// const { state } = useLocation();

// const phoneNumber = state.Phone;
// const message = "Dear"+ state.Username +" You have booked a room for "+ state.Hotel + " hotel  to CheckIn"+ state.CheckIn +" and to "+ state.CheckOut + "For "+ state.NumAdults +" and for"+ state.Children +" children.Thank you for using our platform";
// const messageType = "ARN";

// console.log("## MessagingClient.message ##");

// function messageCallback(error, responseBody) {
// if (error === null) {
// console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
//     ` => code: ${responseBody["status"]["code"]}` +
//     `, description: ${responseBody["status"]["description"]}`);
// } else {
// console.error("Unable to send message. " + error);
// }
// }
// client.sms.message(messageCallback, phoneNumber, message, messageType);

// return(<div>hello</div>)
// }

// export default sms;