import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import Particles from 'react-particles-js';
import Countdown from '../countdown/countdown';


class MainSlider extends Component {
  render() {
    const data = [
      {
        title: "Rock Token - For Music and Casino",
        btn1: 'WHITEPAPER',
      }
    ]
    const Items = data.map((obj, i) => (
      <div className="item" key={i}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="col-xs-12">
              <div className="slider-content">
                <ul>
                  <li className="slider_social_icon1">
                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                  </li>
                  <li className="slider_social_icon2">
                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                  </li>
                  <li className="slider_social_icon3">
                    <Link to="#"><i className="fa fa-send-o"></i></Link>
                  </li>
                  <li className="slider_social_icon4">
                    <Link to="#"><i className="fa fa-bitcoin"></i></Link>
                  </li>
                  <li className="slider_social_icon5">
                    <Link to="#"><i className="fa fa-envelope"></i></Link>
                  </li>
                </ul>
                <h2>{obj.title}</h2>
                <div className="buttons">
                  <Link to="#" className="btn1" >{obj.btn1}</Link>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="col-xs-12 hidden-xs hidden-sm">
              <Countdown timeTillDate="12 30 2019, 6:00 am" timeFormat="MM DD YYYY, h:mm a" />
            </Col>
          </Row>
        </Container>
      </div >
    ))
    return (
      <div className="slider-area">
      
        <Particles
          style={{ width: window.innerWidth + 'px', height: window.innerHeight + 'px' }}
          params={{
            "particles": {
              "number": {
                "value": 70
              },
              "size": {
                "value": 5
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                }
              }
            }
          }} />

      
        <div className="carousel">
            {Items}
        </div>

      </div>
    );
  }
}

export default MainSlider;