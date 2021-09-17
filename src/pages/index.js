import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

// export default function Home({ data }) {
// console.log(data)

export default function Home({ data }) {
  // const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="Site Banner" style={{ maxWidth: "100%" }} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />
        {/* <p>
          {title} - {description}
        </p> */}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
