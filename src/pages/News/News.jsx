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
        <h1 className='news-title'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className='news-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste id rerum fuga eos numquam tempora aliquid vero ipsum magnam, doloremque ad sunt minus hic laborum necessitatibus beatae enim reiciendis, deserunt voluptatem porro blanditiis? Cum amet quaerat illum vero quod necessitatibus voluptatem repellat beatae! Rerum, consequuntur repudiandae assumenda adipisci dolor ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, laudantium nostrum? Deleniti dolorum sapiente odit voluptatem fugit reiciendis nihil quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quo doloribus nobis consequatur asperiores magni aperiam, quibusdam nesciunt voluptatum aut quod similique deserunt. Dicta eligendi repudiandae facere qui autem, nemo sed? Nesciunt vero fugiat quos aspernatur, quidem iure. Necessitatibus rem consequatur suscipit, repellat dolorum esse maiores nobis molestias dignissimos fugiat! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque impedit laboriosam sint exercitationem non ex, repellat, eaque iure tempore numquam consequatur similique recusandae porro eius nobis blanditiis alias odio velit, fugiat dolores sit praesentium quia quibusdam dolor! Fugit, nemo reprehenderit animi, ipsam aut sint, a aspernatur neque nobis excepturi enim?</p>
      </div>

      <div className='section-divider'></div>

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
      </div>

      <AppointmentComponent />
    </div>
  )
}

export default News