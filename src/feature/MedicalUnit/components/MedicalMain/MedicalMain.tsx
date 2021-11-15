import { Table } from "antd";
import { useSelector } from "react-redux";
import { getAllUnitSelector } from "../../reducers/MedicalReducer";
import { IMedicalUnit } from "../../interface/MedicalType";

export const MedicalMain = () => {
  const medicalUnitList = useSelector(getAllUnitSelector);
  return (
    <div>
      <Table dataSource={medicalUnitList} pagination={false} bordered={true}>
        <Table.Column
          title="Tên"
          render={(unit: IMedicalUnit) => <span>{unit.tendonvi}</span>}
          width="15%"
        />
        <Table.Column
          title="Địa chỉ"
          render={(unit: IMedicalUnit) => <span>{unit.address}</span>}
          width="15%"
        />
        <Table.Column
          title="Thành phố"
          render={(unit: IMedicalUnit) => <span>{unit.city}</span>}
          width="15%"
        />
        <Table.Column
          title="Quận/Huyện"
          render={(unit: IMedicalUnit) => <span>{unit.district}</span>}
          width="15%"
        />
        <Table.Column
          title="Phường"
          render={(unit: IMedicalUnit) => <span>{unit.wards}</span>}
          width="15%"
        />
      </Table>
    </div>
  );
};
