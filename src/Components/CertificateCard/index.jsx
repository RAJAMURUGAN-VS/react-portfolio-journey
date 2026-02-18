import './CertificateCard.css'

const CertificateCard = (props) => {
  const { certificate } = props
  const {title,issuer,year,image,credentialUrl,skills}=certificate

  return (
    <div className="certificate-container">
      <div className="certificate-title-container">
          <img
            src={image}
            alt="certificate image"
            className="certificate-image"
          />
          <div className="certificate-item-details">
            <h1 className="certificate-title">{title}</h1>
            <div className="certificate-details-container">
              <p className="issuer">{issuer}</p>
              <p className="year">{year}</p>
            </div>
          </div>
        </div>
        <hr />
        {credentialUrl && (
            <>
              <div className='skills-header-container'>
                <h1 className='skills-heading'>Key Topics Covered</h1>
                <a href={credentialUrl} target="_blank" className="credentials">Credential</a>
              </div>
              <ul className='skills-list'>
                {skills.map(each => <li className='skills-element'>{each}</li>)}
              </ul>
            </>
          ) 
        }
    </div>
  )
}

export default CertificateCard
