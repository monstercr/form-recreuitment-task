export interface LoginRequestData {
    data: {
      attributes: Attributes
    }
  }
  
  export interface Attributes {
    email: string;
    password: string;
  }