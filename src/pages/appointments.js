import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AppointmentsPage = () => (
  <Layout>
    <SEO title="Appointments" />
    <h1>Appointments</h1>
    <p>We are always happy to see your child when you have any concerns. Please call and make an appointment for a visit. While we can’t accept walk-ins, we always have time for scheduled visits. You do not need to check with your child's physician before making an appointment. Our staff is trained to take your call and make an appointment.</p>
    <p><strong>We are available to see patients every day of the year.</strong> We are open for all appointments, 9am-5pm, Monday-Friday, and for urgent medical problems on Saturday, Sunday and holidays.</p>
    <p>If you would like to make an appointment for your child, please call our office at 617-232-2811.</p>
    
    <p>Our office address is:</p>

    <address>
        637 Washington Street<br />
        Suite 202<br />
        Brookline, MA 02446<br />
        617-232-2811
    </address>

    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.1759327244226!2d-71.13215350000002!3d42.33877230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379ba880fdf45%3A0x536471f86b11d0cf!2s637+Washington+St+%23202%2C+Brookline%2C+MA+02446!5e0!3m2!1sen!2sus!4v1439920811315" 
        width="100%" 
        height="450" 
        frameBorder="0" 
        style={{ border: `0` }} 
        allowFullScreen
        title="Map of Roth, Rotter, and Laster Office"
    ></iframe>
    <p><strong>Note:</strong> We require 24 hours notice to cancel an appointment. There is a charge for appointments missed without proper notice.</p>
  </Layout>
)

export default AppointmentsPage
