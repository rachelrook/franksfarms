import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import './Navbar.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/green-sky.mp4' autoPlay loop muted fixed /> */}
      {/* <h1>AYAM CEMANI CHICKENS</h1> */}
      
      <div className='center'>
      <Link to="https://franksfarms.com/aboutme">
        <img className='circle-me' src='/images/me-pink-brick.jpg' alt="Rachel Headshot"/>
        </Link>
      </div>
      {/* <Button 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>Resume</Button> */}
      
      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div> */}
    </div>
  );
}

export default HeroSection;