import React from "react"

import { Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faEnvelope, faVoteYea } from '@fortawesome/free-solid-svg-icons'

import style from "../styles/splitInfoCard.module.scss"

function getImage(icon){
  switch(icon) {
    case "clipboard": return faClipboardCheck;
    case "envelope": return faEnvelope;
    case "voteyea": return faVoteYea;
    default: return faClipboardCheck;
  }
}

const SplitInfoCard = ({className, children, icon, link}) => (
  <Row className={style.splitRow}>
    <Col sm={8}>
      {children}
    </Col>
    <Col as="a" href={link} className={style.colButton}>
      <div>
        <FontAwesomeIcon icon={ getImage(icon) } />
        <p>State Website<span>&#187;</span></p>
      </div>
    </Col>
  </Row>
)

export default SplitInfoCard
