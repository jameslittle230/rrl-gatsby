import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Covid19 = () => (
  <Layout>
    <SEO title="Covid-19" />
    <h1>COVID-19 FAQs</h1>

    <p>
      Please help stop the spread of COVID-19 and wear your mask to cover your
      nose and mouth. This applies to everyone age 2 years and older. When
      socializing the ideal way to visit is small groups, out of doors, > 6 feet
      apart, wearing masks.
    </p>

    <h3>
      ILLNESS: If my child is sick, when should I get my child tested for
      COVID-19?
    </h3>
    <p>
      Your child should get tested for COVID-19 if they are experiencing any of
      the following symptoms:
    </p>
    <ul>
      <li>Fever (100.0 or higher), chills, or shaking chills</li>
      <li>Cough (not due to other known cause, such as chronic cough)</li>
      <li>Difficulty breathing or shortness of breath</li>
      <li>New loss of taste of smell</li>
      <li>Sore throat</li>
      <li>Headache when in combination with other symptoms</li>
      <li>Muscle aches or body aches</li>
      <li>Nausea, vomiting, or diarrhea</li>
      <li>Fatigue, when in combination with other symptoms</li>
      <li>
        Nasal congestion or runny nose (not due to other known causes, such as
        allergies) when in combination with other symptoms
      </li>
    </ul>

    <h3>
      EXPOSURE: My child was exposed to someone who tested positive and feels
      fine
    </h3>
    <ul>
      <p>
        If your child was in contact for 15 minutes or more in a 24 hour period
        less than six feet from someone then your child will need to quarantine
        for 14 days and get a test.
      </p>
      <li>Do not do the test until 4 days have passed from the exposure.</li>
      <li>
        Your child will have to quarantine for 14 days from the last exposure
        even if the COVID-19 test is negative.
      </li>
    </ul>

    <h3>TESTING: How do I get my child tested?</h3>
    <p>
      If your child is sick, call the office and we will arrange a drive through
      test at Boston Children’s Hospital. If your child is not sick or has been
      exposed, you can find a testing site at the following 2 websites:
    </p>

    <ul>
      <li>
        <a href="http://memamaps.maps.arcgis.com/">memamaps.maps.arcgis.com</a>.
        Enter your zip code and filter for "Referral not required". Then click
        the search spyglass and check each site listed. The instructions for
        each site will be there. If you are sick, insurance should pay. If you
        are not sick, there is usually a charge.
      </li>
      <li>
        Another website that shows testing sites that are free for all patients
        is{" "}
        <a href="https://www.mass.gov/info-details/stop-the-spread">
          Stop the Spread
        </a>
        .
      </li>
      <li>
        In addition, Brookline residents, students and teachers can get tested
        at the Brookline Department of Public Health:
        <a href="https://www.mpathy.org/schedule">
          https://www.mpathy.org/schedule
        </a>
      </li>
    </ul>

    <h3>TRAVEL: What are the rules for travel?</h3>
    <p>
      If you return from travel for more than 24 hours to a place listed by the
      state as high-risk, before you can leave your home you must:
    </p>
    <li>Quarantine for 14 days from your arrival back in Massachusetts. </li>
    <li>
      OR have a negative test taken no longer than 72 hours before arrival in
      Massachusetts
    </li>
    <li>OR have a negative test after arrival in Massachusetts </li>
    <li>
      Children age 10 years and younger are not required to take a test if
      traveling with an adult from their household.
    </li>

    <h3>What does quarantine mean?</h3>
    <p>
      The person stays separate and masked even at home for 14 days.{" "}
      <a href="https://files.rothrotterlaster.com/covid-19-quarantine.pdf">
        View/download a quarantine guide from the Mass. Department of Public
        Health →
      </a>
    </p>

    <h3>What does isolation mean?</h3>
    <p>
      The sick person stays completely away in a separate room from anyone who
      is not sick. All family members are masked.
    </p>
  </Layout>
)

export default Covid19
