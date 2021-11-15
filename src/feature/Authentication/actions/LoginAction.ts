import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserLoginInfo, loginAPI } from "../api/LoginAPI";
import { ILogin } from "../interface/LoginType";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (data: ILogin) => {
    const res = await loginAPI(data);
    return res;
  }
);

export const getUserLoginInfoAction = createAsyncThunk(
  "auth/getUserLoginInfo",
  async (id: number) => {
    const res = await getUserLoginInfo(id);
    return res;
  }
);
