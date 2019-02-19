import React from "react";
import Content from "../Content";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-2">
              <div className="section">
                  <strong>
                  <PageContent className="content" content={content} />
                  <div>Articles</div>
                  </strong>
                  <u>
                  <Link to="/what_a_patent_is">
                    WHAT A PATENT IS (AND WHAT IT IS NOT)
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">
                    WHAT SHOULD BE PATENTED (AND WHAT SHOULD NOT)
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">
                    PROTOTYPING AND INVENTION PROMOTION FIRMS
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">
                    PATENT OFFICE FEES AND DISCOUNTS
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">PATENT SEARCHES</Link>
                  <br />
                  <Link to="/what_a_patent_is">
                    PROVISIONAL PATENT APPLICATIONS
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">
                    UTILITY PATENT APPLICATIONS
                  </Link>
                  <br />
                  <Link to="/what_a_patent_is">PATENT PROSECUTION</Link>
                  <br />
                  <Link to="/what_a_patent_is">ISSUANCE AND MAINTENANCE</Link>
                  <br />
                  <Link to="/what_a_patent_is">FOREIGN PATENT PROTECTION</Link>
                  <br />
                  <Link to="/what_a_patent_is">LICENSING AND ENFORCEMENT</Link>
                  <br />
                  <Link to="/what_a_patent_is">ENGAGING OUR FIRM</Link>
                </u>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default AboutPageTemplate;
