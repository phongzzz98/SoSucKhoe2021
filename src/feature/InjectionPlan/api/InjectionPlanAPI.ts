import { axiosInstance } from "../../../configs/axios";

export const getAllInjectRegis = async () => {
  const res = await axiosInstance.get<any>("/api/dktiem");
  return res.data.data;
};

export const getInjectPlanByCitizen = async(id:number) => {
  const res = await axiosInstance.get<any>(`/api/kehoachtiem/${id}`);
  return res.data.data;
}