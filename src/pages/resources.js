import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Forms &amp; Resources</h1>
    <p>In this section you will find information about specific medical advice for basic problems, information about your child’s well visit form, and miscellaneous forms that you might need to download and print.</p>
    <h2>Medical Information Forms</h2>
    <p>The following are forms regarding medical care. This information does not replace actual medical advice as given by a professional and is not specific to any one child or any one medical situation.</p>

    <ul>
        <li><a href="https://files.rothrotterlaster.com/fever.pdf">Fever</a></li>
        <li><a href="https://files.rothrotterlaster.com/vomit-diarrhea.pdf">Vomiting and Diarrhea</a></li>
        <li><a href="https://files.rothrotterlaster.com/stomach-bugs.pdf">How to Prevent Stomach Bugs</a></li>
        <li><a href="https://files.rothrotterlaster.com/drug-dosing.pdf">Dosing for over-the-counter medications. Includes:</a>
            <ul>
                <li>Tylenol (Acetaminophen)</li>
                <li>Advil/Motrin (Ibuprofen)</li>
                <li>Benadryl (Diphenhydramine)</li>
            </ul>
        </li>
        <li><a href="https://files.rothrotterlaster.com/add-checklist.pdf">ADHD Diagnostic Checklist</a></li>
        <li><a href="https://files.rothrotterlaster.com/toilet-training.pdf">Toilet Training</a></li>
    </ul>

    <h2>Well Visit Forms</h2>

    <p>At the completion of your child’s routine annual check up, you will receive a general health form which will include up-to-date immunization information. This form can be used for school, camp or sports registration, or proof of health for jobs for teens. Please keep the form you receive in a safe place and make copies to provide to school, camps, or other institutions. We highly recommend that you take a picture of this form on your phone so you have access to this form at all times.</p>

    <p>If you need additional forms completed by your physician, fill in as much of the form as you are able and submit them either in person, or in a self addressed, stamped envelope and allow 5-7 business days for completion.</p>

    <p>There is a charge to provide you with extra copies of your child’s health form.</p>

    <h3>Downloadable Forms</h3>

    <ul>
        <li><a href="https://files.rothrotterlaster.com/new-patient.pdf">New Patient Information Form</a></li>
        <li><a href="https://files.rothrotterlaster.com/family-history.pdf">Family History Form</a></li>
        <li><a href="https://files.rothrotterlaster.com/general-consent.pdf">General Consent Form</a></li>
        <li><a href="https://files.rothrotterlaster.com/privacy-summary.pdf">Notice of Privacy Practices</a></li>
        <li><a href="https://files.rothrotterlaster.com/teen-consent.pdf">Adolescent Consent to Share Medical Information with Guardian or Parent</a></li>
    </ul>
  </Layout>
)

export default ResourcesPage
