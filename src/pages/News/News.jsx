import React , { useState } from 'react'
import './News.css'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import HeroBackgroundImage from './Assets/herosectionbackground.png'
import NewsImage from './Assets/newsimage.png'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import UpdatesNewsImage from './Assets/updatesNewsImage.png'

const News = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const updatesData = Array.from({ length: 20 }, (_, i) => ({
    imageUrl: UpdatesNewsImage,
    title: `Lorem ipsum dolor sit ${i + 1}`,
    description: `Lorem ipsum dolor sit amet adipiscing consectetur. Mattis lacinia risus nulla quis elit congue odio egestas magna.`,
  }));
  const updatesPerPage = 3;

  const totalPages = Math.ceil(updatesData.length / updatesPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * updatesPerPage;
  const currentUpdates = updatesData.slice(startIndex, startIndex + updatesPerPage);

  return (
    <div>

      <HeroComponent backgroundImageUrl={HeroBackgroundImage} title="News" subtitle1="Aapka Swagat Hai!" subtitle2="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart." />

      <div className='news-card'>
        <h1 className='news-heading'>LATEST NEWS</h1>
        <div className='news-image-container'>
          <img src={NewsImage} alt="newsimage" className='news-image' />
        </div>
        <p className='news-date'>01 JUNE 2024</p>
        <h1 className='news-title'>Unveiling Excellence in Events & Exhibitions</h1>
        <p className='news-description'>Welcome to the latest edition of the Wadhwa Events & Exhibits newsletter, where we celebrate our milestones and showcase our commitment to creating extraordinary experiences for our esteemed clients. From corporate giants to educational institutions, we have left an indelible mark in the world of events and exhibits.</p>
        <p className='news-description'>Our clientele speaks volumes about our expertise and dedication. We’ve delivered sophisticated and dynamic corporate event solutions for TATA, reflecting the brand’s innovation and legacy; curated elegant and expansive exhibitions for Sahara that showcased the company’s diverse portfolio; designed high-impact product launches and trade show exhibits for JCB to captivate global audiences; executed luxurious private events and bespoke exhibits for Pristine’s elite clientele; partnered with ICE Global for international conferences, ensuring flawless execution with a touch of finesse; and crafted stunning displays and promotional events for PNG Jewellers that radiated the brand’s elegance and tradition.</p>
        <p className='news-description'>At MIT ADT University, we have managed a variety of impactful events that showcased the institution’s commitment to innovation and excellence. Our work included conceptualizing and executing academic summits, cultural fests, and technology expos that brought together students, faculty, and industry leaders. Notably, we had the honor of hosting and managing Persona, Pune's biggest techno-cultural event. With its dynamic mix of technology, culture, and creativity, Persona became a resounding success under our meticulous planning and seamless execution, further solidifying the university’s reputation as a hub of innovation and culture.</p>
        <p className='news-description'>We take pride in our ability to adapt and innovate. Whether it’s crafting bespoke solutions for new-age startups or handling mega-events for established enterprises, Wadhwa Events & Exhibits continues to redefine industry standards. As we step into the future, our commitment to delivering excellence remains unwavering. With each project, we aim to inspire, innovate, and leave a lasting impression on our clients and their audiences.</p>
        <p className='news-description'>Follow us on our journey to transform ideas into reality. For inquiries, partnerships, or to explore how we can make your vision come alive, reach out to us today.</p>

        <div className='news-conclude'>
          <h3>Wadhwa Events & Exhibits</h3>
          <h3>Your Partner in Exceptional Event Experiences</h3>
        </div>
      </div>

      <div className='section-divider'></div>
{/* 
      <div className="related-updates">
        <h2 className="updates-heading">RELATED UPDATES</h2>
        <div className="updates-container">
          {currentUpdates.map((update, index) => (
            <div key={index} className="update-card">
              <img
                src={update.imageUrl}
                alt="Update"
                className="update-image"
              />
              <h3 className="update-title">{update.title}</h3>
              <p className="update-description">{update.description}</p>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-number ${page === currentPage ? 'active' : ''
                }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div> */}

      <AppointmentComponent />
    </div>
  )
}

export default News
