import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Table} from 'react-bootstrap'
import Banner from "../components/banner"

import { STATES_DATA } from "../data/states"


const EarlyVoting = () => {

  const all_state_early_voting = Object.keys(STATES_DATA).map((state) =>
    <tr key={state}>
      <td>
        <h3>{ state.replace("_", " ") }</h3>
      </td>
      <td>
        <a className="d-md-none" href={STATES_DATA[state].absenteeLink} rel="noopener noreferrer" target="_blank">{`${state.replace("_", " ")}.gov`}</a>
        <a className="d-md-inline d-none" href={STATES_DATA[state].absenteeLink} rel="noopener noreferrer" target="_blank">{STATES_DATA[state].absenteeLink}</a>
      </td>
    </tr>
  )

  return (
    <Layout>
      <SEO title="Absentee Voting" description="Vote By Mail"/>
      <Banner image="americanFlag">
        <h1 className="hero-text" style={{fontSize:"5rem"}}>Absentee Voting Info</h1>
      </Banner>

      <Container>
        <div style={{margin:"2rem auto"}}>
          <h2 style={{fontSize:"3rem"}}>Absentee Voting</h2>
          <h4 style={{position:"relative", top:-10, color:"#6c757d"}}>Vote by Mail today!</h4>
          <p>
            Absentee voting is conducted by mail-in ballot before the day of Election Day.
            All states will mail a ballot to voters if certain conditions are met.
            The voter may return the ballot in person or by mail.
            Check with your state's conditions.
          </p>
        </div>
        <Table className="state-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Absentee Voting</th>
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
