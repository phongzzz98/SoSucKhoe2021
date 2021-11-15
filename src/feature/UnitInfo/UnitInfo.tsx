import './UnitInfoStyle.css'
import { UnitInfoHeader } from './components/UnitInfoHeader/UnitInfoHeader'
import { UnitInfoMain } from './components/UnitInfoMain/UnitInfoMain'

export const UnitInfo = () => {
    return (
        <div className='unit-info'>
            <UnitInfoHeader/>
            <UnitInfoMain/>
        </div>
    )
}
