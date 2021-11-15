import './InjectionPlanStyle.css'
import { InjectionPlanHeader } from './components/InjectionPlanHeader/InjectionPlanHeader'
import { InjectionPlanMain } from './components/InjectionPlanMain/InjectionPlanMain'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllInjectRegisAction } from './actions/InjectionPlanAction'

export const InjectionPlan = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllInjectRegisAction());
    }, [dispatch]);

    return (
        <div className='injection-plan'>
            <InjectionPlanHeader />
            <InjectionPlanMain />
        </div>
    )
}
