import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faHome, faEnvelope, faVoteYea} from '@fortawesome/free-solid-svg-icons'

function getImage(icon){
  switch(icon) {
    case "clipboard": return faClipboardCheck;
    case "home": return faHome;
    case "envelope": return faEnvelope;
    case "voteyea": return faVoteYea;
    default: return faClipboardCheck;
  }
}

const GraphicButton = ({ title, to, style, className, icon}) => (
  <Link to={to} className={"graphic-button btn " + className} style={{...style}}>
    <FontAwesomeIcon icon={ getImage(icon) } />
    <p>{title}</p>
  </Link>
)

GraphicButton.defaultProps = {
  title: "The Issues",
  color: "crimson",
  to: "/"
}

export default GraphicButton
