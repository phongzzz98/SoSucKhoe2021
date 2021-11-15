export interface ICitizen {
  Tien_su_benh_an: string;
  address: string;
  birthday: string;
  city: string;
  chung_minh_ND: string;
  created_at: any;
  district: string;
  email: string;
  email_verified_at: any;
  fullname: string;
  gender: string;
  id_users: number;
  idnguoidan: number;
  password: string;
  remember_token: any;
  role: string;
  updated_at: any;
  wards: string;
  work: string;
}

export enum EGender {
  Male,
  Female,
}

export interface ICertiEditState {
  citizenList: ICitizen[];
  citizen: ICitizen
}
