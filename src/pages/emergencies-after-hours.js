import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EmergenciesPage = () => (
  <Layout>
    <SEO title="About Us" />
    <h1>Emergencies &amp; After Hours</h1>
    <h3>If your child is experiencing a life threatening emergency, please call 911 or go to your nearest Emergency Room.</h3>
    <h2>After Hours Coverage</h2>
    <p>If you would like to reach the on call physician about an urgent matter that cannot wait until regular office hours, we are available after 5 pm on weeknights, and throughout the weekend. To reach a physician please call our office at 617-232-2811. If you do not receive a call back in the expected time, please call our office again.</p>
    <p>We are available to see your child for urgent medical issues on Saturday, Sundays, and holidays. These visits are by appointment. Please call our office at 617-232-2811 and the on-call physician will call you back either to give you advice or to schedule an office visit.</p>
    <p>We are available 24 hours/day, 365 days/year to care for our patients. If you are considering going to an urgent care center please call us first. The best after-hours care for your child comes from a pediatrician who knows your child or who works closely with your child’s pediatrician.</p>
    <p>For weekend appointments your child will be seen in our office or in the Newton office of our weekend covering group.</p>

    <hr />

    <p>Our office address is:</p>

    <address>637 Washington Street<br />
    Suite 202<br />
    Brookline, MA 02446<br />
    617-232-2811</address>

    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1759327244226!2d-71.13215350000002!3d42.33877230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379ba880fdf45%3A0x536471f86b11d0cf!2s637+Washington+St+%23202%2C+Brookline%2C+MA+02446!5e0!3m2!1sen!2sus!4v1439920811315" 
      width="100%" 
      height="450" 
      frameBorder="0" 
      style= {{ border: `0` }} 
      allowFullScreen
      title="Map of Roth, Rotter, and Laster Office"
    ></iframe>

    <hr />

    <p>The office of our weekend covering group in Newton Centre is:</p>

    <address>Drs. Jonathan Benjamin, Roger Spingarn, and Elissa Rottenberg<br />
    1400 Centre Street<br />
    Newton MA<br />
    Newton, MA 02459<br />
    617-232-2811</address>

    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7426863776914!2d-71.19744279999999!3d42.326686699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382773acbc747%3A0x372a401372abb767!2s1400+Centre+St%2C+Newton%2C+MA+02459!5e0!3m2!1sen!2sus!4v1439920887642"
      width="100%" 
      height="450" 
      frameBorder="0" 
      style= {{ border: `0` }}
      allowFullScreen
      title="Map of Benjamin, Spingarn and Rottenberg Office"
    ></iframe>
  </Layout>
)

export default EmergenciesPage
