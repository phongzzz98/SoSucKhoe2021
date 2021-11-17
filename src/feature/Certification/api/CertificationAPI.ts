import { axiosInstance } from "../../../configs/axios";

export const getHealthProfileByCitizen = async (id: number) => {
  const res = await axiosInstance.get<any>(`/api/hstc/${id}`);
  return res.data.data[0];
};

export const getCertificationByCitizen = async (idhosoBN: number) => {
  const res = await axiosInstance.get<any>(`/api/vaccine_dv_hs/${idhosoBN}`);
  return res.data.data;
};
