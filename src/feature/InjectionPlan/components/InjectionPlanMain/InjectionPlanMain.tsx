import { Table } from "antd";
import { useSelector } from "react-redux";
import { getAllVaccineInfoSelector } from "../../../InjectionRegister/reducers/InjectionRegisterReducer";
import { getAllUnitSelector } from "../../../MedicalUnit/reducers/MedicalReducer";
import { IInjectRegis } from "../../interface/InjectionPlanType";
import { getAllInjectionRegisSelector } from "../../reducers/InjectionPlanReducer";
import './InjectionPlanMainStyle.css'

export const InjectionPlanMain = () => {
    const injectionRegisList = useSelector(getAllInjectionRegisSelector);
    const vaccineList = useSelector(getAllVaccineInfoSelector)
    const unitList = useSelector(getAllUnitSelector)

    const renderVaccineName = (id: number) => {
        const temp = vaccineList.find((vaccine) => vaccine.idvaccine === id)
        return temp?.name_vaccine
    }
    
    const renderUnitName = (id: number) => {
        const temp = unitList.find((unit) => unit.iddonvitiem === id)
        return temp?.tendonvi
    }
    return (
        <div className="injection-plan-main">
            <Table dataSource={injectionRegisList} pagination={false} bordered={true}>
                <Table.Column
                    title="Ngày tiêm"
                    render={(unit: IInjectRegis) => <span>{unit.Ngay_Tiem}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Người đăng ký"
                    render={(unit: IInjectRegis) => <span>{unit.fullname}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Vaccine"
                    render={(unit: IInjectRegis) => <span>{renderVaccineName(unit.idvaccine)}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Đơn vị tiêm"
                    render={(unit: IInjectRegis) => <span>{renderUnitName(unit.iddonvitiem)}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Phường"
                    render={(unit: IInjectRegis) => <span>{unit.wards}</span>}
                    width="15%"
                />
            </Table>
        </div>
    );
};
