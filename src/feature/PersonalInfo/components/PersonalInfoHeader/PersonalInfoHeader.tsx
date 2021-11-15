import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { Button } from "antd";
import './PersonalInfoHeaderStyle.css'

export const PersonalInfoHeader = () => {
  return (
    <div>
      <div className="info-header">
        <span className="info-title">Thông tin cá nhân</span>
      </div>
      <div className="info-input">
        <Button type="primary" className="edit-info-btn">
          <PlusOutlined />
          Sửa thông tin
        </Button>
      </div>
    </div>
  );
};
