import { createSlice, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { notification } from "antd";
import { ICertificationState } from "../interface/CertificationType";
import {
  getCertificationByCitizenAction,
  getHealthProfileByCitizenAction,
} from "../actions/CertificationAction";

const initialState: ICertificationState = {
  userHealthProfile: {
    idhosoBN: 0,
    Tso_mui_tiem: 0,
    idnguoidan: 0,
    created_at: "",
    updated_at: "",
    chung_minh_ND: "",
    fullname: "",
    birthday: "",
    gender: "",
    city: "",
    district: "",
    wards: "",
    address: "",
    work: "",
    Tien_su_benh_an: "",
    id_users: 0,
  },
  userCertification: [],
};

export const certificationSlice = createSlice({
  name: "certification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHealthProfileByCitizenAction.fulfilled, (state, action) => {
        state.userHealthProfile = action.payload;
      })
      .addCase(getHealthProfileByCitizenAction.rejected, () => {
        notification.error({
          message: "Get Health Profile Fail!",
        });
      });
    builder
      .addCase(getCertificationByCitizenAction.fulfilled, (state, action) => {
        state.userCertification = action.payload;
      })
      .addCase(getCertificationByCitizenAction.rejected, () => {
        notification.error({
          message: "Get Certification Fail!"
        })
      });
  },
});

const selectSelf = (state: RootState) => state.certificationSlice;

export const getHealthProfileSelector = createSelector(
  selectSelf,
  (state) => state.userHealthProfile
);
export const getCertificationSelector = createSelector(
  selectSelf,
  (state) => state.userCertification
);

export default certificationSlice.reducer;
