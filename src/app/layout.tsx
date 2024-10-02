
//import { Amplify } from 'aws-amplify';
//import awsConfig from '../aws-exports';

//Amplify.configure(awsConfig);

import { AuthContextProvider } from '@/utility/authContext';

import type { Metadata } from "next";



import "./globals.css";
import '@aws-amplify/ui-react/styles.css';

//import './style/toast-style.css';



import Header from '@/components/header';
import Footer from '@/components/footer';



export const metadata: Metadata = {
  title: "AI Debate",
  description: "",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;

}>) {


  return (
      <AuthContextProvider>

          <html lang="en">
            <body className="flex flex-col flex-1 w-full h-full p-0 m-auto">
            
              <Header/>
              {children}
            </body>
          </html>

      </AuthContextProvider>
  );
}
