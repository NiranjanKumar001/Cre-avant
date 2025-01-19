'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-black-200 text-center">
          About Cre-avant
        </h1>
        
        <div className="space-y-6 text-black-100">
          <p className="text-lg leading-relaxed">
            Welcome to Cre-avant, where creativity meets innovation. We are passionate
            about pushing the boundaries of digital experiences and creating meaningful
            connections through technology.
          </p>

          <div className="bg-white-100 p-6 rounded-lg border-2 border-black shadow-100 text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              To revolutionize digital experiences by combining cutting-edge technology
              with creative design, making the web more interactive and engaging for
              everyone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-8 text-center">
            <div className="bg-white p-6 rounded-lg border-2 border-black shadow-100">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>
                We constantly explore new technologies and creative approaches to
                deliver unique digital experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border-2 border-black shadow-100 text-center">
              <h3 className="text-xl font-semibold mb-3">Creativity</h3>
              <p>
                Our team combines artistic vision with technical expertise to create
                memorable digital solutions.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-primary-100 p-8 rounded-lg border-2 border-black shadow-200 text-center">
            <h2 className="text-2xl font-semibold mb-4">Let's Create Together</h2>
            <p className="text-lg mb-4">
              We're always excited to collaborate on new projects and push the
              boundaries of what's possible on the web.
            </p>
            <button className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}