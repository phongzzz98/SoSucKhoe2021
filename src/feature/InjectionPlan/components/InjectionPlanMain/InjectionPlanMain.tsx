import { Table } from "antd";
import { useSelector } from "react-redux";
import { IInjectRegis } from "../../interface/InjectionPlanType";
import { getAllInjectionRegisSelector } from "../../reducers/InjectionPlanReducer";

export const InjectionPlanMain = () => {
    const injectionRegisList = useSelector(getAllInjectionRegisSelector);
    return (
        <div>
            <Table dataSource={injectionRegisList} pagination={false} bordered={true}>
                <Table.Column
                    title="Ngày giờ tiêm"
                    render={(unit: IInjectRegis) => <span>{unit.Ngay_Tiem}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Địa chỉ"
                    render={(unit: IInjectRegis) => <span>{unit.address}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Thành phố"
                    render={(unit: IInjectRegis) => <span>{unit.city}</span>}
                    width="15%"
                />
                <Table.Column
                    title="Quận/Huyện"
                    render={(unit: IInjectRegis) => <span>{unit.district}</span>}
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
