import { Avatar } from 'antd'
import './NotificationItemStyle.css'

interface NotificationItemProps {
    img: string
    title: string
    info: string
}
export const NotificationItem = (props: NotificationItemProps) => {
    const { img, title, info } = props
    return (
        <div className="notification-item">
            <Avatar src={img} size="large" shape="square" className="noti-item-avatar"/>
            <div className="noti-item-text">
                <span className="noti-item-title">{title}: </span>
                <span className="noti-item-info">{info}</span>
            </div>
        </div>
    )
}
