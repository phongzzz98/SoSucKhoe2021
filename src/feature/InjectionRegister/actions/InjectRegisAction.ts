import { addInjectionRegister, getVaccineInfo } from "../api/InjectRegisAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IInjectRegisToSave } from "../interface/InjectRegisType";

export const getAllVaccineInfoAction = createAsyncThunk(
  "getVaccineInfo",
  async () => {
    const res = await getVaccineInfo();
    return res;
  }
);

export const addInjectionRegisterAction = createAsyncThunk(
  "addInjectRegis",
  async (data: IInjectRegisToSave) => {
    const res = await addInjectionRegister(data);
    return res;
  }
);