import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  // console.log(data)
  // const projects = data.allMarkdownRemark.nodes
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      {/* hello */}
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote.</p>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
