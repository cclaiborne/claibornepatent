import React from "react";
import Content from "../Content";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const AboutPageTemplate = ({ title, attorney,content, contentComponent }) => {
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
                  <div id="attorney">{attorney}</div>
                  </strong>
                  <u>
                  <Link to="AboutPatenting/what_a_patent_is">
                    WHAT A PATENT IS (AND WHAT IT IS NOT)
                  </Link>
                  <br />
                  <Link to="AboutPatenting/what_should_be_patented">
                    WHAT SHOULD BE PATENTED (AND WHAT SHOULD NOT)
                  </Link>
                  <br />
                  <Link to="AboutPatenting/invention_promotion_and_prototyping_firms">
                    INVENTION PROMOTION AND PROTOTYPING FIRMS
                  </Link>
                  <br />
                  <Link to="AboutPatenting/patent_office_fees_and_discounts">
                    PATENT OFFICE FEES AND DISCOUNTS
                  </Link>
                  <br />
                  <Link to="AboutPatenting/patent_searches">PATENT SEARCHES</Link>
                  <br />
                  <Link to="AboutPatenting/provisional_patent_applications">
                    PROVISIONAL PATENT APPLICATIONS
                  </Link>
                  <br />
                  <Link to="AboutPatenting/utility_patent_applications">
                    UTILITY PATENT APPLICATIONS
                  </Link>
                  <br />
                  <Link to="AboutPatenting/patent_prosecution">PATENT PROSECUTION</Link>
                  <br />
                  <Link to="AboutPatenting/issuance_and_maintenance">ISSUANCE AND MAINTENANCE</Link>
                  <br />
                  <Link to="AboutPatenting/foreign_patent_protection">FOREIGN PATENT PROTECTION</Link>
                  <br />
                  <Link to="AboutPatenting/licensing_and_enforcement">LICENSING AND ENFORCEMENT</Link>
                  <br />
                  <Link to="AboutPatenting/engaging_our_firm">ENGAGING OUR FIRM</Link>
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
