import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Rime is coming soon.</h1>
    <p>info@rime.ai</p>
    
  </Layout>
)

export default IndexPage
