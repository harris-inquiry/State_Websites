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
        <div id="candidates-fold">
          <a href="https://warnockforgeorgia.com/">
            <ImageCard className="candidate-image" imageName="warnockRaphael">
              <h4>Reverend Raphael Warnock</h4>
            </ImageCard>
          </a>
          <a href="https://electjon.com/">
            <ImageCard className="candidate-image" imageName="jonOssoff">
              <h4>Jon Ossoff</h4>
            </ImageCard>
          </a>
        </div>
      </CarouselBanner>

      <Container>
        <StateElectionDates stateData={STATE_DATA}/>
      </Container>

      <div id="candidates">
        <Container className="candidate ossoff">
          <Row>
            <Col md className="candidate-image">
              <a href="https://electjon.com/">
                <Image imageName="jonOssoff" style={{height:360}}/>
              </a>
            </Col>
            <Col className="candidate-text">
              <div>
                <h3 className="candidate-name">Jon Ossoff</h3>
                <a href="https://electjon.com/">
                  <h4>https://electjon.com/</h4>
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="candidate warnock">
          <Row>
            <Col className="candidate-image">
              <a href="https://warnockforgeorgia.com/">
                <Image imageName="warnockRaphael" style={{height:360}}/>
              </a>
            </Col>
            <Col md className="candidate-text">
              <div>
                <h3 className="candidate-name">Reverend Raphael Warnock</h3>
                <a href="https://warnockforgeorgia.com/">
                  <h4>https://warnockforgeorgia.com/</h4>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


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


      <Container fluid>
        <Row className="imageButtons">
          <Col md={6}>
            <Link to="/Issues">
              <ImageCard imageName="silentSentinels" style={{height:400}}>
                <h4>ON THE ISSUES</h4>
                <p>Find out more about the issues this November</p>
                <button>Learn More</button>
              </ImageCard>
            </Link>
          </Col>
          <Col md={6}>
            <Link to="/resources">
              <ImageCard imageName="votefriends" style={{height:400}}>
                <h4>OTHER RESOURCES</h4>
                <p>Find out how you can help</p>
                <button>Learn More</button>
              </ImageCard>
            </Link>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage
