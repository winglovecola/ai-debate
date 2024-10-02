
'use client';

import React from 'react';
import { useAuthContext } from '@/utility/authContext';
import { useRouter } from 'next/navigation';

const UnauthorizedPage = () => {


  const router = useRouter();
  const { USER, setUSER } = useAuthContext();
  if (USER) {
      router.push('/'); 
  } 
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="text-lg">You do not have permission to access this page.</p>
    </div>
  );
};

export default UnauthorizedPage;
