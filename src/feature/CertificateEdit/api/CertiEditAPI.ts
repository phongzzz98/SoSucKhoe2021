import { axiosInstance } from "../../../configs/axios";

export const getAllCitizen = async () => {
  const res = await axiosInstance.get<any>("/api/nguoidan");
  return res.data.data;
};

export const getOneCitizen = async (id:number) => {
  const res = await axiosInstance.get<any>(`/api/nguoidan/${id}`);
  return res.data.data[0];
}
