import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewPatientPage = () => (
  <Layout>
    <SEO title="New Patient Information" />
    <h1>New Patient Information</h1>
    <p>We are always happy to hear from new families. If you are an expecting a baby, new to the area, or looking for a new pediatrician and would like a small, personalized office setting, please call our office to learn more at 617-232-2811. Our staff will be happy to assist you with making an appointment.</p>
    <p>In advance of making an appointment, please forward your child's health and immunization records. After reviewing them, we will call you to schedule an appointment.</p>
    <p>On the day of your appointment, please fill out and bring three forms:</p>

    <ol>
        <li><a href="https://files.rothrotterlaster.com/new-patient.pdf">New Patient Information Form</a></li>
        <li><a href="https://files.rothrotterlaster.com/family-history.pdf">Family History Form</a></li>
        <li><a href="https://files.rothrotterlaster.com/general-consent.pdf">General Consent Form</a></li>
    </ol>
  </Layout>
)

export default NewPatientPage
