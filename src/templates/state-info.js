import React, { useEffect }from "react"
import { graphql } from "gatsby"
import { Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"


export default function StateInfo({ pageContext: { state } }) {
  console.log(state)

  return (
    <Layout>
      <SEO title={ state.name } />
      <Banner image="americanFlag">
        <p>Hello</p>
      </Banner>
      <div style={{ height: 500}}>
        <h1>{ state.name }</h1>
        <h1>{ state.initials }</h1>
        <p>Some information on { state.name } with { state.registerLink }</p>

        <Card>
          <div>
            { state.randomList }
          </div>
        </Card>
      </div>
    </Layout>
  )
}

/* export const query = graphql`
 *   query($slug: String!) {
 *     file: file(name: {eq: $slug}) {
 *       name
 *       relativePath
 *     }
 *   }
 * `
 *  */
