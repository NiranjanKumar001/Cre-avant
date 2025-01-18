'use client';

import React from 'react';
import './page.css';

export default function AboutPage() {
  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='img'>
          <img src='./portraits/portrait1.jpg' alt=''/>
        </div>
        <div className='about-nav'>
          <p>Design</p>
          <p>Chill</p>
          <p>Sleep</p>
          <p>Code</p>
        </div>
      </section>


      <section className='about-projects'>
        <div className='img'>
          <img src='./portraits/portrait2.jpg' alt=''/>
        </div>
        <div className='about-projects-brief'>
          <p> thsi is just for fun let do some fun design with complex ui</p>
        </div>

        <div className='col projects-cover'>
          <div className='img'>
            <img src='./portraits/portrait4.jpg' alt=''/>
          </div>
        </div>

        <div className='col projects-list'>
          <div className='projects'>
            <h1>Serendipity</h1>
            <p>Apple music / Spotify / Youtube</p>
          </div>
          <div className='projects'>
            <h1>Euphony</h1>
            <p>Apple music / Spotify / Youtube</p>
          </div>
          <div className='projects'>
            <h1>Solstice</h1>
            <p>Apple music / Spotify / Youtube</p>
          </div>
          <div className='projects'>
            <h1>Zephyr</h1>
            <p>Apple music / Spotify / Youtube</p>
          </div>
        </div>
      </section>


      <section className='about-about'>
        <div className='col intro'>
          <p>Introduction</p>
          <p>
            I am a designer and developer with a passion for creating innovative and user-friendly experiences. With a
          </p>
        </div>
        <div className='col portrait'>
          <div className='portrait-container'>
            <div className='img'>
              <img src='./portraits/portrait7.jpg' alt=''/>
              </div>
          </div>
        </div>
      </section>


      <section className='about-banner'>
        <div className='img'>
          <img src='./portraits/portrait9.jpg' alt=''/>
        </div>

        <div className='about-banner-copy'>
          <p> what you</p>
          <h1>About the Design</h1>
          <p>
            this is what it is what do to do what not to tell me something what you want to do
          </p>
          <button>Let’s Glow</button>
        </div>
      </section>


      <section className='about-footer'>
        <div className='col'>
          <p>Instagram / TikTok / Discord</p>
          <div className='footer-links'>
            <p>Menu</p>
            <h1>Tour</h1>
            <h1>Projects</h1>
            <h1>About</h1>
            <h1>Contact</h1>
          </div>
        </div>
        <div className='col'>
          <p>
            join the community<br/>
            <button>Rizz</button>
          </p>
          <div className='shop'>
            <div className='img'>
              <img src='./portraits/portrait10.jpg' alt=''/>
            </div>
          </div>

          <p>
            Spotify / Apple Music / Youtube
          </p>
        </div>
      </section>
    </div>
  );
}