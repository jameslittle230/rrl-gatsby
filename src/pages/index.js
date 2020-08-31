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
    <p class="cta red">
      <Link to="/covid19">
        Click here for an important message related to Coronavirus (COVID-19)
        and patients of Drs. Roth, Rotter and Laster
      </Link>
    </p>
    <div
      style={{
        maxWidth: `450px`,
        width: `100%`,
        margin: `0 auto 1rem`,
        boxShadow: `0 0 20px hsla(0, 0%, 0%, 0.6)`,
      }}
    >
      <Image
        alt="The facade of 637 Washington Street"
        filename="building-c.jpg"
      />
    </div>
    <p>
      Welcome to the office of Drs. Roth, Rotter, and Laster. We are 3
      pediatricians in a small, private practice in Brookline, Massachusetts and
      we are dedicated to taking excellent and personal care of our patients. We
      are all Board Certified by the American Board of Pediatrics. We are
      affiliated with Boston Children's Hospital and are proud members of the
      PPOC (Pediatric Physicians Organization at Children's), Boston Children's
      Hospital's only preferred primary care provider network.
    </p>

    <p>
      <a href="https://mychart.chppoc.org/rrl" class="cta">
        Patient Portal Login &rarr;
      </a>
    </p>

    <h2>Why Choose Us?</h2>
    <p>
      Our patients choose us because they know they will get excellent medical
      care in a personalized office. We have access to the most up to date
      pediatric information in the country through our strong affiliation with
      Boston Children’s Hospital, and in our intimate office setting we can
      easily maintain close, long term health relationships with our families.
    </p>

    <Grid
      columns={{
        "0px": 1,
        "500px": 2,
      }}
      gutter="5px"
    >
      <NewsBox title="2020 Flu Shot Clinic">
        <p>
          We are happy to let you know that we will begin a series of multiple
          flu vaccine clinics starting in September. We will notify you about
          your child's scheduled day and time. We will have ample supply of
          vaccines and will offer clinics throughout September, October, and
          November until 100% of our patients are vaccinated.<br></br>
          <Link to="/flu-clinic">Read More →</Link>
        </p>
      </NewsBox>

      <NewsBox title="Welcome to our office!">
        <p>
          New to the area? Looking for a new pediatrician? Expecting a new baby?
          We are thrilled to welcome new patients into our practice! Please call
          our office at (617) 232-2811 to arrange for a visit. Our staff is here
          and ready to help you.
        </p>
      </NewsBox>
    </Grid>

    <div
      style={{
        boxShadow: `0 0 20px hsla(0, 0%, 0%, 0.6)`,
        maxWidth: `450px`,
        width: `100%`,
        margin: `3rem auto 0`,
      }}
    >
      <Image
        alt="Drs. Roth, Rotter and Laster are preferred Boston Children's Hospital Community of Care members."
        filename="ppoc.jpg"
      />
    </div>
  </Layout>
)

export default IndexPage
