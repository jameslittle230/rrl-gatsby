import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Covid19 = () => (
  <Layout>
    <SEO title="Covid-19" />
    <h1>COVID-19 Information</h1>
    <p>For the safety of our patients we are changing our office procedures for the week of March 16.</p> 
    <ol>
    <li><strong>WELL VISITS:</strong> All well visits will be postponed and we will be
    in contact with you to reschedule. </li>
    <li><strong>SICK VISITS:</strong> If your child is sick
    this week, please call.</li>
    <li><strong>MEDICATION FOLLOW UP APPOINTMENTS CURRENTLY
    BOOKED:</strong> our office will contact you to manage the care. </li>
    <li>Our patient
    portal, <a href="https://mychart.chppoc.org/rrl/">MyChart</a>, is the best way for care and communication. </li>
    <li>If you have
    not signed up for MyChart (our patient portal) please call our office at
    617-232-2811 and our staff is happy to sign you up. </li>
    <li>Remember we have
    useful information for <a href="https://rothrotterlaster.com/resources/">fever, vomiting, and diarrhea, and medication dosing.</a></li>
    <li>If you receive a telephone reminder
    regarding a visit this week, we are working with our provider, Televox, to
    transmit the following message:
    
    <blockquote>We are postponing in person visits for the
    week of 3/16. Please call our office for more information.</blockquote> 
    
    If you receive
    any other type of message please ignore the reminder about your appointment.</li>
    </ol>
    
    <hr />
    
    <p>For general COVID questions: The DPH has established a hotline for all
    COVID-19 questions (such as school and daycare attendance, travel, household
    exposures). The number is 211. This hotline is available 24 hours a day, 7
    days a week.</p>
  </Layout>
)

export default Covid19
