import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../feature/Authentication/reducers/LoginReducer";
import  certiEditSlice  from "../feature/CertificateEdit/reducers/CertiEditReducer";
import  injectionPlanSlice  from "../feature/InjectionPlan/reducers/InjectionPlanReducer";
import  injectionRegisterSlice  from "../feature/InjectionRegister/reducers/InjectionRegisterReducer";
import  medicalUnitSlice  from "../feature/MedicalUnit/reducers/MedicalReducer";

export const store = configureStore({
  reducer: { loginSlice, medicalUnitSlice, injectionRegisterSlice, injectionPlanSlice, certiEditSlice },
});
export type RootState = ReturnType<typeof store.getState>;
