import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getOneCitizenAction } from '../../actions/CertiEditAction'
import { getAllCitizenSelector } from '../../reducers/CertiEditReducer'
import './CertiEditHeaderStyle.css'

export const CertificateEditHeader = () => {
    const citizenList = useSelector(getAllCitizenSelector)
    const dispatch = useDispatch()
    const handleChange = (id:number) => {
        dispatch(getOneCitizenAction(id))
    }
    return (
        <div>
            <div className="certi-edit-header">
                <span className="header-title">Điều chỉnh hồ sơ tiêm chủng</span>
            </div>
            <div className="certi-edit-input">
                <Select onChange={(value:number)=>{handleChange(value)}} className="search-certi-edit" size="large" placeholder="Tìm kiếm hồ sơ" showSearch>
                {citizenList.map((citizen) =>
                    (<Select.Option key={citizen.idnguoidan} value={citizen.idnguoidan}>
                        {citizen.fullname} --- {citizen.chung_minh_ND}
                    </Select.Option>)
                    )}
                </Select>
            </div>
        </div>
    )
}
