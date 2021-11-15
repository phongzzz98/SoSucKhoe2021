import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { notification } from "antd";
import { ICertiEditState } from "../interface/CertiEditType";
import { getAllCitizenAction, getOneCitizenAction } from "../actions/CertiEditAction";

const initialState: ICertiEditState = {
  citizenList: [],
  citizen: {
    Tien_su_benh_an: "",
    address: "",
    birthday: "",
    city: "",
    chung_minh_ND: "",
    created_at: "",
    district: "",
    email: "",
    email_verified_at: "",
    fullname: "",
    gender: "",
    id_users: 0,
    idnguoidan: 0,
    password: "",
    remember_token: "",
    role: "",
    updated_at: "",
    wards: "",
    work: "",
  },
};
export const certiEditSlice = createSlice({
  name: "certiEdit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCitizenAction.fulfilled, (state, action) => {
        state.citizenList = action.payload;
      })
      .addCase(getAllCitizenAction.rejected, () => {
        notification.error({
          message: "Get citizens failed",
        });
      });
      builder
      .addCase(getOneCitizenAction.fulfilled, (state, action) => {
        state.citizen = action.payload;
      })
      .addCase(getOneCitizenAction.rejected, () => {
        notification.error({
          message: "Get citizen failed",
        });
      });
  },
});

const selectSelf = (state: RootState) => state.certiEditSlice;
export const getAllCitizenSelector = createSelector(
  selectSelf,
  (state) => state.citizenList
);
export const getOneCitizenSelector = createSelector(
  selectSelf,
  (state) => state.citizen
);

export default certiEditSlice.reducer;
