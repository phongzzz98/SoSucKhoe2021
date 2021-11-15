import { useSelector } from "react-redux";
import { userInfoSelector } from "../../../Authentication/reducers/LoginReducer";
import "./UnitInfoMainStyle.css";

export const UnitInfoMain = () => {
  const userInfo = useSelector(userInfoSelector);

  return (
    <div className="unit-info-main">
      <div className="unit-info-row">
        <div className="unit-info-column">
          <div className="about">
            <label className="unit-info-label">Tên đơn vị:</label>
            <span className="info">{userInfo.tendonvi}</span>
          </div>
          <div className="about">
            <label className="unit-info-label">Email:</label>
            <span className="info">{userInfo.email}</span>
          </div>
        </div>
        <div className="unit-info-column">
          <div className="about">
            <label className="unit-info-label">Tỉnh/Thành phố:</label>
            <span className="info">{userInfo.city}</span>
          </div>
          <div className="about">
            <label className="unit-info-label">Quận/Huyện:</label>
            <span className="info">{userInfo.district}</span>
          </div>
          <div className="about">
            <label className="unit-info-label">Phường/Xã:</label>
            <span className="info">{userInfo.wards}</span>
          </div>
          <div className="about">
            <label className="unit-info-label">Địa chỉ:</label>
            <span className="info">{userInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
