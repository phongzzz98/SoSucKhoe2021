import { Form, Input, Table } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMedicalUnit } from "../../../MedicalUnit/interface/MedicalType";
import { getAllUnitSelector } from "../../../MedicalUnit/reducers/MedicalReducer";

interface ChooseUnitProps{
  setSelectedUnitID: Function
}
export const ChooseUnit = (props: ChooseUnitProps) => {
  const {setSelectedUnitID} = props
  const medicalUnitList = useSelector(getAllUnitSelector);
  const [searchCity, setSearchCity] = useState('')
  const [searchDistrict, setSearchDistrict] = useState('')
  const [searchWard, setSearchWard] = useState('')
  const [medicalUnitListTemp, setMedicalUnitListTemp] = useState([...medicalUnitList])
  

  useEffect(() => {
    const tempList1 = medicalUnitList.filter((unit) => unit.city.toLowerCase().includes(searchCity.toLowerCase()))
    const tempList2 = tempList1.filter((unit) => unit.district.toLowerCase().includes(searchDistrict.toLowerCase()))
    const tempList3 = tempList2.filter((unit) => unit.wards.toLowerCase().includes(searchWard.toLowerCase()))
    setMedicalUnitListTemp(tempList3)
  }, [searchCity, searchDistrict, searchWard, medicalUnitList])

  const handleChange = (id: number) => {
    setSelectedUnitID(id)
  }
  return (
    <div>
      <Form className="form-container">
        <div className="search-unit-form">
          <Form.Item name="city" label="Thành phố">
            <Input.Search placeholder="Tìm thành phố" onChange={(e) => { setSearchCity(e.target.value) }} />
          </Form.Item>
          <Form.Item name="district" label="Quận/Huyện">
            <Input.Search placeholder="Tìm quận" onChange={(e) => { setSearchDistrict(e.target.value) }} />
          </Form.Item>
          <Form.Item name="ward" label="Phường/Xã">
            <Input.Search placeholder="Tìm phường" onChange={(e) => { setSearchWard(e.target.value) }} />
          </Form.Item>
        </div>
      </Form>
      <div>
        <div>
          <Table
            className="unit-table"
            dataSource={medicalUnitListTemp}
            pagination={false}
            bordered={true}
            rowKey={(u) => u.tendonvi}
            rowSelection={{ type: "radio", onSelect: (record) => { handleChange(record.iddonvitiem) } , fixed:false}}
            
          >
            <Table.Column
              title="Tên"
              render={(unit: IMedicalUnit) => <span>{unit.tendonvi}</span>}
              width="25%"
            />
            <Table.Column
              title="Địa chỉ"
              render={(unit: IMedicalUnit) => <span>{unit.address}</span>}
              width="25%"
            />
            <Table.Column
              title="Thành phố"
              render={(unit: IMedicalUnit) => <span>{unit.city}</span>}
              width="15%"
            />
            <Table.Column
              title="Quận"
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
      </div>
    </div>
  );
};
