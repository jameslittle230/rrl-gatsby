import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Covid19 = () => (
  <Layout>
    <SEO title="Covid-19" />
    <h1>COVID-19 Information</h1>

    <p>
      Please help stop the spread of COVID-19 and wear your mask to cover your
      nose and mouth. This applies to everyone age 2 years and older. When
      socializing the ideal way to visit is small groups, out of doors, > 6 feet
      apart, wearing masks.
    </p>

    <h2>Testing Information</h2>

    <h3>People without symptoms</h3>
    <p>
      If you do not have symptoms but would like a COVID-19 test because you are
      returning from out of state, traveling out of state, or you are concerned
      you were exposed, please refer to the following link to find a testing
      site near you:{" "}
      <a href="https://memamaps.maps.arcgis.com">
        https://memamaps.maps.arcgis.com
      </a>
    </p>

    <h3>People with symptoms</h3>
    <p>Please call our office to arrange for testing.</p>

    <h2>Office Visits</h2>
    <p>
      We are following a hybrid model with some in person visits and mostly
      virtual visits. We will resume all in-person visits when we can according
      to state and public health information.
    </p>

    <ol>
      <li>
        <strong>Well Visits:</strong> All well visits should be scheduled at
        their usual time. For our youngest patients who still require their baby
        shots, we will conduct the visits with a virtual part and an in person
        part. For older patients we will conduct a virtual visit and recommend a
        follow up in-person visit if needed.
      </li>
      <li>
        <strong>Sick visits:</strong> If your child is sick please call our
        office. We are conducting all sick visits virtually and scheduling in
        person if the illness warrants it.
      </li>
      <li>
        Our patient portal,{" "}
        <a href="https://mychart.chppoc.org/rrl/">MyChart</a>, is the best way
        for care and communication. If you have not signed up for MyChart please
        call our office at <a href="tel:6172322811">617-232-2811</a> and our
        staff is happy to sign you up.
      </li>
      <li>
        Remember we have useful information on our website for{" "}
        <Link to="https://rothrotterlaster.com/resources/">
          fever, vomiting, and diarrhea, and medication dosing.
        </Link>
      </li>
    </ol>

    <h2>Quarantine Information</h2>
    <p>
      <a href="https://files.rothrotterlaster.com/covid-19-quarantine.pdf">
        Click here to view/download a quarantine guide from the Mass. Department
        of Public Health →
      </a>
    </p>
  </Layout>
)

export default Covid19
