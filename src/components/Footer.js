import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="phantom"></div>
      <div className="footer-middle">
        <div className="footer-bottom text-center">
            <h5>California History from a Native Viewpoint</h5>
            <h5><a href="contact">Contact Us</a></h5>
            <p className="text-xs-center">&copy;{new Date().getFullYear()} Tribal Eye Productions </p>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  .phantom {
    display: block;
    padding: 20px;
    height: 120px;
    width: 100;
  }
  .text-center {
    text-align: center;
  }
  .footer-middle {
    font-size: 20px;
    background: #000;
    margin-top: 10px;
    padding: 5px;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%
  }
`
