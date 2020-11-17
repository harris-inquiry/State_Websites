import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import { CarouselBanner } from "../components/banner"
// import InfoCard from "../components/infoCard"
import StateElectionDates from "../components/stateElectionDates"
import ImageCard from "../components/imageCard"
import Image from "../components/image"
import NewsArticles from "../components/news-articles"

import { STATE_DATA } from "../data/states"

import "../styles/index.scss"


const IndexPage = () => {

  return (
    <Layout>
      <SEO />
      <CarouselBanner>
        <Row>
          <Col lg>
            <h1 className="hero-text">{STATE_DATA["stateName"]}</h1>
          </Col>
          <Col className="calendar-col">
            <div className="calendar">January 5, 2021 Georgia Senate Runoff Election</div>
          </Col>
        </Row>
      </CarouselBanner>

      <Container>
        <StateElectionDates stateData={STATE_DATA}/>
      </Container>

      <Card id="my-voter-georgia">
        <Card.Body>
          <Row>
            <Col className="title-column" md>
              <Card.Title>
                <a href="https://www.mvp.sos.ga.gov/MVP/mvp.do">My Voter Georgia</a>
              </Card.Title>
              <Button variant="dark" href="https://www.mvp.sos.ga.gov/MVP/mvp.do">Continue...</Button>
            </Col>
            <Col md className="text-column">
              <Card.Text>
                <ul>
                  <li>voter registration status</li>
                  <li>Mail-In application and ballot status</li>
                  <li>Poll location</li>
                  <li>Early voting locations</li>
                  <li>Elected Officials</li>
                  <li>Registration information on file with the county office</li>
                  <li>Sample ballot for the upcoming election</li>
                  <li>Provisional Ballot status</li>
                </ul>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <NewsArticles/>


      <div id="candidates" className="container">
        <h2>The Candidates</h2>
        <Row>
          <Col md>
            <Card>
              <a href="https://electjon.com/">
                <Image imageName="jonOssoff" style={{height:360}}/>
              </a>
              <Card.Body>
                <Card.Title className="candidate-name">Jon Ossoff</Card.Title>
                <Card.Subtitle><a href="https://electjon.com/">https://electjon.com/</a></Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col md>
            <Card>
              <a href="https://warnockforgeorgia.com/">
                <Image imageName="warnockRaphael" style={{height:360}}/>
              </a>
              <Card.Body>
                <Card.Title className="candidate-name">Reverend Raphael Warnock</Card.Title>
                <Card.Subtitle><a href="https://warnockforgeorgia.com/">https://warnockforgeorgia.com/</a></Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>



      <Container fluid>
        <Row className="imageButtons">
          <Col md={6}>
            <Link to="/Issues">
              <ImageCard imageName="silentSentinels" title="ON THE ISSUES" style={{height:400}}>
                <p>Find out more about the issues this November</p>
              </ImageCard>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/resources">
              <ImageCard imageName="votefriends" title="OTHER RESOURCES" style={{height:400}}>
                <p>Find out how you can help</p>
              </ImageCard>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
