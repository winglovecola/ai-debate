export enum Group {
  Members = 'Members',
  Staff = 'Staff',
  Influencers = 'Influencers',
  Charities = 'Charities',
  Admin = 'Admin',
  Super = 'Super',
}



export interface User {
  userId: string;
  userAttributes?: any;
  authToken: {
    accessToken?: any;
    idToken?: any;
  }
  errors: any;
  loginTime: number;
  loadSuccess: boolean;
}

export const UserDataDefault:User = {
  userId: '',

  userAttributes: {},
  authToken: {
    accessToken: '',
    idToken: '',
  },
  loadSuccess: false,
  loginTime: 0,
  errors: ''
}
