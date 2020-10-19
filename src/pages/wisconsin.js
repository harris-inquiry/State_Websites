import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Card} from 'react-bootstrap'
import { StateBanner } from "../components/banner"
import InfoCard from "../components/infoCard"
import { StateElectionDatesStatic } from "../components/stateElectionDates"


const wisconsinLinks = [
  "https://city.milwaukee.gov/vote#.Xvqi5ihKjIU",
  "https://myvote.wi.gov/en-us/",
  "https://myvote.wi.gov/en-us/RegisterToVote",
  "https://myvote.wi.gov/en-us/FindMyPollingPlace"
]

const Wisconsin = () => {

  const wisconsinLinksHTML = wisconsinLinks.map((link) => (
    <p><a href={link}>{link}</a></p>
  ))

  return (
    <Layout>
      <SEO title="Wisonsin" description="Vote Wisconsin"/>
      <StateBanner state="wisconsin">
        <h1 className="state-text" style={{fontWeight:600}}>Wisconsin</h1>
      </StateBanner>
      <Container fluid>
        <Row>
          <Col id="wisconsin-links" lg={4} md={5}>
            <InfoCard>
              <h2>Helpful Links</h2>
              <div>
                {wisconsinLinksHTML}
              </div>
            </InfoCard>
          </Col>
          <Col id="wisconsin-body">
            <StateElectionDatesStatic state="Wisconsin" />
          </Col>
        </Row>
        <Card style={{marginTop:"1rem"}}>
          <Card.Body>
            <Card.Title style={{fontSize:"3rem"}}>Voting Information</Card.Title>
            <Card.Text>
              <h2>Early Voting</h2>
              <strong style={{display:"block", marginBottom:"1rem"}}>Early Voting for the Tuesday, November 3, 2020 General Election can begin on October 20th and end on November 1st. Days and hours vary by municipalities - please contact your municipal clerk for additional information. </strong>
              <p>Early voting is available in the form of in-person absentee voting. Each city, village and town is responsible for setting the dates and hours of in-person absentee voting for their municipality, though it can begin no earlier than 14 days before the election and ends no later than the Sunday before the election.  To find the dates and hours for in-person absentee voting where you live, contact your municipal clerk. </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  )
}

export default Wisconsin
