import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "REQUESTING LEGAL SERVICES"
        paragraph1 = "Requesting legal services from our firm is a simple two-step process. Please note that, throughout the process, all communications between you and our firm are strictly confidential."
        paragraph2 = "First, in strict compliance with our ethical duties, we must determine whether there are any actual or potential conflicts of interest that would result if we were to represent you. As a potential client, you will be asked to provide us with certain minimum information for us to use in checking for conflicts."
        paragraph3 = "If there are no conflicts, we will then arrange your initial, free consultation to determine your intellectual property needs. We provide this consultation according to your preferences: in-person, by telephone, by email, or by web-based forms that are available to authorized users on this site."
        paragraph4 = "Based upon the initial consultation, we will determine whether our firm seems to be a good match for your needs. Please note that our firm may decline representation for any reason."
        paragraph5 = "If we offer representation, we will present you with a full description of the proposed services and a quote for legal fees and costs in an effort to provide all the information you need to make an informed decision regarding engagement of our firm for your intellectual property needs."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage