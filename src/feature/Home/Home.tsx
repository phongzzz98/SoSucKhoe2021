import { CardButton } from "./components/CardButton/CardButton";
import injection from "../../assets/injection.svg";
import certificate from "../../assets/certificate.svg";
import userInfo from "../../assets/user-info.svg";
import bellNoti from "../../assets/bell-notification.svg";
import reply from "../../assets/reply.svg";
import hospital from "../../assets/hospital.svg";
import "./HomeStyle.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { roleSelector } from "../Authentication/reducers/LoginReducer";

export const Home = () => {
  const role = useSelector(roleSelector);

  if (role === "nguoidan") {
    return (
      <div className="home-page">
        <div className="row">
          <Link to="/injectReg">
            <CardButton imgURL={injection} title="Đăng ký tiêm chủng" />
          </Link>
          <Link to='/certification'>
            <CardButton imgURL={certificate} title="Chứng nhận tiêm" />
          </Link>
          <Link to="/info">
            <CardButton imgURL={userInfo} title="Thông tin cá nhân" />
          </Link>
        </div>
        <div className="row">
          <Link to="/medicalUnit">
            <CardButton imgURL={hospital} title="Cơ sở y tế" />
          </Link>
          <Link to="/notify">
            <CardButton imgURL={bellNoti} title="Thông báo lịch tiêm" />
          </Link>
          <CardButton imgURL={reply} title="Phản hồi" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="home-page">
        <div className="row">
          <Link to="/injectPlan">
            <CardButton imgURL={injection} title="Kế hoạch tiêm chủng" />
          </Link>
          <Link to="/certiEdit">
            <CardButton imgURL={certificate} title="Điều chỉnh hồ sơ tiêm" />
          </Link>
          <Link to="/unitInfo">
            <CardButton imgURL={userInfo} title="Thông tin đơn vị" />
          </Link>
        </div>
        <div className="row">
          <CardButton imgURL={reply} title="Phản hồi" />
        </div>
      </div>
    );
  }

};
