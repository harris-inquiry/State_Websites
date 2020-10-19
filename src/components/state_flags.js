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

const StateFlags = ({ imageName, ...rest}) => {
  const data = useStaticQuery(graphql`
    query {
      default: file(relativePath: { eq: "images/american-flag.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720){
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

      wisconsin: file(relativePath: { eq: "state_flags/wisconsin-flag.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 720){
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

StateFlags.defaultProps = {
  imageName: "default",
}

StateFlags.propTypes = {
  imageName: PropTypes.string,
}

export default StateFlags
