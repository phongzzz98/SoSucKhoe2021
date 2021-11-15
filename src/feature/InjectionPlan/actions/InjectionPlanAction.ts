import { getAllInjectRegis, getInjectPlanByCitizen } from "../api/InjectionPlanAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllInjectRegisAction = createAsyncThunk(
  "getAllInjectRegis",
  async () => {
    const res = await getAllInjectRegis();
    return res;
  }
);

export const getInjectPlanByCitizenAction = createAsyncThunk(
  "getInjectPlanByCitizen",
  async (id:number) => {
    const res = await getInjectPlanByCitizen(id);
    console.log('fuck',res)
    return res;
  }
);