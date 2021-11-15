import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { Button } from "antd";
import './UnitInfoHeaderStyle.css'

export const UnitInfoHeader = () => {
  return (
    <div>
      <div className="unit-info-header">
        <span className="unit-info-title">Thông tin đơn vị</span>
      </div>
      <div className="unit-info-input">
        <Button type="primary" className="edit-unit-info-btn">
          <PlusOutlined />
          Sửa thông tin
        </Button>
      </div>
    </div>
  );
};
