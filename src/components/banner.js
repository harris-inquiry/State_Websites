import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Container, Carousel} from "react-bootstrap"

import GraphicButton from "./graphicButton"
import Image from "./image"


function BasicGraphicButtons() {
  return (
    <Row className="justify-content-end banner-buttons">
      <GraphicButton className="col-md-2 col" title="Register" to="/register" icon="clipboard" />
      <GraphicButton className="col-md-2 col-6" title="Early Voting" to="/EarlyVoting" icon="voteyea" />
      <GraphicButton className="col-md-2 col" title="Absentee Voting" to="/AbsenteeVoting" icon="envelope" />
    </Row>
  )
}

const Banner = ({image, children}) => (
  <div className="banner">
    <Image className="h-100" imageName={image} imgStyle={{ objectPosition:"top" }} />
    <Container className="absolute-top-center" style={{zIndex:1}}>
      {children}
      {BasicGraphicButtons()}
    </Container>
  </div>
)

const CarouselBanner = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq:"images/CarouselImages"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <Carousel className="h-100" indicators={false} controls={false}>
        {data.allFile.edges.map( ({node}) =>
          <Carousel.Item className="h-100">
            <Img fluid={node.childImageSharp.fluid} className="h-100" imgStyle={{ objectPosition:"top" }} />
          </Carousel.Item>
        )}
      </Carousel>
      <Container className="absolute-top-center" style={{zIndex:1}}>
        {children}
        {BasicGraphicButtons()}
      </Container>
    </div>
  )
}

export default Banner
export { CarouselBanner }
