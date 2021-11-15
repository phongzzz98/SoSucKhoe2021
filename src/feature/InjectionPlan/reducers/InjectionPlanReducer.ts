import { createSlice, createSelector } from "@reduxjs/toolkit";
import { IInjectPlanState } from "../interface/InjectionPlanType";
import { RootState } from "../../../store/store";
import { notification } from "antd";
import { getAllInjectRegisAction } from "../actions/InjectionPlanAction";

const initialState: IInjectPlanState = {
  injectRegisList: [],
};

export const injectionPlanSlice = createSlice({
  name: "injectionPlan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllInjectRegisAction.fulfilled, (state, action) => {
        state.injectRegisList = action.payload;
      })
      .addCase(getAllInjectRegisAction.rejected, () => {
        notification.error({
          message: "Get Plans Fail!",
        });
      });
  },
});

const selectSelf = (state: RootState) => state.injectionPlanSlice;

export const getAllInjectionRegisSelector = createSelector(
  selectSelf,
  (state) => state.injectRegisList
);

export default injectionPlanSlice.reducer;
