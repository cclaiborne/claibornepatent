import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "PROVISIONAL PATENT APPLICATIONS"
        paragraph1 = "A provisional patent application serves only to establish the filing date for the patent application and automatically becomes abandoned after one year."
        paragraph2 = "An applicant may wish to file a provisional application if the applicant is not ready to enter into the regular examination process, typically because of time or money constraints.  A provisional application establishes a filing date at a lower cost for a  first patent application filing in the United States and allows the term &quot;Patent Pending&quot; to be applied to the invention."
        paragraph3 = "Claims are not required in a provisional application.  Our firm's provisional patent applications always include exemplary claims, however, to serve as examples of the invention for any later filed non-provisional applications."
        paragraph4 = "At least one drawing is required in a provisional patent application.  While it is not necessary to have the drawing made by an experienced patent draftsman, preparing a formal drawing for a provisional filing can save time and expense when a non-provisional patent application is filed later."
        paragraph5 = "The U.S. Patent Office does not examine a provisional application and such an application cannot become a patent.  An applicant must submit the non-provisional application within one year of submitting the provisional application in order to possibly receive the benefit of the provisional application's filing date."
        paragraph6 = "The Patent Office charges a modest fee for provisional patent applications (currently $280 for large entities, $140 for small entities and $70 for micro entities)."
        paragraph7 = "An applicant does not have to file a provisional application before filing a non-provisional application.  Many of our clients choose to do so, however, often because provisional filing provides an interim solution for intellectual property protection prior to obtaining funding."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage