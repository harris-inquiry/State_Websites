import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imageName, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      defaultImage: file(relativePath: { eq: "images/gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      americanFlag: file(relativePath: { eq: "images/american-flag.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720){
            ...GatsbyImageSharpFluid
          }
        }
      }
      declarationInd: file(relativePath: { eq: "images/Declaration_of_Independence.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      womenSuffrage: file(relativePath: { eq: "images/Women-Vote-Centennial-feature.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      silentSentinels: file(relativePath: { eq: "images/silent_sentinels.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mlkVotingRights: file(relativePath: { eq: "images/MLK_voting-rights-act.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lwvLogo: file(relativePath: { eq: "images/lwv-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vote411: file(relativePath: { eq: "images/VOTE411-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rockTheVote: file(relativePath: { eq: "images/rock-the-vote-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rbg: file(relativePath: { eq: "images/rbg.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      votefriends: file(relativePath: { eq: "images/votefriends.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.[imageName]?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data[imageName].childImageSharp.fluid} {...rest}/>
}

Image.defaultProps = {
  imageName: "defaultImage",
}

Image.propTypes = {
  imageName: PropTypes.string,
}

export default Image
