'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';

import Button from '@/components/ui/Button';

import { Amplify } from '@/utility/aws/amplifyInit';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { authUserLoad } from '@/utility/user';
import { useAuthContext } from '@/utility/authContext';
import { useRouter } from 'next/navigation';

export function Header({ signOut, user }: WithAuthenticatorProps) {
  
  
  const router = useRouter();
  const { USER, setUSER } = useAuthContext();
  const [userLoaded, setUuserLoaded] = useState(false);

  const memoizedFetchCurrentUser = useMemo(() => fetchCurrentUser, []);

  useEffect(() => {
  
    if (Amplify) {
      memoizedFetchCurrentUser();
    }
  }
  , [USER.userId, memoizedFetchCurrentUser]);

  

  if (!Amplify || USER.userId.length === 0) { // Check if Amplify is available
    return;
  }
  

  async function userSignout() {
    
    if (confirm('Make sure save your changes before leave the page. Are you sure you want to leave?')) {
      if (signOut)
        signOut();
    }
  }

  async function goHome() {
    if (confirm('Make sure save your changes before leave the page. Are you sure you want to leave?')) {
      console.log ('gohome')
      //setTimeout  (function() {router.push('/');}, 20);
      
    }
  }

  async function fetchCurrentUser() {
     
    if (userLoaded)
    {
      await authUserLoad ({ getUserAttributes: true, getAuthToken: false, updateUSER: true, cognitoRelogin: false }, USER, setUSER);
    }
    else
    {
      await authUserLoad ({ getUserAttributes: true, getAuthToken: false, updateUSER: true, cognitoRelogin: true }, USER, setUSER);
      setUuserLoaded(true);
    }
      
  }

  //console.log('THIS USER: ', USER.account.userGroups.includes('Super'));

  if (!USER) {
      router.push('/unauthorized'); 
  } else {
    // User is either Admin or Super
  }
  //console.log('USER: ', JSON.stringify(USER)  );
  

  return <header className='bg-white z-50'>
    
    
    <div className='
      h-20
      flex items-center justify-between py-1 px-4
      shadow-md
    '>


      
      <Link href='#' onClick={goHome} >
        <span>AI DEBATE</span>
      </Link>
      {user && <Button
        variant='SECONDARY'
        onClick={userSignout}
        className='font-normal text-neutral-800 p-5'
      >
        Logout
      </Button>}
    </div>
  </header>
}

export default withAuthenticator(Header);
