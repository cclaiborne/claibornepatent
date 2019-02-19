import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { Link } from "gatsby"

const QualificationsPageTemplate = ({title, content, contentComponent, captiontext1, companytitle4, companydescription4, companytitle3, companydescription3, companytitle2, companydescription2, companytitle1, companydescription1}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='hero is-primary is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-8 is-offset-0'>
              <div className='section'>
                <PageContent className='content' content={content} />
                <table>
                 <caption>{captiontext1}</caption>
                 <tr><td class = "organization">{companytitle4}</td><td>{companydescription4}</td></tr>
                 <tr><td class = "organization">{companytitle3}</td><td>{companydescription3}</td></tr>
                 <tr><td class = "organization">{companytitle2}</td><td>{companydescription2}</td></tr>
                 <tr><td class = "organization">{companytitle1}</td><td>{companydescription1}</td></tr>
                </table>
                <table>
                 <caption>Credentials</caption>
                 <tr><td class = "organization">Admitted to Bar:</td><td><ul><li>United States Patent and Trademark Office, 1995</li><li>Washington State, 2002</li><li>New Mexico, 2007</li><li>Colorado, 1989 (inactive)</li></ul></td></tr>
                 <tr><td class = "organization">Education:</td><td><ul><li>B.S. Mathematics with distinction, 1973 (University of New Mexico)</li><li>B.A. Chemistry, 1973 (University of New Mexico)</li><li>Juris Doctor, 1989 (University of Denver)</li></ul></td></tr>
                 <tr><td class = "organization">Affiliatons:</td><td><ul><li>Member, Institute of Electrical and Electronics Engineers</li><li>Member, Association of Computing Machinery</li><li>Member, Washington State Bar</li><li>Member, New Mexico State Bar</li></ul></td></tr>
                </table>
              </div>
            </div>
            <div className='column is-4 is-offset-0'>
              <div id="boxshadow"><img   src="http://www.claibornepatent.com/picture.jpg"></img>Anthony Claiborne, Registered Patent Attorney</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

QualificationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default QualificationsPageTemplate
