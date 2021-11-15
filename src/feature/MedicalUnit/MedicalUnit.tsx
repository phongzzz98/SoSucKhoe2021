import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUnitAction } from './actions/MedicalAction'
import { MedicalHeader } from './components/MedicalHeader/MedicalHeader'
import { MedicalMain } from './components/MedicalMain/MedicalMain'
import './MedicalUnitStyle.css'

export const MedicalUnit = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUnitAction());
    }, [dispatch]);

    return (
        <div className='medical-unit'>
            <MedicalHeader/>
            <MedicalMain/>
        </div>
    )
}
