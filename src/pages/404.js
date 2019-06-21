import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/boilerform.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page not found.</h1>
    <p>Sorry! We can't find the web page you're looking for. This is a mistake on our end.</p>
    <p>We've logged this error and will investigate.</p>
    <p>Use the navigation to get back to a known page.</p>
  </Layout>
)

export default NotFoundPage
