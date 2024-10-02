import CryptoJS from "react-native-crypto-js";
import { generateClient } from 'aws-amplify/api';

const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY;
const SERVICE_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;

let authPayload = '';


export async function debateUpdate (payloadData: any = {}) {
  

  try { 

    const expirationTimeInSeconds = Math.floor(Date.now() / 1000) + 500; // Set expiration time to 1 min from now


    // The payload of the token
    const payload = {
      SERVICE_KEY: SERVICE_KEY,
      exp: expirationTimeInSeconds,
      ...payloadData
    };

    const payloadStr = JSON.stringify(payload);
    
    authPayload = await CryptoJS.AES.encrypt(payloadStr, AUTH_KEY || '').toString();

 
    const requestBody = {
      payload: authPayload, // Include the new parameter
    };
    

    let apiUrl = '';
    if (payloadData.action === 'save')
    {
      apiUrl = 'https://bri3a0cz64.execute-api.ca-central-1.amazonaws.com/prod/debate-save';
    }
    else if (payloadData.action === 'topicList')
    {
      apiUrl = 'https://bri3a0cz64.execute-api.ca-central-1.amazonaws.com/prod/debate-topic-list';
    }
    else if (payloadData.action === 'loadDebateInteractions')
    {
      apiUrl = 'https://bri3a0cz64.execute-api.ca-central-1.amazonaws.com/prod/debate-interactions-load';
    }


    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
          'Content-Type': 'application/json',
      }
    }); 



    if (response.ok) {
      // Handle success
      //console.log('SMS sent');

      const responseRes: any = await response.json();

      return { responseRes };

    } else {
      // Handle error
      console.error('Error:', response.status, response.statusText);

      return {success: false};
    }


  } catch (error: any) {
    console.error('Error verifying user:', error.message);

    return {success: false};
  } 


};


