import { axiosInstance } from "../../../configs/axios";

export const getAllInjectRegis = async () => {
    const res = await axiosInstance.get<any>("/api/dktiem");
    return res.data.data;
  };