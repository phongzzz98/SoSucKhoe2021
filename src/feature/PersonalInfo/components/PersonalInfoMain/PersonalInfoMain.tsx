import moment from "moment";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../../utils/utility";
import { userInfoSelector } from "../../../Authentication/reducers/LoginReducer";
import "./PersonalInfoMainStyle.css";

export const PersonalInfoMain = () => {
  const userInfo = useSelector(userInfoSelector);

  const reformatDate = (date: string) => {
    let momentInstance = moment(date);
    return momentInstance.format("DD/MM/YYYY");
  };

  return (
    <div className="personal-info-main">
      <div className="info-row">
        <div className="info-column">
          <div className="about">
            <label className="info-label">Họ tên:</label>
            <span className="info">{userInfo.fullname}</span>
          </div>
          <div className="about">
            <label className="info-label">Ngày sinh:</label>
            <span className="info">{reformatDate(userInfo.birthday!)}</span>
          </div>
          <div className="about">
            <label className="info-label">Giới tính:</label>
            <span className="info">
              {userInfo.gender!.toLowerCase() === "female" ? "Nữ" : "Nam"}
            </span>
          </div>
          <div className="about">
            <label className="info-label">CCCD:</label>
            <span className="info">{userInfo.chung_minh_ND}</span>
          </div>
          <div className="about">
            <label className="info-label">Nghề nghiệp:</label>
            <span className="info">
              {capitalizeFirstLetter(userInfo.work!)}
            </span>
          </div>
        </div>
        <div className="info-column">
          <div className="about">
            <label className="info-label">Tỉnh/Thành phố:</label>
            <span className="info">{userInfo.city}</span>
          </div>
          <div className="about">
            <label className="info-label">Quận/Huyện:</label>
            <span className="info">{userInfo.district}</span>
          </div>
          <div className="about">
            <label className="info-label">Phường/Xã:</label>
            <span className="info">{userInfo.wards}</span>
          </div>
          <div className="about">
            <label className="info-label">Địa chỉ:</label>
            <span className="info">{userInfo.address}</span>
          </div>
          <div className="about">
            <label className="info-label">Tiền sử bệnh:</label>
            <span className="info">{userInfo.Tien_su_benh_an}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
