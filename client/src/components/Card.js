import React,{Fragment} from 'react'
import './Card.css'
const Card = ({companyDetails}) => {
const {cta} =companyDetails;
  return (
    <Fragment>
        <section className="cards card-container">
        <div class="container">
  <h1>{companyDetails.companyId.name} </h1>
  <div class="img-box"  style={{backgroundImage: `url(${companyDetails.imageUrl})`}}>
    <div class="cta">
       <h3 className="card-title">{companyDetails.primaryText}</h3>
      <a href={companyDetails.companyId.url} target="_blank">{cta ? cta :'Click here' }</a>
    </div>
  </div>
    <h5 className="card-title">{companyDetails.description}</h5>
</div>
     </section>
    </Fragment>
  )
}

export default Card