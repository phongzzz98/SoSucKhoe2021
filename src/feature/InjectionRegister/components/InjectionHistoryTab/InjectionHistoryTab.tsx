import { Checkbox, Form, Input } from "antd";
import "./InjectionHistoryTabStyle.css";

export const InjectionHistoryTab = () => {
  return (
    <div className='injection-history-tab'>
      <div className="checkbox-row">
        <div className="checkbox-column">
          <div className='vibe-check'>
            <Checkbox>1. Tiền sử phản vệ độ 2 trở lên</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>2. Tiền sử bị Covid-19 trong 6 tháng trở lên</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>3. Tiền sử tiêm vaccine khác trong 14 ngày qua</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>4. Tiền sử suy giảm miễn dịch, ung thư</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>5. Đang dùng thuốc, điều trị hóa trị, xạ trị</Checkbox>
          </div>
        </div>
        <div className="checkbox-column">
          <div className='vibe-check'>
            <Checkbox>6. Bệnh cấp tính</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>7. Bệnh mạn tính</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>8. Tiền sử rối loạn đông máu/cầm máu</Checkbox>
          </div>
          <div className='vibe-check'>
            <Checkbox>9. Tiền sử dị ứng</Checkbox>
          </div>
        </div>
      </div>
      <Form className='other-history'>
        <Form.Item name="other" label="Tiền sử khác">
          <Input.TextArea />
        </Form.Item>
      </Form>
    </div>
  );
};
