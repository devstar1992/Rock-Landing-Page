import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import featureSolo from "../../assets/images/features/Solos W.png";
import featureDuo from "../../assets/images/features/Duos W.png";
import featureJame from "../../assets/images/features/Jam Sessions W.png";
import featureMosh from "../../assets/images/features/Mosh Pit W.png";
import featureEncore from "../../assets/images/features/Encore W.png";
import featureLottery from "../../assets/images/features/Lottery W.png";
import featureGame from "../../assets/images/features/Games W.png";
import featureBattle from "../../assets/images/features/Battle of the Bands W.png";
import featureRecording from "../../assets/images/features/Recording Studio W.png";

class Features extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h2>Our Features</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="featured-lists">
              <ul>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Solos</h2>
                      <p>Stake tokens to earn Rock!</p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureSolo} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Solos</h2>
                      <p>Stake tokens to earn Rock!</p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Dúos</h2>
                      <p>Stake your LPs to earn Rock!</p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureDuo} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Dúos</h2>
                      <p>Stake your LPs to earn Rock!</p>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Jam Sessions</h2>
                      <p>
                        Stake Rock or LPs to earn other tokens in a competitive
                        and time sensitive yield reward.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureJame} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Jam Sessions</h2>
                      <p>
                        Stake Rock or LPs to earn other tokens in a competitive
                        and time sensitive yield reward.{" "}
                      </p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Mosh Pit</h2>
                      <p>
                        Stake Rock or LPs in a time-locked vault with
                        auto-compounding. <br />
                        Earn Rock + our reward token Amped when committing your
                        tokens to a Mosh Pit.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureMosh} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Mosh Pit</h2>
                      <p>
                        Stake Rock or LPs in a time-locked vault with
                        auto-compounding. <br />
                        Earn Rock + our reward token Amped when committing your
                        tokens to a Mosh Pit.{" "}
                      </p>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Encore</h2>
                      <p>
                        Who doesn’t like an additional performance?
                        <br />
                        Rock gives you the opportunity to generate additional
                        income by referring people to the platform.
                        <br />
                        You will earn 3% of their earning for life. Share and
                        earn!
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureEncore} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Encore</h2>
                      <p>
                        Who doesn’t like an additional performance?
                        <br />
                        Rock gives you the opportunity to generate additional
                        income by referring people to the platform.
                        <br />
                        You will earn 3% of their earning for life. Share and
                        earn!
                      </p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Lucky Draw</h2>
                      <p>
                        Use Rock or Amped tokens to participate in lotteries.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureLottery} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Lucky Draw</h2>
                      <p>
                        Use Rock or Amped tokens to participate in lotteries.{" "}
                      </p>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Games</h2>
                      <p>
                        Play some casino games like slot machine, poker and
                        roulette.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureGame} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Games</h2>
                      <p>
                        Play some casino games like slot machine, poker and
                        roulette.{" "}
                      </p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Battle of the Bands</h2>
                      <p>
                        Live performances, charity auctions and competitive
                        fundraising to support musicians and upcoming rockstars.{" "}
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureBattle} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Battle of the Bands</h2>
                      <p>
                        Live performances, charity auctions and competitive
                        fundraising to support musicians and upcoming rockstars.{" "}
                      </p>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Recording Studio</h2>
                      <p>
                        NFT platform where artists can tokenize music, videos,
                        fan art and other creations in a copyright safe
                        environment free of intermediaries.
                      </p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <div className="feature-image-container">
                          <img src={featureRecording} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Recording Studio</h2>
                      <p>
                        NFT platform where artists can tokenize music, videos,
                        fan art and other creations in a copyright safe
                        environment free of intermediaries.
                      </p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Rock Finance Shop</h2>
                      <p>
                        A true Rock fan always represents.
                        <br />
                        Get your gear and be an ambassador of our platform.
                      </p>
                    </div>{" "}
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <div className="feature-image-container">
                          <img src={""} alt="" />
                        </div>
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Rock Finance Shop</h2>
                      <p>
                        A true Rock fan always represents.
                        <br />
                        Get your gear and be an ambassador of our platform.
                      </p>
                    </div>{" "}
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
    if (this.props.animate) {
      con = (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading2">
                <ReactWOW animation={this.props.animate} duration="1s">
                  <h2>Our Features</h2>
                </ReactWOW>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="featured-lists">
                <ul>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Solos</h2>
                          <p>Stake tokens to earn Rock!</p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureSolo} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Solos</h2>
                          <p>Stake tokens to earn Rock!</p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Dúos</h2>
                          <p>Stake your LPs to earn Rock!</p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureDuo} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Dúos</h2>
                          <p>Stake your LPs to earn Rock!</p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Jam Sessions</h2>
                          <p>
                            Stake Rock or LPs to earn other tokens in a
                            competitive and time sensitive yield reward.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureJame} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Jam Sessions</h2>
                          <p>
                            Stake Rock or LPs to earn other tokens in a
                            competitive and time sensitive yield reward.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />
                            services and make purchases.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureMosh} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />
                            services and make purchases.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="2.3s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Encore</h2>
                          <p>
                            Who doesn’t like an additional performance?
                            <br />
                            Rock gives you the opportunity to generate
                            additional income by referring people to the
                            platform.
                            <br />
                            You will earn 3% of their earning for life. Share
                            and earn!
                          </p>
                        </div>
                      </Col>{" "}
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.3s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureEncore} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.3s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Encore</h2>
                          <p>
                            Who doesn’t like an additional performance?
                            <br />
                            Rock gives you the opportunity to generate
                            additional income by referring people to the
                            platform.
                            <br />
                            You will earn 3% of their earning for life. Share
                            and earn!
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.5s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Lucky Draw</h2>
                          <p>
                            Use Rock or Amped tokens to participate in
                            lotteries.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.5s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureLottery} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.5s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Lucky Draw</h2>
                          <p>
                            Use Rock or Amped tokens to participate in
                            lotteries.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="2.7s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Games</h2>
                          <p>
                            Play some casino games like slot machine, poker and
                            roulette.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.7s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureGame} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.7s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Games</h2>
                          <p>
                            Play some casino games like slot machine, poker and
                            roulette.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.9s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Battle of the Bands</h2>
                          <p>
                            Live performances, charity auctions and competitive
                            fundraising to support musicians and upcoming
                            rockstars.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.5s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureBattle} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.5s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Battle of the Bands</h2>
                          <p>
                            Live performances, charity auctions and competitive
                            fundraising to support musicians and upcoming
                            rockstars.{" "}
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="3.1s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Recording Studio</h2>
                          <p>
                            NFT platform where artists can tokenize music,
                            videos, fan art and other creations in a copyright
                            safe environment free of intermediaries.
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="3.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <div className="feature-image-container">
                              <img src={featureRecording} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="3.1s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Recording Studio</h2>
                          <p>
                            NFT platform where artists can tokenize music,
                            videos, fan art and other creations in a copyright
                            safe environment free of intermediaries.
                          </p>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="3.3s">
                    <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Rock Finance Shop</h2>
                      <p>
                        A true Rock fan always represents.
                        <br />
                        Get your gear and be an ambassador of our platform.
                      </p>
                    </div>{" "}
                  </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="3.3s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <div className="feature-image-container">
                              <img src={""} alt="" />
                            </div>
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="3.3s">
                    <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Rock Finance Shop</h2>
                      <p>
                        A true Rock fan always represents.
                        <br />
                        Get your gear and be an ambassador of our platform.
                      </p>
                    </div>{" "}
                  </Col>

                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">{con}</section>
      </div>
    );
  }
}

export default Features;
