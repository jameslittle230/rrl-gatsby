import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewPatientPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>New Patient Information</h1>
    <p>We are always happy to hear from new families. If you are an expecting a baby, new to the area, or looking for a new pediatrician and would like a small, personalized office setting, please call our office to learn more at 617-232-2811. Our staff will be happy to assist you with making an appointment.</p>
    <p>In advance of making an appointment, please forward your child's health and immunization records. After reviewing them, we will call you to schedule an appointment.</p>
    <p>On the day of your appointment, please fill out and bring three forms:</p>

    <ol>
        <li><Link to="/resources/new-patient.pdf">New Patient Information Form</Link></li>
        <li><Link to="/resources/family-history.pdf">Family History Form</Link></li>
        <li><Link to="/resources/general-consent.pdf">General Consent Form</Link></li>
    </ol>
  </Layout>
)

export default NewPatientPage
