import './PersonalInfoStyle.css'
import { PersonalInfoHeader } from './components/PersonalInfoHeader/PersonalInfoHeader'
import { PersonalInfoMain } from './components/PersonalInfoMain/PersonalInfoMain'

export const PersonalInfo = () => {
    return (
        <div className='personal-info'>
            <PersonalInfoHeader/>
            <PersonalInfoMain/>
        </div>
    )
}
