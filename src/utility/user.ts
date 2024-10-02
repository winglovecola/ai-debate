'use client';

import { getCurrentUser, fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

import { User, UserDataDefault } from '../../shared/types/auth.types';

import CryptoJS from "react-native-crypto-js";


interface loadOptions {
  getAccount?: boolean;
  getUserKismetNumbers?: boolean;
  getUserAttributes?: boolean;
  getAuthToken?: boolean;
  updateUSER?: boolean;
  cognitoRelogin?: boolean; 
}


//userLoad ({ getAccount: true, getUserKismetNumbers: true, getUserAttributes: true, getAuthToken: true })
export async function authUserLoad (loadOptions: loadOptions, USER: User, setUSER: (user: User) => void): Promise<any> {


  //try to get user from local session storage
  let thisUserId, errors;
  const { getUserAttributes, getAuthToken, updateUSER, cognitoRelogin } = loadOptions;
  const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY;


  
  //MAKE SURE to use the ... to make a completely new copy of the object
  let userData:User = { ...UserDataDefault };  //import from shared/types/auth.types.ts   /UserDataDefault is the default user object
  let  currentUser: any;



  try { 
    //console.log(`Load user start`);
    //check user has been login using amplify function  
    currentUser = await getCurrentUser();  

    

    thisUserId = currentUser.userId;
    userData.userId = thisUserId;
  
    
    if (!thisUserId)
    {
      userData.errors = 'Login error';
      userData.loadSuccess = true;
      return userData;
    }

  } catch (err) {
    
    const userInfoRaw = localStorage.getItem('userInfo');
    let userInfo;
    if (userInfoRaw)
    {
      userInfo = JSON.parse (userInfoRaw);
    }
    
    ////console.log ('userInfo?.givenName: ' + userInfo?.givenName)
    if (userInfo?.givenName.length > 0) {
      userData.errors = 'Login required: Member';
      userData.loadSuccess = true;
    }
    else
    {
      ////console.log ('Login required ' + err);
      userData.errors = 'Login required: Not Member';
      userData.loadSuccess = true;
    }

    setUSER(userData);

    return userData;
  
  }



  if (cognitoRelogin !== true)
  {
    //CHECK IF USER IS ALREADY LOADED
    if (USER.loadSuccess) {
      return USER;
    }



    //LOAD USER DATA FROM SESSION STORAGE
    
    const userSession:any = localStorage.getItem('USER');

    if (userSession) 
    {
      const sessionData = JSON.parse(userSession); 

      
      const currentTime = new Date().getTime();

      // Calculate the timestamp for two days from now
      const twoDays = 2 * 24 * 60 * 60 * 1000; // 2 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      
      if (currentTime - sessionData.createTime < twoDays) {
        // Session will expire in two days

        try {
          const decryptedBytes = CryptoJS.AES.decrypt(sessionData.edata, AUTH_KEY || '');
          const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
          const sessionUser = JSON.parse(decryptedData);

          if (sessionUser && sessionUser.loadSuccess) {
            //console.log(`SESSION USER LOADED:` + JSON.stringify(sessionUser));

            if (updateUSER)
              setUSER(sessionUser);

            return sessionUser;
          }
        } catch (err) {

          //console.log('Error: ' + err);
          errors = {error: 'Failed to load user from session.'};
          userData.errors = errors.error;
        }

      }
    }

  }
  
  
  try {

    //GET USER ACCOUNT

    //GET USER ATTRIBUTES
    //caution: this will return all user attributes
    if (getUserAttributes) {
      const fetchedUserAttributes = await fetchUserAttributes();
      userData.userAttributes = fetchedUserAttributes;
    }
    

    //GET AUTH TOKENS
    if (getAuthToken)
    {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      userData.authToken.accessToken = accessToken;
      userData.authToken.idToken = idToken;
    }


    //finish loading
    userData.loadSuccess = true;
    userData.loginTime = new Date().getTime();

   

    //ENCRYPT USER DATA AND SAVE TO SESSION STORAGE
    if (!getAuthToken)
      userSessionSave (userData, setUSER);




    ////console.log(`thisUser: ${JSON.stringify(userData)}`);

    if (userData.loadSuccess) {
      if (updateUSER)
        setUSER(userData);
      
      return userData;
    }
    else
    {
      errors = {error: 'Failed to get user data'};
      userData.errors = errors.error;

      if (updateUSER)
        setUSER(userData);

      return userData;
    }
    
    
  } catch (err) {

    errors = {error: 'Failed to load user from database.'};
    userData.errors = errors.error;

    if (updateUSER)
      setUSER(userData);

    //console.log('ERROR: ' + JSON.stringify(err));
    return userData;
  }

}



export async function userSessionSave (userData:User, setUSER : (user: User) => void) {
  const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY;

  const userDataEncrypt = await CryptoJS.AES.encrypt(JSON.stringify(userData), AUTH_KEY || '').toString();

  const userDataSession = {edata: userDataEncrypt, createTime: userData.loginTime};

  localStorage.setItem('USER', JSON.stringify(userDataSession));

}


export async function userLoginCheck (router: any, USER: User, setUSER: (user: User) => void, mode: string = '')
{
  const updatedUser = await authUserLoad({ getUserAttributes: true, getAuthToken: false, updateUSER: true }, USER, setUSER);
      
  if (updatedUser.errors && updatedUser.errors !== '')
  {
    
    //console.log ('updatedUser.errors: ' + updatedUser.errors  )
    if (updatedUser.errors.indexOf ('Login required') !== -1) {
      
      //if (mode === 'ForceLogin')
      //  router.push('/login/google');
    }
    else
    {

    }
  }

}



//remove user from session storage
export function userLogout(setUSER: (user: User) => void) {


  localStorage.removeItem('USER');
  
  
  //console.log('userLogout:' + JSON.stringify(UserDataDefault));

  //reset to default user object
  setUSER({...UserDataDefault});
}

