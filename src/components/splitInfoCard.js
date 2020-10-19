import React from "react"

import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faEnvelope, faVoteYea } from '@fortawesome/free-solid-svg-icons'


function getImage(icon){
  switch(icon) {
    case "clipboard": return faClipboardCheck;
    case "envelope": return faEnvelope;
    case "voteyea": return faVoteYea;
    default: return faClipboardCheck;
  }
}

const SplitInfoCard = ({className, children, icon, link}) => (
  <Row style={{background:"white", color:"black", borderRadius:".5rem"}}>
    <Col sm={8}>
      {children}
    </Col>
    <Col className="d-flex justify-content-center align-items-center" style={{background:"darkviolet", borderRadius:"0 .5rem .5rem 0"}}>
      <div style={{textAlign:"center", margin:"1rem"}}><a href={link}>
        <FontAwesomeIcon style={{fontSize:"4rem", color:"white"}} icon={ getImage(icon) } />
        <p style={{fontStyle:"italic", color:"white"}}>State Website<span>&#187;</span></p>
      </a></div>
    </Col>
  </Row>
)

export default SplitInfoCard
