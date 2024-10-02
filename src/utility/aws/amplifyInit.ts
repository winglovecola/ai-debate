const AUTH_KEY = process.env.NEXT_PUBLIC_AUTH_KEY;


const AWS_CONFIGURATION = JSON.parse (process.env.NEXT_PUBLIC_AWS_CONFIGURATION || '{}');
import { Amplify } from 'aws-amplify';
//import awsConfig from '../../aws-exports.js';

Amplify.configure(AWS_CONFIGURATION);

export { AUTH_KEY, Amplify };