import React from "react"
import { Col, Row, Card, Button } from "react-bootstrap"

import { getStateLink } from "../data/states"


const StateElectionDates = ({ stateData }) => {
  return (
    <div id="state-dates">
      <p className="bottom-note">*Dates may not be up to date: Check with your state's local laws</p>
      <Row id="state-dates">
        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>Register to Vote</Card.Title>
              <Card.Subtitle>December 7, 2020</Card.Subtitle>
              <Card.Text>New Voter Registration deadline</Card.Text>
              <Button href={getStateLink("registerLink", stateData)}>Register Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>Early Voting</Card.Title>
              <Card.Subtitle>December 14, 2020</Card.Subtitle>
              <Card.Text>Advanced In Person (Early) Voting begins for the General Election Runoff for Federal Offices</Card.Text>
              <Button href={getStateLink("earlyVoteLink", stateData)}>Vote Early</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>Absentee Voting</Card.Title>
              <Card.Subtitle>November 18, 2020</Card.Subtitle>
              <Card.Text>Earliest day for a registrar to mail an absentee ballot for the General Election Runoff for Federal Offices</Card.Text>
              <Button href={getStateLink("absenteeLink", stateData)}>Vote Absentee</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default StateElectionDates
