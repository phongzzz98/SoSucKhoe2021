import { Button, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "../Authentication/reducers/LoginReducer";
import { getAllUnitAction } from "../MedicalUnit/actions/MedicalAction";
import { addInjectionRegisterAction } from "./actions/InjectRegisAction";
import { ConfirmationTab } from "./components/ConfirmationTab/ConfirmationTab";
import { InjectionHistoryTab } from "./components/InjectionHistoryTab/InjectionHistoryTab";
import { InjectionRegisterHeader } from "./components/InjectionRegisterHeader/InjectionRegisterHeader";
import { RegisterInfoTab } from "./components/RegisterInfoTab/RegisterInfoTab";
import "./InjectionRegisterStyle.css";
import { IInjectRegisToSave } from "./interface/InjectRegisType";

export const InjectionRegister = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUnitAction());
  }, [dispatch]);
  const userInfo = useSelector(userInfoSelector);
  const [selectedDate, setSelectedDate] = useState()
  const [selectedVaccineID, setSelectedVaccineID] = useState(0)
  const [selectedUnitID, setSelectedUnitID] = useState(0)
  console.log('DVU', selectedDate, selectedVaccineID, selectedUnitID);
  const [conditionFulfilled, setConditionFulfilled] = useState(false);
  const [confirmChoice, setConfirmChoice] = useState(false)

  useEffect(() => {
    if (selectedUnitID && selectedVaccineID && selectedDate && confirmChoice === true) {
      setConditionFulfilled(true)
    }
    else
      setConditionFulfilled(false)
  }, [selectedUnitID,selectedVaccineID,selectedDate,confirmChoice,setConditionFulfilled])

  const handleAddRegis = () => {
    const injectRegis: IInjectRegisToSave = {
      date: selectedDate!,
      iddonvitiem: selectedUnitID,
      idnguoidan: userInfo.idnguoidan!,
      idvaccine: selectedVaccineID
    }
    dispatch(addInjectionRegisterAction(injectRegis))
  }

  return (
    <div className="injection-register-main">
      <InjectionRegisterHeader />
      <Tabs defaultActiveKey="1" size="large" className="tab">
        <Tabs.TabPane tab="Thông tin đăng ký" key="1" className="tab-item">
          <RegisterInfoTab setSelectedDate={setSelectedDate} setSelectedVaccineID={setSelectedVaccineID} setSelectedUnitID={setSelectedUnitID} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tiền sử tiêm" key="2" className="tab-item">
          <InjectionHistoryTab />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xác nhận" key="3" className="tab-item">
          <ConfirmationTab setConfirmChoice={setConfirmChoice} confirmChoice={confirmChoice} />
        </Tabs.TabPane>
      </Tabs>
      <div className="action-buttons">
        <Button key="back">Hủy</Button>
        <Button disabled={!conditionFulfilled} onClick={handleAddRegis} key="submit" htmlType="submit" type="primary">
          Lưu
        </Button>
      </div>
    </div>
  );
};
