import React from "react"
import { Card, Container } from "react-bootstrap"

import SplitInfoCard from "./splitInfoCard"
/* import { STATE_DATA } from "../data/states" */


function getStateInfo(info, stateData){
  try {
    return (
      stateData[info].map((info)=>
        <li key={"_" + info}>{info}</li>
    ))
  } catch (er) {
    return "DATA_RETRIEVE_FAILED"
  }
}

function getStateLink(linkType, stateData){
  try {
    var link = stateData[linkType]
    if( link === "" & linkType === "earlyVoteLink" ){
      link = stateData["absenteeLink"]
    }
    return link
  } catch (er) {
    return "./404"
  }
}

const StateElectionDates = ({stateData}) => {
  return (
    <Card id="state-dates">
      <Card.Body>
        <div>
          <p style={{textAlign:"right", fontSize:"1rem"}}>*Dates may not be up to date: Check with your state's local laws</p>
          <Container>
            <SplitInfoCard icon="clipboard" link={getStateLink("registerLink", stateData)}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Voter Registration</h3>
              <ul>
                {getStateInfo("voterRegistrationDeadlines", stateData)}
              </ul>
            </SplitInfoCard>
            <hr/>
            <SplitInfoCard icon="voteyea" link={getStateLink("earlyVoteLink", stateData)}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Early Voting</h3>
              <ul>
                {getStateInfo("genInfo", stateData)}
              </ul>
            </SplitInfoCard>
            <hr/>
            <SplitInfoCard icon="envelope" link={getStateLink("absenteeLink", stateData)}>
              <h3 style={{marginTop:"1rem", fontWeight:700}}>Absentee Voting</h3>
              <ul>
                {getStateInfo("absenteeInfo", stateData)}
              </ul>
            </SplitInfoCard>
            <hr/>
          </Container>
        </div>
      </Card.Body>
    </Card>
  )
}

export default StateElectionDates
