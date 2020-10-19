import React from "react"
import { Container, Row, Col} from "react-bootstrap"

import Image from "../components/image.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import ComparisonChart from "../components/comparison_chart.js"

const WhyVote = () => (
  <Layout>
    <SEO title="Why Vote" />
    <Banner image="mlkVotingRights">
      <h1 className="hero-text" style={{fontSize:"5rem"}}>On The Issues</h1>
    </Banner>

    <Container className="compare">
      <h2>How the parties vote</h2>
      <ComparisonChart />
      <hr className="featurette-divider" />
    </Container>

    <Container className="featurettes">
      <Row>
        <Col lg className="featurette">
          <Image className="featurette-image" imageName="womenSuffrage"/>
          <h1 className="featurette-heading">Celebrating 100 Years</h1>
          <p>The first province in the world to award and maintain women’s suffrage (the right to vote)
            continuously, was Wyoming Territory, of the U.S., in 1869, and the first sovereign nation was
            Norway in 1913. In the U.S. women won the right to vote when the 19 th Amendment to the U.S.
            Constitution was passed in 1920 – 100 years ago. Since that time women have surpassed men as
            the largest, most important, block of registered voters in the U.S.</p>
        </Col>

        <Col lg className="featurette">
          <Image className="featurette-image" imageName="mlkVotingRights"/>
          <h1 className="featurette-heading">Voting Rights Act</h1>
          <p>The Voting Rights Act of 1965 is a landmark piece of federal legislation in the United States that
            prohibits racial discrimination in voting. Rev. Martin Luther King, Jr., perhaps the leading
            advocate of the bill is congratulated here by President Lyndon Johnson after signing the bill into law.</p>
        </Col>
      </Row>
    </Container>

  </Layout>
)

export default WhyVote
