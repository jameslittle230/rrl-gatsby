import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/boilerform.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Page not found.</h1>
    <p>Sorry! We can't find the web page you're looking for. This is a mistake on our end.</p>
    <p>We've logged this error and will investigate, but maybe you want to report what you were looking for?</p>
    <form name="contact" action="/" method="POST" data-netlify="true" className="boilerform">
      <div className="c-form__row">
          <label for="name" className="c-label">Name (optional)</label>
          <input type="text" name="name" id="name" className="c-input-field" />
      </div>
      <div className="c-form__row">
          <label for="email" className="c-label">Email (optional)</label>
          <input type="email" name="email" id="email" className="c-input-field" />
      </div>
      <div className="c-form__row">
          <label for="message" className="c-label">What were you trying to find?</label>
          <textarea name="message" id="message" className="c-input-field c-input-field--multiline" rows="10"></textarea>
      </div>
      <div className="c-form__row">
          <button className="c-button" type="submit">Submit and go home</button>    
      </div>
    </form>
  </Layout>
)

export default NotFoundPage
