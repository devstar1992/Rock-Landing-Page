import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import ModalVideo from "react-modal-video";
import poster from "../../assets/images/video/1.png";
import video2 from "../../assets/images/video/2.png";
import video3 from "../../assets/images/video/3.png";
import video4 from "../../assets/images/video/4.png";
import video5 from "../../assets/images/video/5.png";
import video6 from "../../assets/images/video/6.png";
import video7 from "../../assets/images/video/7.png";
import video8 from "../../assets/images/video/8.png";
import video9 from "../../assets/images/video/9.png";
import video11 from "../../assets/images/video/11.png";
import "react-modal-video/scss/modal-video.scss";
import "video.js/dist/video-js.min.css";

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
    let titleAni = (
      <h2>
        Development of Rock token
        <br />
        (Road Map)
      </h2>
    );
    let contents = (
      <ul>
        <li>
          <div className="guitar-start"></div>
          <span className="years">
            <span className="con">2021</span>
          </span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs">
                      <img src={video2} alt="video" />
                    </div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>Idea & Tokenomics & Recruiment</h3>
                      <p>
                        Project Ideation <br />
                        Tokenomics <br />
                        Social Media Platform Creation <br />
                        Core Team Recruitment
                      </p>
                      <p>( Q1 )</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <h3>
                        Market Research
                        <br /> & ICO
                      </h3>
                      <p>
                        ICO Website <br />
                        ICO Listings
                      </p>
                      <p>( Q2 )</p>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs">
                      <img src={video3} alt="video" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs">
                      <img src={video6} alt="video" />
                    </div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>Presale</h3>
                      <p>
                        Pre-Sale ICO Launch <br />
                        ICO Offerings to Jazz Holders
                      </p>
                      <p>( Q3 )</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <h3>
                        Rock Finance <br />
                        Platform Launch
                      </h3>
                      <p>
                        Swap/Exchange <br />
                        Solos/Duos
                        <br />
                        /Jam Sessions <br />
                        Encore
                      </p>
                      <p>( Q3 )</p>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs">
                      <img src={video8} alt="video" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs">
                      <img src={video11} alt="video" />
                    </div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>
                        Marketing <br /> Campaigns (1)
                      </h3>
                      <p>
                        Mosh Pit <br />
                        Casino Games <br />
                        Lucky Draw <br />
                        New Reward Token Amped
                      </p>
                      <p>( Q4 )</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <h3>
                        Marketing <br />
                        Campaigns (2)
                      </h3>
                      <p>
                        Rock Finance Shop
                        <br />
                        CMC / CG / <br /> DAppRadar Listings
                        <br />
                        Audits
                      </p>
                      <p>( Q4 )</p>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs">
                      <img src={video4} alt="video" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years">
            <span className="con">2022</span>
          </span>
          <div className="serials" style={{ padding: "100px 0 100px 0" }}>
            <span className="cre"></span>
            <Col sm={12} className="col-xs-12 center-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs">
                      <img src={video9} alt="video" />
                    </div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>
                        Battle of the Bands Recording Studio <br />
                        New Partnerships <br />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
      </ul>
    );
    if (this.props.animate) {
      titleAni = (
        <ReactWOW animation={this.props.animate} duration="1s">
          <h2>
            Development of Rock token
            <br />
            (Road Map)
          </h2>
        </ReactWOW>
      );
      contents = (
        <ul>
          <li>
            <div className="guitar-start"></div>
            <span className="years">
              <span className="con">2021</span>
            </span>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="1s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs">
                          <img src={video2} alt="video" />
                        </div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>Idea & Tokenomics & Recruiment</h3>
                          <p>
                            Project Ideation <br />
                            Tokenomics <br />
                            Social Media Platform Creation <br />
                            Core Team Recruitment
                          </p>
                          <p>( Q1 )</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <h3>
                            Market Research
                            <br /> & ICO
                          </h3>
                          <p>
                            ICO Website <br />
                            ICO Listings
                          </p>
                          <p>( Q2 )</p>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs">
                          <img src={video3} alt="video" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="1.6s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs">
                          <img src={video6} alt="video" />
                        </div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>Presale</h3>
                          <p>
                            Pre-Sale ICO Launch <br />
                            ICO Offerings to Jazz Holders
                          </p>
                          <p>( Q3 )</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.9s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <h3>
                            Rock Finance <br />
                            Platform Launch
                          </h3>
                          <p>
                            Swap/Exchange <br />
                            Solos/Duos
                            <br />
                            /Jam Sessions <br />
                            Encore
                          </p>
                          <p>( Q3 )</p>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs">
                          <img src={video8} alt="video" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
            <div className="serials">
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="2.2s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs">
                          <img src={video11} alt="video" />
                        </div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>
                            Marketing <br /> Campaigns (1)
                          </h3>
                          <p>
                            Mosh Pit <br />
                            Casino Games <br />
                            Lucky Draw <br />
                            New Reward Token Amped
                          </p>
                          <p>( Q4 )</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="2.5s">
                <Col sm={6} className="col-xs-12 right-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="content">
                          <h3>
                            Marketing <br />
                            Campaigns (2)
                          </h3>
                          <p>
                            Rock Finance Shop
                            <br />
                            CMC / CG / <br /> DAppRadar Listings
                            <br />
                            Audits
                          </p>
                          <p>( Q4 )</p>
                        </div>
                      </div>
                      <div className="dright">
                        <div className="imgs">
                          <img src={video4} alt="video" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
          </li>
          <li>
            <span className="years">
              <span className="con">2022</span>
            </span>
            <div className="serials" style={{ padding: "100px 0 100px 0" }}>
              <span className="cre"></span>
              <ReactWOW animation={this.props.animate} duration="1s">
                <Col sm={6} className="col-xs-12 left-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs">
                          <img src={video2} alt="video" />
                        </div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>Idea & Tokenomics & Recruiment</h3>
                          <p>
                            Project Ideation <br />
                            Tokenomics <br />
                            Social Media Platform Creation <br />
                            Core Team Recruitment
                          </p>
                          <p>( Q1 )</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <Col sm={12} className="col-xs-12 center-con">
                  <div className="box-con">
                    <div className="dbox">
                      <div className="dleft">
                        <div className="imgs">
                          <img src={video9} alt="video" />
                        </div>
                      </div>
                      <div className="dright">
                        <div className="content">
                          <h3>
                            Battle of the Bands Recording Studio <br />
                            New Partnerships <br />
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </ReactWOW>
            </div>
          </li>
        </ul>
      );
    }
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <section className="video-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="videos-heding">{titleAni}</div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt">{contents}</div>
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
