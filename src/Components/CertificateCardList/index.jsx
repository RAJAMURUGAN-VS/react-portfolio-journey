import './CertificateCardList.css'
import CertificateCard from '../CertificateCard'

const CertificateCardList = (props) => {

  const { certificates } = props

  return (
    <div className="certificates-container">
      {certificates.map(each => (
        <CertificateCard key={each.id} certificate={each} />
      ))}
    </div>
  )
}

export default CertificateCardList
