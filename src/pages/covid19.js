import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Covid19 = () => (
  <Layout>
    <SEO title="Covid-19" />
    <h1>COVID-19 Information</h1>

    <p>
      <strong>GENERAL INFORMATION:</strong> Please help stop the spread of
      COVID-19 and wear your mask to cover your nose and mouth. This applies to
      everyone age 2 years and older. When socializing the ideal way to visit is
      small groups, out of doors, > 6 feet apart, wearing masks.
    </p>

    <h2>Testing Information</h2>

    <p>
      <strong>COVID-19 TESTING FOR PEOPLE WITHOUT SYMPTOMS:</strong> If you do
      not have symptoms but would like a COVID-19 test because you are returning
      from out of state, traveling out of state, or you are concerned you were
      exposed, please refer to the following link to find a testing site near
      you:{" "}
      <a href="https://memamaps.maps.arcgis.com">
        https://memamaps.maps.arcgis.com
      </a>
    </p>

    <p>
      <strong>
        COVID-19 TESTING FOR PATIENTS WITH SYMPTOMS AND POSSIBLE COVID-19
        INFECTION:
      </strong>{" "}
      Please call our office to arrange for testing.
    </p>

    <p>
      <strong>OFFICE VISITS:</strong> We are following a hybrid model with some
      in person visits and mostly virtual visits. We will resume all in-person
      visits when we can according to state and public health information.
    </p>

    <ol>
      <li>
        WELL VISITS: All well visits should be scheduled at their usual time.
        For our youngest patients who still require their baby shots, we will
        conduct the visits with a virtual part and an in person part. For older
        patients we will conduct a virtual visit and recommend a follow up
        in-person visit if needed.
      </li>
      <li>
        SICK VISITS: If your child is sick please call our office. We are
        conducting all sick visits virtually and scheduling in person if the
        illness warrants it.
      </li>
      <li>
        Our patient portal,{" "}
        <a href="https://mychart.chppoc.org/rrl/">MyChart</a>, is the best way
        for care and communication. If you have not signed up for MyChart please
        call our office at 617-232-2811 and our staff is happy to sign you up.
      </li>
      <li>
        Remember we have useful information on our website for{" "}
        <Link to="https://rothrotterlaster.com/resources/">
          fever, vomiting, and diarrhea, and medication dosing.
        </Link>
      </li>
    </ol>
  </Layout>
)

export default Covid19
