import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import TokenDetails from "./tokenDetails";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
class Tokens extends Component {
  render() {
    let contents = (
      <Row>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading2">
            <h2>Rounds of Sale of Tokens</h2>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <Col
            lg={6}
            md={6}
            sm={12}
            className="col-xs-12 text-right col-lg-offset-3 col-md-offset-3"
          >
            <div className="tokens mr-r50">
              <div className="token-name">ICO</div>
              <div className="token-body" style={{ height: 620 }}>
                <p>10,000,000 token presale</p>
                <button className="right-btn">Price 1 Rock - $0.50</button>
                <div className="prices">
                  <h3 className="f-20">Increasing price every week :</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Supply</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1st week</td>
                        <td>$0.5</td>
                        <td>3M</td>
                      </tr>
                      <tr>
                        <td>2nd </td>
                        <td>$0.75</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>3rd</td>
                        <td>$1</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>4th</td>
                        <td>$1.25</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>5th</td>
                        <td>$1.5</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>6th</td>
                        <td>$2</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>7th</td>
                        <td>$2.5</td>
                        <td>1M</td>
                      </tr>
                      <tr>
                        <td>8th</td>
                        <td>$3</td>
                        <td>1M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12 text-right">
            <div className="tokens mr-r50">
              <div className="token-name">ICO</div>
              <div className="token-body" style={{ height: "620px" }}>
                <p>Progress : </p>
                <LinearProgressWithLabel value={12} />
                <br />
                <div className="prices" style={{ textAlign: "right" }}>
                  BNB : <input type="number" />
                  <br />
                  Presale token : <input type="number" />
                  <br />
                  <br />
                  <button
                    className="right-btn"
                    style={{
                      height: "40px",
                      padding: "0 54px",
                      lineHeight: "20px",
                    }}
                  >
                    Buy
                  </button>
                </div>
                <br />
                <input
                  type="number"
                  value="1232"
                  style={{ textAlign: "right" }}
                />{" "}
                {"  "} token Presold
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12 text-right">
            <div className="tokens mr-r50">
              <div className="token-name">For Jazz Holders</div>
              <div className="token-body" style={{ height: "620px" }}>
                <p>Progress : </p>
                <LinearProgressWithLabel value={12} />
                <br />
                <div className="prices" style={{ textAlign: "right" }}>
                  BNB : <input type="number" />
                  <br />
                  Presale token : <input type="number" />
                  <br />
                  <br />
                  <button
                    className="right-btn"
                    style={{
                      height: "40px",
                      padding: "0 54px",
                      lineHeight: "20px",
                    }}
                  >
                    Buy
                  </button>
                  <br />
                  <br />
                  <button
                    className="right-btn"
                    style={{
                      height: "40px",
                      padding: "0 54px",
                      lineHeight: "20px",
                    }}
                  >
                    Approve
                  </button>
                  <br />
                  <br />
                  Jazz token : <input type="number" />
                  <br />
                  Presale token : <input type="number" />
                  <br />
                  <br />
                  <button
                    className="right-btn"
                    style={{
                      height: "40px",
                      padding: "0 54px",
                      lineHeight: "20px",
                    }}
                  >
                    Buy
                  </button>
                </div>
                <br />
                <br />
                <input
                  type="number"
                  value="1232"
                  style={{ textAlign: "right" }}
                />{" "}
                {"  "} token Presold
              </div>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
            <p className="token-con">
              The sale of tokens It is a long established fact that a reader
              will be distracted by the
              <span>
                {" "}
                readable content of a page when looking at its layout.
              </span>
              There are many variations of passages of Lorem Ipsum available.
              There are many variations of passages.
            </p>
          </Col>
        </Col>
      </Row>
    );
    if (this.props.animate) {
      contents = (
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2>Rounds of Sale of Tokens</h2>
              </ReactWOW>
            </div>
          </Col>
          <Col
            lg={12}
            md={12}
            sm={12}
            className="col-xs-12 col-lg-offset-1 col-md-offset-1"
          >
            <ReactWOW animation={this.props.animate} duration="1.3s">
              <Col
                lg={6}
                md={6}
                sm={12}
                className="col-xs-12 text-right col-lg-offset-3 col-md-offset-3"
              >
                <div className="tokens mr-r50">
                  <div className="token-name">ICO</div>
                  <div className="token-body" style={{ height: 620 }}>
                    <p>10,000,000 token presale</p>
                    <button className="right-btn">Price 1 Rock - $0.50</button>
                    <div className="prices">
                      <h3 className="f-20">Increasing price every week :</h3>
                      <table>
                        <thead>
                          <tr>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Supply</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1st week</td>
                            <td>$0.5</td>
                            <td>3M</td>
                          </tr>
                          <tr>
                            <td>2nd </td>
                            <td>$0.75</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>3rd</td>
                            <td>$1</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>4th</td>
                            <td>$1.25</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>5th</td>
                            <td>$1.5</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>6th</td>
                            <td>$2</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>7th</td>
                            <td>$2.5</td>
                            <td>1M</td>
                          </tr>
                          <tr>
                            <td>8th</td>
                            <td>$3</td>
                            <td>1M</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Col>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="1.6s">
              <Col lg={6} md={6} sm={12} className="col-xs-12 text-right">
                <div className="tokens mr-r50">
                  <div className="token-name">ICO</div>
                  <div className="token-body" style={{ height: "620px" }}>
                    <p>Progress : </p>
                    <LinearProgressWithLabel value={12} />
                    <br />
                    <div className="prices" style={{ textAlign: "right" }}>
                      BNB : <input type="number" />
                      <br />
                      Presale token : <input type="number" />
                      <br />
                      <br />
                      <button
                        className="right-btn"
                        style={{
                          height: "40px",
                          padding: "0 54px",
                          lineHeight: "20px",
                        }}
                      >
                        Buy
                      </button>
                    </div>
                    <br />
                    <input
                      type="number"
                      value="1232"
                      style={{ textAlign: "right" }}
                    />{" "}
                    {"  "} token Presold
                  </div>
                </div>
              </Col>
            </ReactWOW>
            <ReactWOW animation={this.props.animate} duration="1.9s">
              <Col lg={6} md={6} sm={12} className="col-xs-12 text-right">
                <div className="tokens mr-r50">
                  <div className="token-name">For Jazz Holders</div>
                  <div className="token-body" style={{ height: "620px" }}>
                    <p>Progress : </p>
                    <LinearProgressWithLabel value={12} />
                    <br />
                    <div className="prices" style={{ textAlign: "right" }}>
                      BNB : <input type="number" />
                      <br />
                      Presale token : <input type="number" />
                      <br />
                      <br />
                      <button
                        className="right-btn"
                        style={{
                          height: "40px",
                          padding: "0 54px",
                          lineHeight: "20px",
                        }}
                      >
                        Buy
                      </button>
                      <br />
                      <br />
                      <button
                        className="right-btn"
                        style={{
                          height: "40px",
                          padding: "0 54px",
                          lineHeight: "20px",
                        }}
                      >
                        Approve
                      </button>
                      <br />
                      <br />
                      Jazz token : <input type="number" />
                      <br />
                      Presale token : <input type="number" />
                      <br />
                      <br />
                      <button
                        className="right-btn"
                        style={{
                          height: "40px",
                          padding: "0 54px",
                          lineHeight: "20px",
                        }}
                      >
                        Buy
                      </button>
                    </div>
                    <br />
                    <br />
                    <input
                      type="number"
                      value="1232"
                      style={{ textAlign: "right" }}
                    />{" "}
                    {"  "} token Presold
                  </div>
                </div>
              </Col>
            </ReactWOW>

            <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
              <ReactWOW animation={this.props.animate} duration="2.2s">
                <p className="token-con">
                  The sale of tokens It is a long established fact that a reader
                  will be distracted by the
                  <span>
                    {" "}
                    readable content of a page when looking at its layout.
                  </span>
                  There are many variations of passages of Lorem Ipsum
                  available. There are many variations of passages.
                </p>
              </ReactWOW>
            </Col>
          </Col>
        </Row>
      );
    }
    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>{contents}</Container>
        </section>
        <TokenDetails animate={this.props.animate} />
      </div>
    );
  }
}

export default Tokens;
