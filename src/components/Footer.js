import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="phantom"></div>
      <div className="footer-middle">
        <div className="footer-bottom">
            <h5 className="text-center">California History from a Native Viewpoint</h5>
            <p className="text-xs-center text-center">&copy;{new Date().getFullYear()} Lands Of Our Ancestors </p>
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
    height: 100px;
    width: 100;
  }
  .text-center {
    text-align: center;
  }
  .footer-middle {
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
