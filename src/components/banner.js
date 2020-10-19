import React from "react"
import { Row, Container} from "react-bootstrap"

import GraphicButton from "./graphicButton"
import Image from "./image"
import StateFlags from "./state_flags.js"


function BasicGraphicButtons() {
  return (
    <Row className="justify-content-end banner-buttons">
      <GraphicButton className="col-md-2 col-6" title="Home" to="/" icon="home" />
      <GraphicButton className="col-md-2 col" title="Register" to="/register" icon="clipboard" />
      <GraphicButton className="col-md-2 col-6" title="Early Voting" to="/EarlyVoting" icon="voteyea" />
      <GraphicButton className="col-md-2 col" title="Absentee Voting" to="/AbsenteeVoting" icon="envelope" />
    </Row>
  )
}


const Banner = ({image, children}) => (
  <div className="banner">
    <Image className="banner-image" imageName={image} imgStyle={{ objectPosition:"top" }} />
    <Container className="absolute-top-center" style={{zIndex:1}}>
      {children}
      {BasicGraphicButtons()}
    </Container>
  </div>
)


const StateBanner = ({ state, children }) => {
  return (
    <div className="banner">
      <StateFlags className="banner-image" imageName={state} imgStyle={{ objectPosition:"top" }} />
      <Container className="absolute-top-center" style={{zIndex:1}}>
        {children}
        {BasicGraphicButtons()}
      </Container>
    </div>
  )
}

export { StateBanner }
export default Banner
