import { getAllInjectRegis } from "../api/InjectionPlanAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllInjectRegisAction = createAsyncThunk(
  "getAllInjectRegis",
  async () => {
    const res = await getAllInjectRegis();
    return res;
  }
);