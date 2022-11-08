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
    {/* <img src={companyDetails.imageUrl} alt-text="Image"/> */}
    <div class="cta">
       <h3 className="card-title">{companyDetails.primaryText}</h3>
      <a href={companyDetails.companyId.url} target="_blank">{cta ? cta :'Click here' }</a>
    </div>
  </div>
    <h5 className="card-title">{companyDetails.description}</h5>
</div>
        {/* <div className="card" style={{width: "18rem",border:"2px solid black"}}>
        <img className="card-img-top image" src={companyDetails.imageUrl} alt-text="Card image cap" style={{width:"18rem",height:"13rem"}}/>
            <h5 className="card-title">{companyDetails.description}</h5>
            <p className="card-text">{companyDetails.primaryText}</p>
            <p className='company-name'>{companyDetails.companyId.name} </p>
          <div className="card-body">
            <a href={companyDetails.companyId.url} target="_blank" className="button">{cta ? cta :'Click here' }</a>
          </div>
        </div> */}
        </section>
    </Fragment>
  )
}

export default Card