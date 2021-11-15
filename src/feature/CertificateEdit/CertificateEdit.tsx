import './CertificateEditStyle.css'
import { CertificateEditHeader } from './components/CertificateEditHeader/CertificateEditHeader'
import { CertificateEditMain } from './components/CertificateEditMain/CertificateEditMain'

export const CertificateEdit = () => {
    return (
        <div className="certificate-edit">
            <CertificateEditHeader/>
            <CertificateEditMain/>
        </div>
    )
}
