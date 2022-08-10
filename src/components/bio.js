/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/party_mimo.png"
        width={150}
        height={150}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p
          style={{
            color: "var(--textNormal)",

            // transition: "color 0.2s ease-out, background 0.2s ease-out",
          }}
        >
          남에게 쉽게 설명해줄 수 있을 때<br/> 비로소 안다고 할 수 있다.
          {` `}
        </p>
      )}
    </div>
  )
}

export default Bio
