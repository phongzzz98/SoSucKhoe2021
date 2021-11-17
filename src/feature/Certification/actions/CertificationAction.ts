import {
  getCertificationByCitizen,
  getHealthProfileByCitizen,
} from "../api/CertificationAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getHealthProfileByCitizenAction = createAsyncThunk(
  "getHealthProfileByCitizen",
  async (id: number) => {
    const res = await getHealthProfileByCitizen(id);
    return res;
  }
);

export const getCertificationByCitizenAction = createAsyncThunk(
  "getCertificationByCitizen",
  async (id: number) => {
    const res = await getCertificationByCitizen(id);
    console.log("asdasdasd", res);
    return res;
  }
);
