import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { Link } from "gatsby"



const AboutPageTemplate = ({title, content, contentComponent, Counter, paragraph1, paragraph2, paragraph3,
   paragraph4, paragraph5, paragraph6, paragraph7, paragraph8}) => {
  const PageContent = contentComponent || Content

var count = 0;

  function assignYellowClass(){
    count++;
    if (count % 2 == 0){
      return "yellow-background"
    }
  }

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
      <section className='section white-background'>
        <div className='container '>
          <div className='columns'>
          <div className='column is-2'>
          <Link to='/about'>
                <img hspace= "5" width= "14px" height= "14px" src="/img/left-arrow.png"></img>
                  About Patenting
          </Link>
          </div>
            <div className='column is-10'>
                <p className={assignYellowClass()}>{paragraph1}</p>
                <p className={assignYellowClass()}>{paragraph2}</p>
                <p className={assignYellowClass()}>{paragraph3}</p>
                <p className={assignYellowClass()}>{paragraph4}</p>
                <p className={assignYellowClass()}>{paragraph5}</p>
                <p className={assignYellowClass()}>{paragraph6}</p>
                <p className={assignYellowClass()}>{paragraph7}</p>
                <p className={assignYellowClass()}>{paragraph8}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default AboutPageTemplate
