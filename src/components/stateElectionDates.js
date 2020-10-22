import React from "react"
import { Card, Container } from "react-bootstrap"

import SplitInfoCard from "./splitInfoCard"
import { STATES_DATA } from "../data/states"


function getStateInfo(state, info){
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
  try {
    var link = STATES_DATA[state][linkType]
    if( link === "" & linkType === "earlyVoteLink" ){
      link = STATES_DATA[state]["absenteeLink"]
    }
    return link
  } catch (er) {
    return "./404"
  }
}

const StateElectionDates = ({state: usState}) => {

  return (
    <Card id="state-dates">
      <Card.Body>
        <div>
          <p style={{textAlign:"right", fontSize:"1rem"}}>*Dates may not be up to date: Check with your state's local laws</p>
          <Container>
            <SplitInfoCard icon="clipboard" link={getStateLink(usState, "registerLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Voter Registration</h3>
              <ul>
                {getStateInfo(usState,"voterRegistrationDeadlines")}
              </ul>
            </SplitInfoCard>
            <hr/>
            <SplitInfoCard icon="voteyea" link={getStateLink(usState, "earlyVoteLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Early Voting</h3>
              <ul>
                {getStateInfo(usState,"genInfo")}
              </ul>
            </SplitInfoCard>
            <hr/>
            <SplitInfoCard icon="envelope" link={getStateLink(usState, "absenteeLink")}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Absentee Voting</h3>
              <ul>
                {getStateInfo(usState,"absenteeInfo")}
              </ul>
            </SplitInfoCard>
            <hr/>
          </Container>
        </div>
      </Card.Body>
    </Card>
  )
}

StateElectionDates.defaultProps = {
  state: "Arizona"
}

export default StateElectionDates
