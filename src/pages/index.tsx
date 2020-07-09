import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Karens as KarensComponent } from "../components/Karens";

const IndexPage = ({
  data: {
    dataYaml: { Karens = [] },
  },
}) => {
  return (
    <Layout>
      <SEO title="Amazing Karens" />
      <KarensComponent data={Karens} />
    </Layout>
  )
}

export const query = graphql`
  query {
    dataYaml {
      Karens {
        description
        imgSrc
        link
        name
      }
    }
  }
`

export default IndexPage
