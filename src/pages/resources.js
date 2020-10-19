import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Row, Col, Container, Card, Button} from 'react-bootstrap'
import Banner from "../components/banner"

const Links = {
  leagueWV: "https://www.lwv.org/",
  vote411: "https://www.vote411.org/",
  rockTheVote: "https://www.rockthevote.org",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Resources" description="Get involved"/>
    <Banner image="americanFlag">
      <h1 className="hero-text" style={{fontSize:"5rem"}}>Get involved</h1>
    </Banner>

    <Container className="share" style={{minHeight:300, margin:"1rem auto"}}>
      <Row style={{height:"100%"}}>
        <Col md={5} className="share-body" >
          <h2 className="share-text text-centered">Spread the Word</h2>
          <Button style={{width:"50%"}}>Share</Button>
        </Col>
        <Col>
          <Image imageName="votefriends" />
        </Col>
      </Row>
      <br/>
    </Container>

    <Container className="resource-cards">
      <h1>Get involved</h1>
      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md="6">
              <a href={Links.leagueWV}>
                <Image imageName="lwvLogo"/>
              </a>
            </Col>
            <Col>
              <a href={Links.leagueWV}>League of Women Voters</a>
              <p>The League is proud to be nonpartisan, neither supporting nor opposing candidates or political parties at any level of government, but always working on vital issues of concern to members and the public.</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md={{span: 6, order:2}}>
              <a href={Links.vote411}>
                <Image imageName="vote411"/>
              </a>
            </Col>
            <Col>
              <a href={Links.vote411}>Vote411</a>
              <p>Launched by the League of Women Voters Education Fund (LWVEF) in October of 2006, VOTE411.org is a "one-stop-shop" for election related information. It provides nonpartisan information to the public with both general and state-specific information on the following aspects of the election process</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

      <Card>
        <Card.Body>
          <Row>
            <Col lg="4" md="6">
              <a href={Links.rockTheVote}>
                <Image imageName="rockTheVote"/>
              </a>
            </Col>
            <Col>
              <a href={Links.rockTheVote}>Rock the Vote</a>
              <p>Rock the Vote is the most trusted and effective nonpartisan nonprofit dedicated to building the political power of young people</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <br/>

    </Container>

  </Layout>
)

export default IndexPage
