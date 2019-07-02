export interface IUser {
firstname: string;
lastname: string;
email: string;
//role:String;
cma: number;
phone: number;
address: {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string
};
}
