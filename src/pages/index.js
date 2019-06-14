import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Grid from "../components/grid"
import NewsBox from "../components/newsbox"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      maxWidth: `450px`,
      width: `100%`,
      margin: `0 auto 1rem`,
      boxShadow: `0 0 20px hsla(0, 0%, 0%, 0.6)`
    }}>
      <Image alt="The facade of 637 Washington Street" filename="building-c.jpg" />
    </div>
    <p>Welcome to the office of Drs. Roth, Rotter, and Laster. We are 3 pediatricians in a small, private practice in Brookline, Massachusetts and we are dedicated to taking excellent and personal care of our patients. We are all Board Certified by the American Board of Pediatrics. We are affiliated with Boston Children's Hospital and are proud members of the PPOC (Pediatric Physicians Organization at Children's), Boston Children's Hospital's only preferred primary care provider network.</p>
    <h2>Why Choose Us?</h2>
    <p>Our patients choose us because they know they will get excellent medical care in a personalized office. We have access to the most up to date pediatric information in the country through our strong affiliation with Boston Children’s Hospital, and in our intimate office setting we can easily maintain close, long term health relationships with our families.</p>

    <Grid columns={{
      '0px': 1,
      '500px': 2,
    }} gutter="5px">
      <NewsBox title="Immunization Corner">
        <p>Immunizations are the greatest advance in history for protecting our children. We are proud to have a nearly 100% vaccination rate for all of our patients for all of the recommended vaccines. We are happy to make an appointment for your child’s seasonal flu vaccine or any routine vaccine. We are dedicated to to keeping your child protected and up to date with immunizations. </p>
      </NewsBox>

      <NewsBox title="Welcome to our office!">
        <p>New to the area? Looking for a new pediatrician? Expecting a new baby? We are thrilled to welcome new patients into our practice! Please call our office at (617) 232-2811 to arrange for a visit. Our staff is here and ready to help you.</p>
      </NewsBox>
    </Grid>
    
    <div style={{
      boxShadow: `0 0 20px hsla(0, 0%, 0%, 0.6)`,
      maxWidth: `450px`,
      width: `100%`,
      margin: `3rem auto 0`
    }}>
      <Image alt="Drs. Roth, Rotter and Laster are preferred Boston Children's Hospital Community of Care members." filename="ppoc.jpg" />
    </div>
  </Layout>
)

export default IndexPage
