import React from 'react'
import Layout from '../../layouts'
import { Link } from "gatsby"
import AboutElementPageTemplate from '../../components/AboutElementPageTemplate'
const NewPage = () => (
   <div>
    <AboutElementPageTemplate 
        title = "LICENSING AND ENFORCEMENT OF PATENTS"
        paragraph1 = "A U.S. patent is an exclusive right to make, have made, use, sell or import the patented invention within the U.S. during the period of enforceablity of the patent."
        paragraph2 = "One who violates a patent owner's exclusive rights in the patent is liable to the owner for patent infringement.  A patent is infringed when one or more claims of the patent are infringed.  A patent owner may also hold a party liable who induces another to commit acts of infringement, or who contributes to that infringement."
        paragraph3 = "A patent owner is entitled to an injunction from a federal court, ordering the infringer not to commit further acts of infringement."
        paragraph4 = "A patent owner is also entitled to damages to compensate for the infringement, which are to be at least a reasonable royalty rate for the use made of the invention by the infringer.  If the infringer's conduct was willful or deliberate, the court may increase the damages awarded to the patent owner up to threefold."
        paragraph5 = "To avoid liability to the patentee for infringement, a party wishing to use the technology needs to have a license from the patentee granting the licensee such a right.  Money paid to the patentee by the licensee for the license is called a license fee or royalty."
        hideFeeTable = "true"
    />
    </div> 
)
export default NewPage