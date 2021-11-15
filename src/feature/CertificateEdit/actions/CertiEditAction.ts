import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCitizen, getOneCitizen } from "../api/CertiEditAPI";

export const getAllCitizenAction = createAsyncThunk(
  "getAllCitizen",
  async () => {
    const res = await getAllCitizen();
    return res;
  }
);

export const getOneCitizenAction = createAsyncThunk(
  "getOneCitizen",
  async (id: number) => {
    const res = await getOneCitizen(id);
    return res;
  }
);
