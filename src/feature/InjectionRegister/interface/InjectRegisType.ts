export interface IVaccine {
  company: string;
  country: string;
  distance: number;
  idvaccine: number;
  name_vaccine: string;
  object: string;
  somui: number;
  type: string;
}

export interface IInjectRegisState {
  vaccineList: IVaccine[];
}

export interface IInjectRegisToSave {
  date: string;
  idnguoidan: number;
  iddonvitiem: number;
  idvaccine: number;
}
