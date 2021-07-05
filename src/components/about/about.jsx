import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import aboutimg from '../../assets/images/about/1.png';

class About extends Component {
  render() {
    let page = (
      <Row>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-content">
            <h2 className="f-40 fw-400">
            What is Rock Finance?
            </h2>
            <p>What is Rock Finance?</p>
            <p>Lately, many DeFi platforms have emerged, but most of them have failed to present a unique use case with real world applications to stimulate the usage of the token’s ecosystem. </p>
            <p>We believe this platform will not only give the holders an opportunity to invest, it will also be a whole lot of fun. Prepare for live concerts, charity auctions, battle of the bands and many games to be fully entertained at Rock Finance and support our music industry.</p>
            <div className="buttons">
              <Link to="#" className="btn1">WHITEPAPER</Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-img">
            <img src={aboutimg} alt="about" />
          </div>
        </Col>
      </Row>
    )
    if (this.props.animate) {
      page = (
        <Row>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <div className="about-content">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2 className="f-40 fw-400">
                What is Rock Finance?
                    </h2>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <p>Rock Finance is a decentralized finance platform aiming to unite investors, rock fans and musicians all over the world with the goal of impacting the growth and development of the rock music industry. </p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.6s">
                <p>Lately, many DeFi platforms have emerged, but most of them have failed to present a unique use case with real world applications to stimulate the usage of the token’s ecosystem. </p>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <p>We believe this platform will not only give the holders an opportunity to invest, it will also be a whole lot of fun. Prepare for live concerts, charity auctions, battle of the bands and many games to be fully entertained at Rock Finance and support our music industry.</p>
              </ReactWOW>
              <div className="buttons">
                <Link to="#" className="btn1">WHITEPAPER</Link>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <ReactWOW animation={this.props.animate} duration="1s">
              <div className="about-img">
                <img src={aboutimg} alt="about" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      )
    }
    return (
      <div id='about' className="wd_scroll_wrap wd_scroll">
        <div className="about-area pd-t70 pd-b100">
          <Container>
            {page}
          </Container>
        </div>
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill: this.props.fill ? this.props.fill : '#10122d'  }} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
              </g>
            </svg>
        </div>
      </div>
    );
  }
}

export default About;