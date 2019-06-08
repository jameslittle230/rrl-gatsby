import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DoctorCard from "../components/doctorcard"
import StaffCard from "../components/staffcard"
import Grid from "../components/grid"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>About Us</h1>
    <p>Welcome to the office of Drs. Roth, Rotter, and Laster.</p>

    <DoctorCard name="Sally S. Roth, MD" image="roth.jpg">
      <p>Dr. Roth is a graduate of Smith College and Case Western Reserve Medical School. She trained at Yale New Haven Hospital, completed a fellowship in Ambulatory Pediatrics and was on the Pediatric Faculty at the University of Florida. She is Board Certified in Pediatrics.</p>
    </DoctorCard>
    
    <DoctorCard name="Sari J. Rotter, MD" image="rotter.jpg">
      <p>Dr. Rotter began her career on staff at Boston Children's Hospital prior to entering private practice. She is a graduate of Simmons College, University of Wisconsin School of Medicine and Public Health, trained at Boston Medical Center and Boston Children's Hospital and completed a fellowship at Boston Children's in Developmental Pediatrics. She is Board Certified in General Pediatrics.</p>
    </DoctorCard>

    <DoctorCard name="Susan B. Laster, MD" image="laster.jpg">
      <p>Dr. Laster began her career working for 2 years at MGH Revere Healthcare Center and subsequently joined Drs Roth and Rotter. She is a graduate of Harvard College, Boston University School of Medicine, and trained at Massachusetts General Hospital where she also spent a year as Chief Resident of the MGH Pediatric Service. She is Board Certified and continues to maintain her Board Certification. She is also on the Board of Directors of the Pediatric Physicians Organization of Children’s Hospital.</p>
    </DoctorCard>

    <h2>Our Office Staff</h2>

    <Grid columns="4">
      <StaffCard name="Linda Diaz" year="1991" image="linda.jpg" />
      <StaffCard name="Lin Kenney" year="1995" image="lin.jpg" />
      <StaffCard name="Melissa Moroney-Barzey" year="1999" image="melissa.jpg" />
      <StaffCard name="Courtney Ferretti" year="2018" image="courtney.jpg" />
    </Grid>
  </Layout>
)

export default AboutPage
