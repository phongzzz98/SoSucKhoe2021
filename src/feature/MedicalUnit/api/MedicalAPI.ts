import { axiosInstance } from "../../../configs/axios";

export const getAllUnit = async () => {
    const res = await axiosInstance.get<any>("/api/dvtiemchung");
    return res.data.data;
}

export const getOneUnit = async (id: number) => {
    const res = await axiosInstance.get<any>(`/api/dvtiemchung/${id}`);
    return res.data.data;
} 
