import { Avatar, Menu } from "antd";
import {
  HomeOutlined,
  NotificationOutlined,
  MessageOutlined,
  InfoCircleOutlined,
  LogoutOutlined,
  FormOutlined,
  CheckCircleOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import { removeAccessToken, removeUserInfo } from "../../utils/localStorage";
import {
  logout,
  roleSelector,
  uidSelector,
  userInfoSelector,
} from "../../feature/Authentication/reducers/LoginReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserLoginInfoAction } from "../../feature/Authentication/actions/LoginAction";

export const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickLogOut = () => {
    removeAccessToken();
    removeUserInfo();
    dispatch(logout());
    history.push("/login");
  };
  const uid = useSelector(uidSelector);
  const role = useSelector(roleSelector);

  useEffect(() => {
    dispatch(getUserLoginInfoAction(uid));
  }, [dispatch,uid]);

  const userInfo = useSelector(userInfoSelector);

  if(role === 'nguoidan'){
    return (
      <div className="navbar">
        <div className="navbar-user">
          <div className="user-avatar">
            <Avatar
              size={50}
              src="http://dev.timesheet.nccsoft.vn/assets/images/undefine.png"
            />
          </div>
          <div className="user-info">
            <span>{userInfo?.fullname}</span>
          </div>
        </div>
        <div className="navbar-menu">
          <Menu mode="inline" className="nav_menu">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">
                <span className="navbar-span">Trang Chủ</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
              <Link to="/injectReg">
                <span className="navbar-span">Đăng ký tiêm chủng</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<CheckCircleOutlined />}>
              <Link to="/certification">
                <span className="navbar-span">Chứng nhận tiêm chủng</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<InfoCircleOutlined />}>
              <Link to="/info">
                <span className="navbar-span">Thông tin cá nhân</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ReconciliationOutlined />}>
              <Link to="/medicalUnit">
                <span className="navbar-span">Cơ sở y tế</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<NotificationOutlined />}>
              <Link to="/notify">
                <span className="navbar-span">Thông báo lịch tiêm</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<MessageOutlined />}>
              <Link to="/citizen">
                <span className="navbar-span">Phản hồi</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="8"
              onClick={handleClickLogOut}
              icon={<LogoutOutlined />}
            >
              <span className="navbar-span">Đăng Xuất</span>
            </Menu.Item>
          </Menu>
        </div>
        <div className="navbar-footer">© 177013 Umbrella Corp</div>
      </div>
    );
  }
  else{
    return (
      <div className="navbar">
        <div className="navbar-user">
          <div className="user-avatar">
            <Avatar
              size={50}
              src="http://dev.timesheet.nccsoft.vn/assets/images/undefine.png"
            />
          </div>
          <div className="user-info">
            <span>{userInfo?.tendonvi}</span>
          </div>
        </div>
        <div className="navbar-menu">
          <Menu mode="inline" className="nav_menu">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">
                <span className="navbar-span">Trang Chủ</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
              <Link to="/injectPlan">
                <span className="navbar-span">Kế hoạch tiêm chủng</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<CheckCircleOutlined />}>
              <Link to="/certiEdit">
                <span className="navbar-span">Chỉnh hồ sơ</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              <Link to="/unitInfo">
                <span className="navbar-span">Thông tin đơn vị</span>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="8"
              onClick={handleClickLogOut}
              icon={<LogoutOutlined />}
            >
              <span className="navbar-span">Đăng Xuất</span>
            </Menu.Item>
          </Menu>
        </div>
        <div className="navbar-footer">© 177013 Umbrella Corp</div>
      </div>
    );
  }
  
};
