import { Button, Form, Input, Select } from 'antd'
import './CertificateEditMainStyle.css'
import { useSelector } from 'react-redux'
import { capitalizeFirstLetter, reformatDate } from '../../../../utils/utility'
import { getAllVaccineInfoSelector } from '../../../InjectionRegister/reducers/InjectionRegisterReducer'
import { getOneCitizenSelector } from '../../reducers/CertiEditReducer'

export const CertificateEditMain = () => {
    const citizen = useSelector(getOneCitizenSelector)
    const vaccineList = useSelector(getAllVaccineInfoSelector)

    return (
        <div className='certificate-edit-main'>
            <div className="personal-info-main">
                <div className="info-row">
                    <div className="info-column">
                        <Form className="chooseDate-form">
                            <Form.Item
                                className="chooseDate-form-item"
                                name="chosenDate"
                                label="Số mũi tiêm"
                                rules={[{ required: true }]}
                            >
                                <Input type='number' placeholder="Điền số mũi" />
                            </Form.Item>
                        </Form>
                        <div className="about">
                            <label className="info-label">Họ tên:</label>
                            <span className="info">{citizen.fullname}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Ngày sinh:</label>
                            <span className="info">{reformatDate(citizen.birthday!)}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Giới tính:</label>
                            <span className="info">
                                {citizen.gender!.toLowerCase() === "female" ? "Nữ" : "Nam"}
                            </span>
                        </div>
                        <div className="about">
                            <label className="info-label">CCCD:</label>
                            <span className="info">{citizen.chung_minh_ND}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Nghề nghiệp:</label>
                            <span className="info">
                                {capitalizeFirstLetter(citizen.work!)}
                            </span>
                        </div>
                    </div>
                    <div className="info-column">
                        <Form className="chooseDate-form">
                            <Form.Item
                                className="chooseDate-form-item"
                                name="chosenVaccine"
                                label="Chọn vaccine"
                                rules={[{ required: true }]}
                            >
                                <Select className="select-vaccine" placeholder="Chọn vaccine">
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
                        <div className="about">
                            <label className="info-label">Tỉnh/Thành phố:</label>
                            <span className="info">{citizen.city}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Quận/Huyện:</label>
                            <span className="info">{citizen.district}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Phường/Xã:</label>
                            <span className="info">{citizen.wards}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Địa chỉ:</label>
                            <span className="info">{citizen.address}</span>
                        </div>
                        <div className="about">
                            <label className="info-label">Tiền sử bệnh:</label>
                            <span className="info">{citizen.Tien_su_benh_an}</span>
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="action-buttons-certi-edit">
                        <Button key="back">Hủy</Button>
                        <Button key="submit" htmlType="submit" type="primary">
                            Lưu
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
