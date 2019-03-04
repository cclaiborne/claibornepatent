import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "ISSUANCE AND MAINTENANCE OF PATENTS"
        paragraph1 = "If a patent application in prosecution is found to be acceptable to the patent examiner, it is said to be &quot;allowed&quot;.  For a patent to issue, the applicant must pay an issue fee to the Patent Office (currently $1,000 for large entities, $500 for small entities and $250 for micro entities).  If the applicant fails to pay the issue fee within three months of notice of allowance, the patent application will be deemed abandoned."
        paragraph2 = "Upon payment of the issue fee, a date will be set for publication of the patent in the Official Gazette (Patents) of the U.S. Patent and Trademark Office.  The Official Gazette is published every Tuesday, setting forth patent numbers, abstracts and representative drawings for patents issued that week.  The date of publication of the patent in the Official Gazette is the date of issue for the patent.  From that date until either the patent lapses or is found to be unenforceable, the patentee has the exclusive rights to the technology set forth in the patent's claims."
        paragraph3 = "To maintain the enforceability of an issued patent, the patentee must pay regular maintenance fees to the Patent Office.  Currently (as of January 31, 2019), those fees are assessed as follows:"
        paragraph4 = "Failure to pay a maintenance fee results in the patent lapsing."
        paragraph5 = "In most cases, a valid patent that is maintained remains enforceable for a period of twenty years from the date the patent application was first filed."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage