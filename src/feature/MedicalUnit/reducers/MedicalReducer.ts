import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { notification } from "antd";
import { getAllUnitAction, getOneUnitAction } from "../actions/MedicalAction";
import { IMedicalUnitState } from "../interface/MedicalType";

const initialState: IMedicalUnitState = {
  medicalUnitList: [],
  chosenUnit: {
    iddonvitiem: 0,
    tendonvi: "",
    city: "",
    district: "",
    address: "",
    idvaccine: 0,
    id_users: 0,
    wards: "",
  },
};

export const medicalUnitSlice = createSlice({
  name: "medicalUnit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUnitAction.fulfilled, (state, action) => {
        state.medicalUnitList = action.payload;
      })
      .addCase(getAllUnitAction.rejected, () => {
        notification.error({
          message: "Get All Unit Fail!",
        });
      });
    builder
      .addCase(getOneUnitAction.fulfilled, (state, action) => {
        state.chosenUnit = action.payload;
      })
      .addCase(getOneUnitAction.rejected, () => {
        notification.error({
          message: "Get Unit Fail!",
        });
      });
  },
});

const selectSelf = (state: RootState) => state.medicalUnitSlice;

export const getAllUnitSelector = createSelector(
  selectSelf,
  (state) => state.medicalUnitList
);
export const getOneUnitSelector = createSelector(
  selectSelf,
  (state) => state.chosenUnit
);

export default medicalUnitSlice.reducer;
