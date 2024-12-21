import React, { useState } from 'react'
import './WhatWeDo.css'
import backgroundImage from "./Assets/herosectionbackground.png"
import musicEventImage1 from './Assets/musiceventimage1.png'
import musicEventImage2 from './Assets/musiceventimage2.png'
import musicEventImage3 from './Assets/musiceventimage3.png'
import musicEventImage4 from './Assets/musiceventimage4.png'
import DividerImage from "./Assets/divider.png";
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'

const WhatWeDo = () => {

  const [activeTab, setActiveTab] = useState('Music Event');

  const tabs = ['Music Event', 'Corporate Event', 'Special Event', 'Sport Event'];

  return (
    <div>

      {/* Hero Section  */}
      <HeroComponent backgroundImageUrl={backgroundImage} title="WHAT WE DO" subtitle1="Aapka Swagat Hai!" subtitle2="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart." />

      {/* Events Tabs  */}
      <div className="whatwedo-event-tabs">
        <div className="tab-menu">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Music Event' && (
          <>
            <div className="content-1">
              <p className="content-text">"Experience the ultimate in musical entertainment with our top-tier event music services. From live bands and DJs to custom playlists tailored to your event's vibe, we ensure every beat resonates with your audience. Elevate your celebration with our expert soundscaping, creating unforgettable moments through the power of music."</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={musicEventImage1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={musicEventImage2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={musicEventImage3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={musicEventImage4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>
            </div>
          </>
        )}

        {activeTab === 'Corporate Event' && (
          <>
            <div className="content-1">
              <p className="content-text">"Experience the ultimate in musical entertainment with our top-tier event music services. From live bands and DJs to custom playlists tailored to your event's vibe, we ensure every beat resonates with your audience. Elevate your celebration with our expert soundscaping, creating unforgettable moments through the power of music."</p>
            </div>

            <div className='image-grid'>
              <img src={musicEventImage1} alt="image1" className='eventImage' />
              <img src={musicEventImage2} alt="image2" className='eventImage' />
              <img src={musicEventImage3} alt="image3" className='eventImage' />
              <img src={musicEventImage4} alt="image4" className='eventImage' />
            </div>

            <div className='content-2'>
              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>
            </div>
          </>
        )}

        {activeTab === 'Special Event' && (
          <>
            <div className="content-1">
              <p className="content-text">"Experience the ultimate in musical entertainment with our top-tier event music services. From live bands and DJs to custom playlists tailored to your event's vibe, we ensure every beat resonates with your audience. Elevate your celebration with our expert soundscaping, creating unforgettable moments through the power of music."</p>
            </div>

            <div className='image-grid'>
              <img src={musicEventImage1} alt="image1" className='eventImage' />
              <img src={musicEventImage2} alt="image2" className='eventImage' />
              <img src={musicEventImage3} alt="image3" className='eventImage' />
              <img src={musicEventImage4} alt="image4" className='eventImage' />
            </div>

            <div className='content-2'>
              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>
            </div>
          </>
        )}

        {activeTab === 'Sport Event' && (
          <>
            <div className="content-1">
              <p className="content-text">"Experience the ultimate in musical entertainment with our top-tier event music services. From live bands and DJs to custom playlists tailored to your event's vibe, we ensure every beat resonates with your audience. Elevate your celebration with our expert soundscaping, creating unforgettable moments through the power of music."</p>
            </div>

            <div className='image-grid'>
              <img src={musicEventImage1} alt="image1" className='eventImage' />
              <img src={musicEventImage2} alt="image2" className='eventImage' />
              <img src={musicEventImage3} alt="image3" className='eventImage' />
              <img src={musicEventImage4} alt="image4" className='eventImage' />
            </div>

            <div className='content-2'>
              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>

              <p className='content-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus aut illum voluptatibus voluptates fuga velit perspiciatis est quidem inventore, nemo non architecto vitae rem sequi! Ullam libero quod dolorum dolores, at vero repellendus mollitia itaque impedit ab deleniti adipisci placeat accusantium fugiat eveniet modi eligendi nemo dolor. Sunt fugit eos minus beatae hic! Illum earum vero rem iste officiis nesciunt aliquid nostrum explicabo, non nihil omnis sapiente pariatur alias, doloribus dolorem nisi saepe nam nobis perspiciatis quidem, impedit suscipit deserunt in laborum. Dolorum rem sapiente totam libero eligendi aliquam nemo odit dignissimos pariatur dolores, illo a provident, aspernatur nisi officiis!</p>
            </div>
          </>
        )}
      </div>

      <div className='divider'>
        <img src={DividerImage} alt="divider" width={"100%"} />
      </div>

      <AppointmentComponent />

    </div>
  )
}

export default WhatWeDo
