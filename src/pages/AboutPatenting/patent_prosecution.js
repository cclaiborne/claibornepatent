import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "WHAT A PATENT IS (AND WHAT IT IS NOT)"
        paragraph1 = "After a non-provisional patent application is filed with the U.S. Patent Office, it is (eventually) assigned to a patent examiner for examination.  The examiner will review the claims in the application and make a determination as to whether the claims clearly specify the invention and, if so, whether the claimed invention is novel and non-obvious in light of related art considered by the examiner.  The examiner will then mail correspondence called an &quot;office action&quot; setting forth the examiner's determinations."
        paragraph2 = "Frequently, the first office action to a patent application will reject one or more claims in the application, typically because the examiner believes either that the specification did not clearly describe the invention that is claimed, or that the claimed invention is not novel or is obvious in light of prior art.  If the applicant does not respond to an office action within the time permitted by law (depending on the stage of examination), the patent application will be deemed to be abandoned."
        paragraph3 = "Patent prosecution is the process of responding to office actions to move the patent application forward to eventual allowance as a patent, if possible."
        paragraph4 = "The applicant's response may be simply to provide argument to persuade the examiner to change the determination set forth in the office action.  Sometimes the applicant amends the application in response to the examiner's rejections, in an attempt to make the application allowable."
        paragraph5 = "The patent application, office actions and applicant's responses and optional amendments comprise the official legal history of the patent prosecution, sometimes called the &quot;file wrapper.&quot;"
        paragraph6 = "Following second and subsequent office actions, the applicant has the additional option to appeal an examiner's determination to the Patent Trial and Appeal Board.  The Patent Office requires additional fees for appealing.  An applicant may further appeal an adverse decision by the Board to federal court (either the United States District Court for the Eastern District of Virginia or the Court of Appeals for the Federal Circuit)."
        paragraph7 = "Patent prosecution ends either when the patent application becomes abandoned or when the patent issues."
        paragraph8 = "Because the time and effort necessary to prosecute a patent application vary greatly from case to case, our office does not have a fixed fee for patent prosecution but rather charges an hourly rate for such services."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage