import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ReferralsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Referrals</h1>
    <p>There are two kinds of referrals:</p>

    <dl>
        <dt>Medical Referral</dt>
        <dd>This means that your pediatrician will recommend that your child see a specialist for a particular medical problem and help arrange the appointment.</dd>

        <dt>Insurance Referral</dt>
        <dd>This is the process that our office staff undertakes to ensure that the specialist visit is covered by your insurance company.</dd>
    </dl>

    <h2>Medical Referral</h2>
    <p>Please speak with your child's physician before making an appointment with a specialist since there are many conditions we can easily treat in our office.</p>
    <p>If you need to see a specialist, please call our office and we will assist you in setting up a specialist appointment.</p>

    <h2>Insurance Referral</h2>
    <p>If your child needs to see a specialist, your insurance company may require a referral number prior to the visit. Once you have made the appointment with the specialist, please contact our office with the following information:</p>

    <ul>
        <li>Your child's name, date of birth, and insurance policy information</li>
        <li>Name of the physician specialist who will be seeing your child</li>
        <li>The date of the specialist appointment</li>
        <li>The NPI (National Provider Identifier) number of the specialist. The specialist's office will tell you that number, so ask for the NPI number when you make the appointment.</li>
    </ul>  
  </Layout>
)

export default ReferralsPage
