import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../feature/Authentication/reducers/LoginReducer";
import  injectionPlanSlice  from "../feature/InjectionPlan/reducers/InjectionPlanReducer";
import  injectionRegisterSlice  from "../feature/InjectionRegister/reducers/InjectionRegisterReducer";
import  medicalUnitSlice  from "../feature/MedicalUnit/reducers/MedicalReducer";

export const store = configureStore({
  reducer: { loginSlice, medicalUnitSlice, injectionRegisterSlice, injectionPlanSlice },
});
export type RootState = ReturnType<typeof store.getState>;
