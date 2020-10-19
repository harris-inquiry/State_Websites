import React, { useState } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"

import StateSelect from "./stateSelect"
import SplitInfoCard from "./splitInfoCard"
import { STATES_DATA, NO_STATE } from "../data/states"


/* const stateList = Object.keys(STATES_DATA) */

function getStateInfo(state, info){
  if( state === NO_STATE ){
    return NO_STATE
  }
  try {
    return (
      STATES_DATA[state][info].map((info)=>
        <li key={state + "_" + info}>{info}</li>
    ))
  } catch (er) {
    return "DATA_RETRIEVE_FAILED"
  }
}

function getStateLink(state, linkType){
  if( state === NO_STATE ){
    return NO_STATE
  }
  try {
    var link = STATES_DATA[state][linkType]
    if( link == "" & linkType == "earlyVoteLink" ){
      link = STATES_DATA[state]["absenteeLink"]
    }
    return link
  } catch (er) {
    return "./404"
  }
}

const StateElectionDates = () => {
  const [usState, setUSState] = useState(NO_STATE)

  return (
    <Card id="state-dates">
      <Card.Body>
        <h2>Voting Info: <span style={{color:"yellow", textTransform:"uppercase"}}>{(usState !== NO_STATE) ? usState.replace("_", " ") : "SELECT"}</span></h2>
        <StateSelect onChange={(state) => setUSState(state)}/>
        <div style={{display:(usState === NO_STATE ? "none" : "inherit")}}>
          <p style={{textAlign:"right", fontSize:"1rem"}}>*Dates may not be up to date: Check with your state's local laws</p>
          <Container>
            <SplitInfoCard icon="clipboard" link={getStateLink(usState, "registerLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Voter Registration</h3>
              <ul>
                {getStateInfo(usState,"voterRegistrationDeadlines")}
              </ul>
            </SplitInfoCard>
          </Container>
          <hr/>
          <Container>
            <SplitInfoCard icon="envelope" link={getStateLink(usState, "earlyVoteLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Early Voting</h3>
              <ul>
                {getStateInfo(usState,"genInfo")}
              </ul>
            </SplitInfoCard>
          </Container>
          <hr/>
          <Container>
            <SplitInfoCard icon="voteyea" link={getStateLink(usState, "absenteeLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Absentee Voting</h3>
              <ul>
                {getStateInfo(usState,"absenteeInfo")}
              </ul>
            </SplitInfoCard>
          </Container>
        </div>
      </Card.Body>
    </Card>
  )
}

const StateElectionDatesStatic = ({ state: usState }) => (
  <Card id="state-dates">
    <Card.Body>
      <h2 style={{fontSize:"3rem"}}>Voting Info: <span style={{color:"yellow", textTransform:"uppercase"}}>{(usState !== NO_STATE) ? usState.replace("_", " ") : "SELECT"}</span></h2>
      <div style={{marginTop:'1rem', display:(usState === NO_STATE ? "none" : "inherit")}}>
        <ul>
          {getStateInfo(usState,"genInfo")}
        </ul>
        <hr/>
        <h3 style={{marginTop:"1rem", fontSize:"2.1rem"}}>Voter Registration</h3>
        <ul>
          {getStateInfo(usState,"voterRegistrationDeadlines")}
        </ul>
        <hr/>
        <ul>
          {getStateInfo(usState,"absenteeInfo")}
        </ul>
      </div>
    </Card.Body>
  </Card>
)

export { StateElectionDatesStatic }
export default StateElectionDates
