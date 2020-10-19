import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Table} from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"



const StateRow = ({ state, children }) => (
  <tr key={`early_vote_${state}`}>
    <td>
      <h3>{ state.replace("_", " ") }</h3>
    </td>
    <td>
      <p>State Website: <a href={STATES_DATA[state].earlyVoteLink ? STATES_DATA[state].earlyVoteLink : STATES_DATA[state].absenteeLink}>{`${state}.gov`}</a></p>
      {children}
    </td>
  </tr>
)

const EarlyVoting = () => {

  const all_state_early_voting = Object.keys(STATES_DATA).map((state) =>
    <StateRow state={state}><p></p></StateRow>
  )

  return (
    <Layout>
      <SEO title="EarlyVoting" description="Vote Early"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Early Voting Info</h1>
      </Banner>

      <Container>
        <div style={{margin:"2rem auto"}}>
          <h2 style={{fontSize:"3rem"}}>Early Voting By State</h2>
          <h4 style={{position:"relative", top:-10, color:"#6c757d"}}>Check your State's Early Voting Dates.</h4>
          <p>Early voting, also called advance polling or pre-poll voting, is a convenience voting process by which voters in a public election can vote prior to the scheduled election day. 
            Early voting can take place remotely, such as via postal voting, or in person, usually in designated early voting polling stations.</p>
        </div>
        <Table className="state-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {all_state_early_voting}
          </tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export default EarlyVoting
