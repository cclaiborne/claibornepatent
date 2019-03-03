import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "PATENT SEARCHES"
        paragraph1 = "A patent search is an examination of patent databases for patents similar to the technology that is the subject of the search.  The purpose of the patent search is to locate related art that might be prior art to the invention. "
        paragraph2 = "If prior art is found that fully anticipates the invention in question, a patent cannot issue for the invention and the time, effort and money involved in preparing and filing a patent application is not justified."
        paragraph3 = "If prior art is found that might render the invention obvious, it is often worthwhile for the inventor to determine whether there might still remain commercially valuable non-obvious aspects of the invention that may justify patenting."
        paragraph4 = "Determinations of novelty and non-obviousness are made based on law applied to the facts of the invention and the prior art.  To be of value to the inventor, the results of a patent search should be accompanied by a written opinion of their significance by a registered patent professional (attorney or agent)."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage