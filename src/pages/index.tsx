import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Karens as KarensComponent } from "../components/Karens"
import { HelpUsFindKarens } from "../components/HelpUsFindKarens"
import { DonateToWikipedia } from "../components/DonateToWikipedia"

const IndexPage = ({
  data: {
    dataYaml: { Karens = [] },
  },
}) => {
  return (
    <Layout>
      <SEO title="Amazing Karens" />
      <KarensComponent data={Karens} />
      <HelpUsFindKarens />
      <DonateToWikipedia />
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
