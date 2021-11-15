import { Input } from 'antd'
import './MedicalHeaderStyle.css'

export const MedicalHeader = () => {
    return (
        <div>
            <div className="unit-header">
                <span className="header-title">Đơn vị tiêm chủng</span>
            </div>
            <div className="unit-manage-input">
                <Input.Search className="search-unit" size="large" placeholder="Tìm kiếm đơn vị tiêm chủng"  />
            </div>
        </div>
    )
}
