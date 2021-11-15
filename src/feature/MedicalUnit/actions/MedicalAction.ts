import { getAllUnit, getOneUnit } from "../api/MedicalAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUnitAction = createAsyncThunk(
  "getAllMedicalUnit",
  async () => {
    const res = await getAllUnit();
    return res;
  }
);

export const getOneUnitAction = createAsyncThunk(
  "getOneMedicalUnit",
  async (id: number) => {
    const res = await getOneUnit(id);
    return res;
  }
);
