import { ChooseDateAndVaccine } from "./ChooseDateAndVaccine";
import { ChooseUnit } from "./ChooseUnit";
import "./RegisterInfoTabStyle.css";

interface RegisterInfoTabProps {
  setSelectedDate: Function
  setSelectedVaccineID: Function
  setSelectedUnitID: Function
}

export const RegisterInfoTab = (props: RegisterInfoTabProps) => {
  const {setSelectedDate, setSelectedVaccineID, setSelectedUnitID} = props
  return (
    <div className="register-tab">
      <div className='choose-dateAndVacc-container'>
        <ChooseDateAndVaccine setSelectedDate={setSelectedDate} setSelectedVaccineID={setSelectedVaccineID} />
      </div>
      <div className='choose-unit-container'>
        <ChooseUnit setSelectedUnitID={setSelectedUnitID}/>
      </div>
    </div>
  );
};
