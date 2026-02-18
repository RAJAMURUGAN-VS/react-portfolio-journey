import './CertificateFilterItem.css'

const CertificateFilterItem = props => {
  const { filterItem, filterId, updateFilterId } = props
  const { id, certificateCategory } = filterItem

  const onClickFilter = () => {
    updateFilterId(id)
  }

  return (
    <li className="filter-container">
      <button
        type="button"
        onClick={onClickFilter}
        className={`filter-button ${filterId === id ? 'active-filter' : ''}`}
      >
        {certificateCategory}
      </button>
    </li>
  )
}

export default CertificateFilterItem