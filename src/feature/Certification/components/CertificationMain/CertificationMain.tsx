import { Avatar, Table } from 'antd'
import './CertificationMainStyle.css'
import userInfoAvatar from "../../../../assets/user-info.svg";
import certificateWhite from "../../../../assets/certificate-white.svg"
import { useDispatch, useSelector } from 'react-redux';
import { getCertificationSelector } from '../../reducers/CertificationReducer';
import { IUserInfo } from '../../../Authentication/interface/LoginType';
import { useEffect } from 'react';
import { getCertificationByCitizenAction } from '../../actions/CertificationAction';
import { ICertification, IHealthProfile } from '../../interface/CertificationType';
import moment from 'moment';

interface CertificationMainProps {
    userInfo: IUserInfo
    healthProfile: IHealthProfile
}
export const CertificationMain = (props: CertificationMainProps) => {
    const { userInfo, healthProfile } = props
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCertificationByCitizenAction(healthProfile.idhosoBN))
    }, [dispatch, healthProfile])
    const certification = useSelector(getCertificationSelector)
    console.log(certification);
    return (
        <div className='certification-main'>
            <div className={healthProfile.Tso_mui_tiem < 2 ?'certification-container':'certification-container2'}>
                <div className='certification-number'>
                    <Avatar className='certification-avatar' src={certificateWhite} size="large" shape="square" />
                    <p>Đã tiêm <strong>{healthProfile.Tso_mui_tiem}</strong> mũi vaccine</p>
                </div>
                <div className='certification-user-info'>
                    <Avatar src={userInfoAvatar} size="large" shape="square" />
                    <div className='certification-user-info-text'>
                        <p>Họ tên: <span>{userInfo?.fullname}</span></p>
                        <p>Ngày sinh: <span>{userInfo?.birthday}</span></p>
                        <p>CMND/CCCD: <span>{userInfo?.chung_minh_ND}</span></p>
                    </div>
                </div>
                <div className='certification-injection-info'>
                    <Table dataSource={certification} pagination={false} bordered={true}>
                        <Table.Column
                            title="Mũi số"
                            render={(info: ICertification) => <span>{info.mui_so}</span>}
                            width="5%"
                        />
                        <Table.Column
                            title="Vaccine"
                            render={(info: ICertification) => <span>{info.name_vaccine}</span>}
                            width="15%"
                        />
                        <Table.Column
                            title="Địa điểm tiêm"
                            render={(info: ICertification) => <span>{info.tendonvi}</span>}
                            width="25%"
                        />
                        <Table.Column
                            title="Thời gian"
                            render={(info: ICertification) => <span>{moment(info.ngay_gio).format("DD/MM/YYYY - hh:mm")}</span>}
                            width="15%"
                        />
                    </Table>
                </div>
            </div>
        </div>
    )
}
