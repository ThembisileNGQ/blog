import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import WrapperGrid from '../components/WrapperGrid'
import Hero from '../components/Hero'
import ResumeBody from '../components/Resume/ResumeBody'
import ResumeBodyTop from '../components/Resume/ResumeBodyTop'
import ResumeBodyBottom from '../components/Resume/ResumeBodyBottom'
import ResumeForm from '../components/Resume/ResumeForm'
import SEO from '../components/SEO'

const Resume = ({ data, location }) => {
  const info = data.contentfulResume
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${config.siteTitle} - Resume`}</title>
      </Helmet>
      <SEO postNode={info} pagePath="Resume" customTitle pageSEO />
      <ResumeBody>
          <ResumeBodyTop body={info.body} />
          <ResumeBodyBottom>
          </ResumeBodyBottom>
        </ResumeBody>
    </Layout>
  )
}

export const query = graphql`
query {
    contentfulResume {
      text
      id
      heroImage {
        title
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 900) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Resume