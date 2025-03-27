import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm <span className='text-green-300 font-bold'>Smeet Agrawal</span>, a 2025 B.Tech graduate🎓 from DA-IICT with a strong passion for 
              <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/smeet-agrawal-2b0911292/' target='_blank'> Software Development</a>, 
              Data Science, and Big Data Analytics. I specialize in MERN stack and Django🚀, building scalable applications and data-driven solutions.
              <br />
              ✍️ I love diving into AI and system design, always eager to explore new challenges. I’ve developed projects like an 
              <a className='text-purple-300 hover:text-purple-400 duration-300' href="https://github.com/Smeet23" target='_blank'> E-commerce platform</a>, 
              News Aggregator, and HR Analytics, merging innovation with user-centric solutions. 
              <br />
              🌍 Traveling and exploring new cultures excite me, and I enjoy connecting with like-minded individuals worldwide. Let's innovate and build something amazing together! 🚀
            </p>

            {/* Properly spaced buttons */}
            <div className="flex flex-col">
              <ButtonLink
                url='https://drive.google.com/file/d/1chDPZ_I0OObyeNxb0mSl0e4lD1UORqtX/view?usp=sharing'
                text='View Resume →'
                padding={`p-3`}
              />

              <ButtonLink
                url='https://drive.google.com/drive/folders/1-yPsFTbvNfAlexipJetebaRJwt1G26U6?usp=sharing'
                text='View Certifications →'
                padding={`p-3 mt-6`} // Added margin-top
              />
            </div>
          </div>

          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
