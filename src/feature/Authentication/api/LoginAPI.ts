import { axiosInstance } from "../../../configs/axios";
import { ILogin } from "../interface/LoginType";

export const loginAPI = async ({ username, password }: ILogin) => {
  try {
    const res = await axiosInstance.post(`/api/auth/login`, {
      email: username,
      password: password,
    });
    return res.data;
  } catch (error: any) {
    return error.res.data;
  }
};

export const getUserLoginInfo = async (id:number) => {
  try {
    const res = await axiosInstance.get(`/api/users/${id}`);
    return res.data;
  } catch (error:any) {
    return error.res.data
  }
};
