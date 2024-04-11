import React from 'react'
import './style.scss';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} className='gif-container'>
        <img src="https://i.giphy.com/zhRA0okWxTGiu78uSk.webp" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p><a href="https://giphy.com/gifs/theoffice-the-office-tv-episode-801-zhRA0okWxTGiu78uSk"></a></p>
      <div className='home-container'>
        <h4 className='home-title'>
          Welcome to you're meditation session! <br/><br/> 
          Open the hamburger menu' where you can choose your favourite type of session.
        </h4>
      </div>
    </>
  )
}

export default Home;
