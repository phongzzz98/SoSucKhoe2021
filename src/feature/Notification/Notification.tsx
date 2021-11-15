import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userInfoSelector } from '../Authentication/reducers/LoginReducer'
import { getInjectPlanByCitizenAction } from '../InjectionPlan/actions/InjectionPlanAction'
import { getInjectPlanByCitizenSelector } from '../InjectionPlan/reducers/InjectionPlanReducer'
import { NotificationHeader } from './components/NotificationHeader/NotificationHeader'
import { NotificationMain } from './components/NotificationMain/NotificationMain'
import './NotificationStyle.css'

export const Notification = () => {
    const userInfo = useSelector(userInfoSelector)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInjectPlanByCitizenAction(userInfo.idnguoidan!));
    }, [dispatch,userInfo])
    const injectPlanByCitizen = useSelector(getInjectPlanByCitizenSelector)
    console.log(injectPlanByCitizen)
    return (
        <div className='notification'>
            <NotificationHeader />
            <NotificationMain injectPlanByCitizen={injectPlanByCitizen}/>
        </div>
    )
}
