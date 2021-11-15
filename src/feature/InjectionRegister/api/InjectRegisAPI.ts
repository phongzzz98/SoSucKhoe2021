import { axiosInstance } from "../../../configs/axios";
import { IInjectRegisToSave } from "../interface/InjectRegisType";

export const getVaccineInfo = async () => {
  const res = await axiosInstance.get<any>("/api/vaccine");
  return res.data.data;
};

export const addInjectionRegister = async (data:IInjectRegisToSave) => {
  try {
    const res = await axiosInstance.post(`/api/dktiem`, {
      Ngay_Tiem: data.date,
      idnguoidan: data.idnguoidan,
      iddonvitiem: data.iddonvitiem,
      idvaccine: data.idvaccine
    });
    return res.data;
  } catch (error: any) {
    return error.res.data;
  }
};
