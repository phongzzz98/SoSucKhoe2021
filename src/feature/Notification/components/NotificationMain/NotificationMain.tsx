import './NotificationMainStyle.css'
import hospital from "../../../../assets/hospital.svg";
import userInfo from "../../../../assets/user-info.svg";
import time from "../../../../assets/time.svg";
import calendar from "../../../../assets/calendar-and-check-mark.svg";
import location from "../../../../assets/location.svg";
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { Avatar } from 'antd';
import { IInjectPlanByCitizen } from '../../../InjectionPlan/interface/InjectionPlanType';
import { useEffect, useState } from 'react';
import moment from 'moment';

interface NotificationMainProps {
    injectPlanByCitizen: IInjectPlanByCitizen[]
}

export const NotificationMain = (props: NotificationMainProps) => {
    const { injectPlanByCitizen } = props
    const [notifyInfo, setNotifyInfo] = useState<IInjectPlanByCitizen>()
    const [isNoti, setIsNoti] = useState(false)

    useEffect(() => {
        const renderNotify = () => {
            if (injectPlanByCitizen.length === 0) {
                setIsNoti(false)
            }
            else if (injectPlanByCitizen.length === 1 && moment(injectPlanByCitizen[0].Ngay_Tiemkh, "YYYY-MM-DD") <= moment("YYYY-MM-DD")) {
                setIsNoti(true)
                setNotifyInfo(injectPlanByCitizen[0])
            }
            else if (injectPlanByCitizen.length > 1) {
                for (let i = 0; i < injectPlanByCitizen.length - 1; i++) {
                    let x = moment(injectPlanByCitizen[i].Ngay_Tiemkh, "YYYY-MM-DD")
                    let y = moment(injectPlanByCitizen[i + 1].Ngay_Tiemkh, "YYYY-MM-DD")
                    if (x < y && x <= moment("YYYY-MM-DD")) {
                        setIsNoti(true)
                        setNotifyInfo(injectPlanByCitizen[i])
                    }
                    else {
                        setIsNoti(true)
                        setNotifyInfo(injectPlanByCitizen[i + 1])
                    }
                }
            }
            else {
                setIsNoti(false)
            }
        }
        renderNotify()
    }, [injectPlanByCitizen])

    if (isNoti === true) {
        return (
            <div className='notification-main'>
                <div className="notification-info">
                    <legend>?????a ??i???m</legend>
                    <NotificationItem img={hospital} title="????n v??? ti??m" info={notifyInfo?.tendonvi!} />
                    <NotificationItem img={location} title="?????a ch???" info={notifyInfo?.address! + ", " + notifyInfo?.district + ", " + notifyInfo?.city} />
                    <NotificationItem img={calendar} title='Ng??y ti??m' info={moment(notifyInfo?.Ngay_Tiemkh!).format('DD-MM-YYYY').toString()} />
                    <NotificationItem img={time} title="Th???i gian" info={notifyInfo?.gio_Tiem!} />
                    <legend>Th??ng tin c?? nh??n</legend>
                    <div className='noti-user-info'>
                        <Avatar src={userInfo} size="large" shape="square" />
                        <div className='noti-user-info-text'>
                            <p>H??? t??n: <span>{notifyInfo?.fullname}</span></p>
                            <p>Ng??y sinh: <span>{notifyInfo?.birthday}</span></p>
                            <p>CMND/CCCD: <span>{notifyInfo?.chung_minh_ND}</span></p>
                        </div>
                    </div>
                </div>
                <div className="notification-map">
                    <iframe title="GGMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15111.381997791403!2d105.84303103639584!3d21.04535925569294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb3fd62fe1d%3A0x8258254f7bb0a921!2zQuG7h25oIHZp4buHbiDEkGEga2hvYSBNRURMQVRFQw!5e0!3m2!1svi!2s!4v1636626333190!5m2!1svi!2s" width="100%" height="100%" style={{ border: 0, borderRadius: "0 1.5rem 1.5rem 0" }} allowFullScreen={false} loading="lazy"></iframe>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='notification-main'>
                <div className="notification-info">
                    <legend>?????a ??i???m</legend>
                    <NotificationItem img={hospital} title="????n v??? ti??m" info="" />
                    <NotificationItem img={location} title="?????a ch???" info="" />
                    <NotificationItem img={calendar} title='Ng??y ti??m' info="" />
                    <NotificationItem img={time} title="Th???i gian" info="" />
                    <legend>Th??ng tin c?? nh??n</legend>
                    <div className='noti-user-info'>
                        <Avatar src={userInfo} size="large" shape="square" />
                        <div className='noti-user-info-text'>
                            <p>H??? t??n: </p>
                            <p>Ng??y sinh: </p>
                            <p>CMND/CCCD: </p>
                        </div>
                    </div>
                </div>
                <div className="notification-map">
                    <p>Kh??ng c?? th??ng b??o!!</p>
                </div>
            </div>
        )
    }

}
