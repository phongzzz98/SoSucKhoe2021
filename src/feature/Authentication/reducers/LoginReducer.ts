import { createSlice, createSelector } from "@reduxjs/toolkit";
import { getRole, getUserInfo, setAccessToken, setRole, setUserInfo } from "../../../utils/localStorage";
import { IAuthState } from "../interface/LoginType";
import { RootState } from "../../../store/store";
// import { getUserLoginInfoAction, loginAction } from "../actions/LoginAction";
import { notification } from "antd";
import { getUserLoginInfoAction, loginAction } from "../actions/LoginAction";

const initialState: IAuthState = {
  accessToken: localStorage.getItem("accessToken"),
  role: getRole(),
  uid: 0,
  userInfo: getUserInfo()
};
export const loginSlice = createSlice({
  name: "auth/login",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        if (action.payload.access_token) {
          state.accessToken = action.payload.access_token;
          state.role = action.payload.user.role;
          state.uid = action.payload.user.id_users;
          setAccessToken(action.payload.access_token);
          setRole(action.payload.user.role)
          notification.success({
            message: "Login Success!",
          });
        } else {
          notification.error({
            message: "You shall not pass!",
          });
        }
      })
      .addCase(loginAction.rejected, () => {
        notification.error({
          message: "You shall not pass!",
        });
      });
    builder.addCase(getUserLoginInfoAction.fulfilled, (state, action) => {
      state.userInfo = action.payload.data[0]
      setUserInfo(action.payload.data[0])
    });
  },
});

const selectSelf = (state: RootState) => state.loginSlice;

export const accessTokenSelector = createSelector(
  selectSelf,
  (state) => state.accessToken
);
export const roleSelector = createSelector(selectSelf, (state) => state.role);
export const uidSelector = createSelector(selectSelf, (state) => state.uid);
export const userInfoSelector = createSelector(selectSelf, (state) => state.userInfo);

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
