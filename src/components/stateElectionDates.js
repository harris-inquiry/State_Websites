import React from "react"
import { Container, Col, Row } from "react-bootstrap"

import SplitInfoCard from "./splitInfoCard"
import { getStateLink } from "../data/states"


function getStateInfo(info, stateData){
  try {
    return (
      stateData[info].map((info)=>
        <li key={"_" + info}>{info}</li>
      ));
  } catch (er) {
    return "DATA_RETRIEVE_FAILED";
  }
}


const StateElectionDates = ({ stateData, children }) => {
  return (
    <div id="state-dates">
      <div>
        <Container>
          <Row>
            <Col xl>
              <hr/>
              <SplitInfoCard icon="clipboard" link={getStateLink("registerLink", stateData)}>
                <h3>Voter Registration</h3>
                <ul>
                  {getStateInfo("voterRegistrationDeadlines", stateData)}
                </ul>
              </SplitInfoCard>
              <hr/>
              <SplitInfoCard icon="voteyea" link={getStateLink("earlyVoteLink", stateData)}>
                <h3>Early Voting</h3>
                <ul>
                  {getStateInfo("genInfo", stateData)}
                </ul>
              </SplitInfoCard>
              <hr/>
              <SplitInfoCard icon="envelope" link={getStateLink("absenteeLink", stateData)}>
                <h3>Absentee Voting</h3>
                <ul>
                  {getStateInfo("absenteeInfo", stateData)}
                </ul>
              </SplitInfoCard>
              <p className="bottom-note">*Dates may not be up to date: Check with your state's local laws</p>
            </Col>
            {children &&
             <Col xl className="child">
               <hr/>
               {children}
             </Col>
            }
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default StateElectionDates
