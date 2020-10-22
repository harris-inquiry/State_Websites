import React from "react"

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
  <a href={to} className={"graphic-button btn " + className} style={{...style}}>
    <FontAwesomeIcon icon={ getImage(icon) } />
    <p>{title}</p>
  </a>
)

export default GraphicButton
