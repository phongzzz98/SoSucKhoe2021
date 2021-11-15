export interface IInjectRegis {
  iddktiem: number;
  Ngay_Tiem: string;
  idnguoidan: number;
  iddonvitiem: number;
  idkehoachtiem: number;
  idvaccine: number;
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
  ngay_gio: Date;
}
export interface IInjectPlanByCitizen {
  idkehoachtiem: number;
  Ngay_Tiemkh: string;
  gio_Tiem: string;
  iddonvitiem: number;
  idnguoidan: number;
  iddktiem: number;
  created_at: any;
  updated_at: any;
  Ngay_Tiem: string;
  idvaccine: number;
  tendonvi: string;
  city: string;
  district: string;
  wards: string;
  address: string;
  id_users: number;
  chung_minh_ND: string;
  fullname: string;
  birthday: string;
  gender: string;
  work: string;
  Tien_su_benh_an: string;
}
export interface IInjectPlanState {
  injectRegisList: IInjectRegis[];
  injectPlanByCitizen: IInjectPlanByCitizen[]
}
