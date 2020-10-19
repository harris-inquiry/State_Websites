import React from "react"
import { Card } from "react-bootstrap"

const InfoCard = ({className, children}) => (
  <Card className={className}>
    <svg className="card-img-top" style={{height:"30px"}}>
      <rect width="100%" height="100%" style={{fill:"crimson"}}/>
      <polygon points="15.15, 1.52 6.06, 30.00 28.79, 11.82 1.52, 11.82 24.24, 30.00" style={{fill:"white"}}/>
    </svg>
    <Card.Body>
      {children}
    </Card.Body>
  </Card>
)

export default InfoCard
