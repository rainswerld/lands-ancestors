import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
// import Image from 'react-bootstrap/Image'
import './StudentRes.css'

function StudentRes() {
  return (
    <div className="bg-color">
    <h1 className="student-header">Student Responses</h1>
    <div className="container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/Ap-2.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/Ap-picture.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/BattleScene.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/CondorVillage.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/Letter1.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/Letter2.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/DadAndSon.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/KilikandTuhuy.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/LeastFavoritePart.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/MalikAndBear.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/OliviaThanksLet.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/PhebeThanksLet.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/RioDelSol.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/ThankYouLet.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/SacredMountain.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/RiodelMarSchool.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/SpanishShips.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/SunPicture.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/ThumbsUp.jpg')}
            alt="student response one" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={require('../../assets/student_responses/VillageScene.jpg')}
            alt="student response one" />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  )
}

export default StudentRes
