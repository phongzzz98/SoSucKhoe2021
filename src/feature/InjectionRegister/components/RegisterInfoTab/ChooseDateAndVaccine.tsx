import { DatePicker, Form, Select } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { getAllVaccineInfoSelector } from "../../reducers/InjectionRegisterReducer";

interface ChooseDateAndVaccineProps{
    setSelectedDate: Function,
    setSelectedVaccineID: Function
}

export const ChooseDateAndVaccine = (props: ChooseDateAndVaccineProps) => {
    const {setSelectedVaccineID, setSelectedDate} = props
    const vaccineList = useSelector(getAllVaccineInfoSelector)
    return (
        <div>
            <Form className="chooseDate-form">
                <Form.Item
                    className="chooseDate-form-item"
                    name="chosenDate"
                    label="Chọn ngày tiêm"
                    rules={[{ required: true }]}
                >
                    <DatePicker defaultValue={undefined} onChange={(e)=>{setSelectedDate(moment(e).format("YYYY-MM-DD"))}} placeholder="Chọn ngày" />
                </Form.Item>
                <Form.Item
                    className="chooseDate-form-item"
                    name="chosenVaccine"
                    label="Chọn vaccine"
                    rules={[{ required: true }]}
                >
                    <Select onChange={(value)=>{setSelectedVaccineID(value)}} className="select-vaccine" placeholder="Chọn vaccine">
                        {
                            vaccineList.map((vaccine) =>
                            (<Select.Option key={vaccine.idvaccine} value={vaccine.idvaccine}>
                                {vaccine.name_vaccine}
                            </Select.Option>)
                            )
                        }
                    </Select>
                </Form.Item>
            </Form>
        </div>
    );
};
