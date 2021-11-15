import { Input } from 'antd'
import './InjectionPlanHeaderStyle.css'

export const InjectionPlanHeader = () => {
    return (
        <div>
            <div className="plan-header">
                <span className="header-title">Kế hoạch tiêm chủng</span>
            </div>
            <div className="plan-input">
                <Input.Search className="search-plan" size="large" placeholder="Tìm kiếm kế hoạch tiêm chủng"  />
            </div>
        </div>
    )
}
