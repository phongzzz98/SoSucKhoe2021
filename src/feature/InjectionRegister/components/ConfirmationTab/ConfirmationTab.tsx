import "./ConfirmationTabStyle.css";
import injection from "../../../../assets/injection.svg";
import certificate from "../../../../assets/certificate.svg";
import reply from "../../../../assets/reply.svg";
import { Checkbox } from "antd";

interface ConfirmationTabProps {
  setConfirmChoice: Function
  confirmChoice: boolean
}
export const ConfirmationTab = (props: ConfirmationTabProps) => {
  const { setConfirmChoice, confirmChoice } = props
  return (
    <div className='confirmation-tab'>
      <div className="confirm-row">
        <img alt="Shield" className="confirm-image" src={certificate} />
        <p className="confirm-paragraph">
          1. Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy
          nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn.
          Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh
          hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn
          phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy
          định.
        </p>
      </div>
      <div className="confirm-row">
        <img alt="Shield" className="confirm-image" src={injection} />
        <p className="confirm-paragraph">
          2. Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện
          tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn
          nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2
          do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có
          thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.
        </p>
      </div>
      <div className="confirm-row">
        <img alt="Shield" className="confirm-image" src={reply} />
        <p className="confirm-paragraph">
          3. Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng
          cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị
          kịp thời.
        </p>
      </div>
      <div className="confirm-row">
        <Checkbox className='confirm-paragraph' checked={confirmChoice} onChange={() => { setConfirmChoice(!confirmChoice) }} >Đồng ý tiêm chủng</Checkbox>
      </div>
    </div>
  );
};
