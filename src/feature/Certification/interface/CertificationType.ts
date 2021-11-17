export interface IHealthProfile {
  idhosoBN: number;
  Tso_mui_tiem: number;
  idnguoidan: number;
  created_at: any;
  updated_at: any;
  chung_minh_ND: string;
  fullname: string;
  birthday: string;
  gender: string;
  city: string;
  district: string;
  wards: string;
  address: string;
  work: string;
  Tien_su_benh_an: string;
  id_users: number;
}

export interface ICertification {
  idVacHoSoDonVi: number;
  ngay_gio: string;
  mui_so: number;
  idvaccine: number;
  idhosoBN: number;
  iddonvitiem: number;
  created_at: string;
  updated_at: string;
  name_vaccine: string;
  country: string;
  company: string;
  type: string;
  object: string;
  somui: number;
  distance: number;
  Tso_mui_tiem: number;
  idnguoidan: number;
  tendonvi: string;
  city: string;
  district: string;
  wards: string;
  address: string;
  id_users: number;
}

export interface ICertificationState {
  userHealthProfile: IHealthProfile;
  userCertification: ICertification[]
}
