import { createSlice, createSelector } from "@reduxjs/toolkit";
import { IInjectRegisState } from "../interface/InjectRegisType";
import { RootState } from "../../../store/store";
// import { getUserLoginInfoAction, loginAction } from "../actions/LoginAction";
import { notification } from "antd";
import { addInjectionRegisterAction, getAllVaccineInfoAction } from "../actions/InjectRegisAction";

const initialState: IInjectRegisState = {
  vaccineList: [],
};

export const injectionRegisterSlice = createSlice({
  name: "injectionRegister",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVaccineInfoAction.fulfilled, (state, action) => {
        state.vaccineList = action.payload;
      })
      .addCase(getAllVaccineInfoAction.rejected, () => {
        notification.error({
          message: "Get Vaccine Fail!",
        });
      });
    builder
      .addCase(addInjectionRegisterAction.fulfilled, () =>{
        notification.success({
          message: "Đăng ký tiêm thành công!",
        })
      })
      .addCase(addInjectionRegisterAction.rejected, () =>{
        notification.error({
          message: "Đăng ký tiêm thất bại!",
        })
      })
  },
});

const selectSelf = (state: RootState) => state.injectionRegisterSlice;

export const getAllVaccineInfoSelector = createSelector(
  selectSelf,
  (state) => state.vaccineList
);

export default injectionRegisterSlice.reducer;
