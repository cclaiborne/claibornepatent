import React from 'react'
import Layout from '../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "WHAT A PATENT IS (AND WHAT IT IS NOT)"
        paragraph1 = "A patent is a grant by the federal government to the patent owner (the &quot;patentee&quot;) of the right to exclude others from making, using, selling or importing the invention."
        paragraph2 = "When most people think of patents, they think of utility patents, which are patents issued for the functional aspects of products and processes (there are two other kinds of patents, design patents and plant patents, which aren't discussed here)."
        paragraph3 = "Patents do not protect mere &quot;ideas&quot;.  Rather, they protect structures and methods that apply technological concepts."
        paragraph4 = "A patent is not a grant of a right to use the patented technology.  Rather, it is a right to exclude or prevent others (&quot;infringers&quot;) from using the technology defined in the patent claims.  The patentee might not be able itself to use the technology of the patent because it is merely an improvement on technology previously patented by another.  In that event, a license from the previous patentee is needed."
        paragraph5 = "A U.S. patent is enforceable against infringers from the date it is issued by the Patent Office until it expires (generally twenty years from the date a patent application is filed)."
        paragraph6 = "A U.S. patent is presumed to be valid, and that presumption can be overcome in litigation only by clear and convincing evidence presented by a challenger of the patent."
        paragraph7 = "A useful invention may be patented 1) if it is &quot;novel&quot;, meaning that it was not anticipated by being identical to technology disclosed in a single piece of &quot;prior art&quot; as defined in the Patent Code; and 2) if it is &quot;non-obvious&quot;, meaning that the technology, although new, is also different enough that it is not obvious in view of the prior art."
        paragraph8 = "&quot;Prior art&quot; under the Patent Code is any information in any form, relevant to the inventor's claims of originality, that has been made available to the public before the effective filing date of the inventor's patent application. If an invention has been described or otherwise disclosed in the prior art or would have been obvious in light of what has been disclosed in the prior art, the invention is not entitled to a patent."
    />
    </div> 
)
export default NewPage