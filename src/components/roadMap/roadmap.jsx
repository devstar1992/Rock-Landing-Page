import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Guitar from "../../assets/images/roadmap/Guitar-neck-3.png";
import { GiLightBulb, GiOldMicrophone } from "react-icons/gi";
import {IoRocketOutline} from "react-icons/io5";
class Roadmap extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <section className="road_map-area section">
          <Row>
            <Col lg={4} md={4} sm={4} className="col-xs-12">
              <div style={{marginTop:'250px'}}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiLightBulb />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div class="elementor-divider">
                      <span class="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q2 2021</h2>
                    <p>May – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>
                        Project Ideation
                      </li>
                      <li>
                      Tokenomics
                      </li>
                      <li>
                      Social Media Platform Creation
                      </li>
                      <li>
                      Core Team Recruitment
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div style={{marginTop:'250px'}}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <IoRocketOutline />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div class="elementor-divider">
                      <span class="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>Q3 2021</h2>
                    <p>August – September</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>
                      Platform Launch 
                      </li>
                      <li>
                      Swap/Exchange
                      </li>
                      <li>
                      Staking and Farming
                      </li>
                      <li>
                      Referral Program
                      </li>
                      <li>
                      Marketing Campaigns
                      </li>
                      <li>
                      Partnerships
                      </li>
                      <li>
                      CMC/CG/ DAppRadar Listings
                      </li>
                      <li>
                      Initial Audits
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div style={{marginTop:'300px'}}>
                <Row>
                  <Col lg={5} md={5} sm={5} xs={5}>
                    <div className="elementor-icon">
                      <GiOldMicrophone />
                    </div>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7}>
                    <div class="elementor-divider">
                      <span class="elementor-divider-separator"></span>
                    </div>
                  </Col>
                </Row>
                <Row className="mr-t10">
                  <Col lg={5} md={5} sm={5} xs={5} className={"titles"}>
                    <h2>2022</h2>
                    <p>January – June</p>
                  </Col>
                  <Col lg={7} md={7} sm={7} xs={7} className="contents">
                    <ul>
                      <li>
                        Project Ideation
                      </li>
                      <li>
                      Tokenomics
                      </li>
                      <li>
                      Social Media Platform Creation
                      </li>
                      <li>
                      Core Team Recruitment
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} className="col-xs-12">
              <img src={Guitar} alt="Guitar" />
            </Col>
            <Col lg={4} md={4} sm={4} className="col-xs-12"></Col>
          </Row>
        </section>
        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt"></div>
                </Col>
              </Row>
            </Container>
          </section>
          <div className="sud roadmap">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 1920 181.1"
              style={{ enableBackground: "new 0 0 1920 181.1" }}
              space="preserve"
            >
              <g>
                <path
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: this.props.fill ? this.props.fill : "#10122d",
                  }}
                  className="st0"
                  d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Roadmap;
