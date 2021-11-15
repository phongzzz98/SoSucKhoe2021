import { createSlice, createSelector } from "@reduxjs/toolkit";
import { IInjectPlanState } from "../interface/InjectionPlanType";
import { RootState } from "../../../store/store";
import { notification } from "antd";
import { getAllInjectRegisAction, getInjectPlanByCitizenAction } from "../actions/InjectionPlanAction";

const initialState: IInjectPlanState = {
  injectRegisList: [],
  injectPlanByCitizen: [],
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
    builder
      .addCase(getInjectPlanByCitizenAction.fulfilled, (state, action) => {
        state.injectPlanByCitizen = action.payload;
      })
      .addCase(getInjectPlanByCitizenAction.rejected, () => {
        notification.error({
          message: "Get Notification Fail!",
        });
      });
  },
});

const selectSelf = (state: RootState) => state.injectionPlanSlice;

export const getAllInjectionRegisSelector = createSelector(
  selectSelf,
  (state) => state.injectRegisList
);

export const getInjectPlanByCitizenSelector = createSelector(
  selectSelf,
  (state) => state.injectPlanByCitizen
);

export default injectionPlanSlice.reducer;
