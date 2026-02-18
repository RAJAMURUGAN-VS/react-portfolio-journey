import { useState } from 'react'
import './Certificates.css'
import data from '../../data/certificates.json'
import CertificateCard from '../../Components/CertificateCard'
import CertificateFilterItem from '../../Components/CertificateFilterItem'

const certificateFiltersData = [
  { id: 'ALL', certificateCategory: 'All' },
  { id: 'hackathons', certificateCategory: 'Hackathon' },
  { id: 'nxtwave-certifications', certificateCategory: 'Nxtwave' },
  { id: "workshops", certificateCategory: 'Workshop'}
]

const Certificates = () => {
  const [filterId, setFilterId] = useState('ALL')

  const updateFilterId = id => {
    setFilterId(id)
  }

  const filteredCategories =
    filterId === 'ALL'
      ? data.categories
      : data.categories.filter(category => category.id === filterId)

  return (
    <div className="certificates-bg-container">
      <h1 className="certificates-heading">My Certificates</h1>

      <ul className="filter-item-container">
        {certificateFiltersData.map(each => (
          <CertificateFilterItem
            key={each.id}
            filterItem={each}
            filterId={filterId}
            updateFilterId={updateFilterId}
          />
        ))}
      </ul>

      <div className="certificates-container">
        {filteredCategories.map(category => (
          <div key={category.id}>
            <h2 className="category-heading">{category.title}</h2>
            <div className="certificates-grid">
              {category.certificates.map(cert => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certificates