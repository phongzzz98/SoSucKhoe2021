import { useDispatch, useSelector } from 'react-redux'
import './CertificationStyle.css'
import { CertificationHeader } from './components/CertificationHeader/CertificationHeader'
import { CertificationMain } from './components/CertificationMain/CertificationMain'
import { userInfoSelector } from '../../feature/Authentication/reducers/LoginReducer';
import { useEffect } from 'react';
import { getHealthProfileByCitizenAction } from '../../feature/Certification/actions/CertificationAction';
import { getHealthProfileSelector } from './reducers/CertificationReducer';

export const Certification = () => {
    const userInfo = useSelector(userInfoSelector)
    const healthProfile = useSelector(getHealthProfileSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHealthProfileByCitizenAction(userInfo.idnguoidan!))
    }, [dispatch, userInfo])
    return (
        <div className='certification'>
            <CertificationHeader />
            <CertificationMain userInfo={userInfo} healthProfile={healthProfile}/>
        </div>
    )
}
