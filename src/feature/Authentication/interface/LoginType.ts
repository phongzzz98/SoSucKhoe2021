export type ILogin = {
  username: string;
  password: string;
};
export interface IUserInfo {
  id_users: number;
  email: string;
  email_verified_at: string;
  role: string;
  password: string;
  remember_token: string;
  created_at: string;
  updated_at: string;
  //DVTiem
  iddonvitiem?: number;
  tendonvi?: string;
  city: string;
  district: string;
  wards: string;
  address: string;
  //Nguoi dan
  idnguoidan?: number,
  chung_minh_ND?: string,
  fullname?: string,
  birthday?: string,
  gender?: string,
  work?: string,
  Tien_su_benh_an?: string
}
export interface IAuthState {
  accessToken: null | string;
  role: string | null;
  uid: number;
  userInfo: IUserInfo
}
