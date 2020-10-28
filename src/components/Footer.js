import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Lorem Ipsum</h4>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Lorem Ipsum</h4>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Lorem Ipsum</h4>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4>Lorem Ipsum</h4>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-xs-center">&copy;{new Date().getFullYear()} Lands Of Our Ancestors </p>
        </div>
      </div>
    </div>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  .footer-middle {
    background: #000;
    margin-top: 10px;
    padding: 5px;
    color: #fff;
  }
`
