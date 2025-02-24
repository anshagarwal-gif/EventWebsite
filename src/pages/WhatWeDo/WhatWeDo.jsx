import React, { useState, useEffect } from 'react';
import './WhatWeDo.css'
import backgroundImage from "./Assets/herosectionbackground.png"
import music1 from './Assets/Music 1.svg'
import music2 from './Assets/Music 2.svg'
import music3 from './Assets/Music 3.svg'
import music4 from './Assets/Music 4.svg'
import corporate1 from './Assets/Corporate 1.svg'
import corporate2 from './Assets/Corporate 2.svg'
import corporate3 from './Assets/Corporate 3.svg'
import corporate4 from './Assets/Corporate 4.svg'
import wedding1 from './Assets/Wedding 1.svg'
import wedding2 from './Assets/Wedding 2.svg'
import wedding3 from './Assets/Wedding 3.svg'
import wedding4 from './Assets/Wedding 4.svg'
import fest1 from './Assets/Fest 1.svg'
import fest2 from './Assets/Fest 2.svg'
import fest3 from './Assets/Fest 3.svg'
import fest4 from './Assets/Fest 4.svg'
import concert1 from './Assets/Concert1.svg'
import concert2 from './Assets/Concert2.svg'
import concert3 from './Assets/Concert3.svg'
import concert4 from './Assets/Concert4.svg'
import conference1 from './Assets/Summit 1.svg'
import conference2 from './Assets/Summit 2.svg'
import conference3 from './Assets/Summit 3.svg'
import conference4 from './Assets/Summit 4.svg'
import site1 from './Assets/Site 1.svg'
import site2 from './Assets/Site 2.svg'
import site3 from './Assets/Site 3.svg'
import site4 from './Assets/Site 4.svg'
import sport1 from './Assets/Sport 1.svg'
import sport2 from './Assets/Sport 2.svg'
import sport3 from './Assets/Sport 3.svg'
import sport4 from './Assets/Sport 4.svg'
import DividerImage from "./Assets/divider.png";
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import { useLocation } from 'react-router-dom';

const WhatWeDo = () => {
  const location = useLocation(); // Get location object
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Music Event', 'Corporate Event', 'Wedding Events', 'College Fest', 'Concert Production', 'Summit Conferences', 'Site Office Rentals', 'Sport Championships'];
  useEffect(() => {
    // Parse the URL parameters for the active tab index
    const params = new URLSearchParams(location.search);
    const tabIndex = parseInt(params.get('tab')) || 0;
    setActiveTab(tabIndex);
  }, [location.search]);
  return (
    <div>

      {/* Hero Section  */}
      <HeroComponent backgroundImageUrl={backgroundImage} title="WHAT WE DO" subtitle1="Aapka Swagat Hai!" subtitle2="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart." />

      {/* Events Tabs  */}
      <div className="whatwedo-event-tabs">
        <div className="tab-menu">
          {tabs.map((tab , index) => (
            <button
              key={index}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <>
            <div className="content-1">
              <p className="content-text">Transforming music events into unforgettable experiences requires a perfect blend of creativity, precision, and innovation. From concerts and music festivals to album launches and intimate gigs, each event is tailored to meet unique objectives. With advanced technology, seamless execution, and attention to detail, these events leave a lasting impression while celebrating the power of music.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={music1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={music2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={music3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={music4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) specializes in managing music events such as concerts, festivals, album launches, and live gigs. With a focus on innovation, technical excellence, and precision, WEE ensures every event aligns with the client’s vision and delivers exceptional results.</p>

              <p className='content-text'>The process begins with a thorough consultation, where WEE collaborates with clients to understand their goals, vision, and budget. This is followed by detailed planning, which includes venue selection, developing event timelines, and implementing risk management strategies. Their planning phase is designed to anticipate challenges and ensure that every element is meticulously organized. WEE's focus on client needs ensures that each music event is uniquely tailored, reflecting the artist’s brand and the event's theme.</p>

              <p className='content-text'>A key strength of WEE’s music event management is their use of advanced technologies. They integrate cutting-edge sound systems, lighting effects, and stage setups to enhance the overall experience, whether for large-scale festivals or intimate performances. These technologies create immersive and engaging environments, ensuring that the event is impactful and leaves a lasting impression on attendees. On the day of the event, WEE’s on-site project managers oversee every aspect, making real-time adjustments as needed to guarantee flawless execution.</p>

              <p className='content-text'>Post-event, WEE evaluates the success of the music event by analyzing performance against key metrics and gathering client feedback. This analysis not only highlights the achievements of the event but also provides insights for continuous improvement. With their focus on creativity, sustainability, and attention to detail, WEE has established itself as a trusted partner for artists and organizations seeking exceptional music event management solutions.</p>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="content-1">
              <p className="content-text"> Transforming corporate events into impactful experiences requires a perfect blend of creativity, precision, and innovation. From conferences and product launches to team-building sessions and strategic meetings, each event is tailored to meet unique objectives. With advanced technology, seamless execution, and attention to detail, these events leave a lasting impression while driving organizational success.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={corporate1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={corporate2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={corporate3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={corporate4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) specializes in managing corporate events such as conferences, product launches, team-building sessions, and business meetings. With a focus on innovation, technical excellence, and precision, WEE ensures every event aligns with the client’s vision and delivers exceptional results.</p>

              <p className='content-text'>The process begins with a thorough consultation, where WEE collaborates with clients to understand their goals, vision, and budget. This is followed by detailed planning, which includes venue selection, developing event timelines, and implementing risk management strategies. Their planning phase is designed to anticipate challenges and ensure that every element is meticulously organized. WEE's focus on client needs ensures that each event is uniquely tailored, reflecting the brand and purpose of the organization.</p>

              <p className='content-text'>A key strength of WEE’s corporate event management is their use of advanced technologies. They integrate cutting-edge audio-visual systems to enhance the overall experience, whether for in-person or virtual events. These technologies create immersive and engaging environments, ensuring that the event is impactful and leaves a lasting impression on attendees. On the day of the event, WEE’s on-site project managers oversee every aspect, making real-time adjustments as needed to guarantee flawless execution.</p>

              <p className='content-text'>Post-event, WEE evaluates the success of the event by analyzing performance against key metrics and gathering client feedback. This analysis not only highlights the achievements of the event but also provides insights for continuous improvement. With their focus on creativity, sustainability, and attention to detail, WEE has established itself as a trusted partner for organizations seeking exceptional corporate event management solutions​</p>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="content-1">
              <p className="content-text">The journey starts with a consultation to understand your vision, preferences, and budget. From selecting the perfect venue to curating décor and managing guest lists, WEE’s planning process ensures every element is seamless and stress-free.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={wedding1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={wedding2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={wedding3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={wedding4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE specializes in planning all types of weddings, including destination events, pre-wedding functions, and themed celebrations. Their expertise in personalization ensures every detail aligns with the couple’s vision, creating a one-of-a-kind experience that leaves a lasting impression.</p>

              <p className='content-text'>The journey starts with a consultation to understand your vision, preferences, and budget. From selecting the perfect venue to curating décor and managing guest lists, WEE’s planning process ensures every element is seamless and stress-free.</p>

              <p className='content-text'>WEE’s innovative use of technology and design elements adds a touch of magic to your big day. From stunning lighting and immersive décor to flawless sound systems, they create captivating experiences that blend tradition with modern elegance.</p>

              <p className='content-text'>On the wedding day, WEE’s dedicated team oversees every detail to ensure a smooth and unforgettable celebration. Their commitment to excellence guarantees that your special day is nothing short of perfect. After the event, WEE gathers feedback to continuously improve their services. With creativity, attention to detail, and a passion for love stories, WEE is your trusted partner for extraordinary wedding celebrations.</p>
            </div>
          </>
        )}

        {activeTab === 3 && (
          <>
            <div className="content-1">
              <p className="content-text">Bringing college fests to life requires a vibrant mix of creativity, energy, and precision. From cultural showcases to tech fests and fun-filled carnivals, each event is designed to captivate and engage. Wadhwa Events and Exhibits (WEE) turns your college fest into an unforgettable experience.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={fest1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={fest2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={fest3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={fest4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE specializes in managing all types of college events, including cultural festivals, technical expos, and annual day celebrations. Their innovative approach ensures that every fest resonates with the spirit and enthusiasm of the students, leaving a lasting impression.</p>

              <p className='content-text'>The process begins with a collaborative consultation to understand your vision, theme, and budget. From selecting venues and organizing performances to managing sponsors and attendees, WEE ensures that every detail is executed flawlessly.</p>

              <p className='content-text'>WEE uses advanced technology and creative elements to enhance the fest experience. From dynamic stage setups and immersive sound systems to vibrant décor and interactive zones, they create an engaging and electrifying atmosphere.
              During the event, WEE’s team works behind the scenes to ensure smooth execution, handling real-time adjustments with ease. Their focus on precision ensures that every moment is celebrated without a hitch.</p>

              <p className='content-text'>Post-fest, WEE evaluates its success through performance metrics and feedback. With a passion for innovation, attention to detail, and expertise in large-scale events, WEE is your perfect partner for creating memorable college fests.​</p>
            </div>
          </>
        )}
        {activeTab === 4 && (
          <>
            <div className="content-1">
              <p className="content-text">Producing unforgettable concerts requires a perfect blend of creativity, precision, and technical expertise. From intimate gigs to large-scale performances, every detail is crafted to deliver a spectacular experience. Wadhwa Events and Exhibits (WEE) brings your concert vision to life with seamless execution and innovative solutions.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={concert1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={concert2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={concert3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={concert4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE specializes in concert production, including live performances, music tours, and exclusive gigs. Their expertise in managing large-scale events ensures every show is a captivating experience for both artists and audiences.</p>

              <p className='content-text'>The process begins with understanding the vision, theme, and technical requirements of the event. From venue selection and stage design to sound, lighting, and logistics, WEE meticulously plans every element to ensure perfection.</p>

              <p className='content-text'>Using cutting-edge technology, WEE enhances the concert experience with state-of-the-art sound systems, dynamic lighting effects, and immersive stage setups. Their innovative approach creates an electrifying atmosphere that leaves a lasting impact.
              On the day of the event, WEE’s dedicated team manages all aspects of the production, ensuring flawless execution. Their real-time problem-solving and attention to detail guarantee a seamless and unforgettable performance.</p>

              <p className='content-text'>After the concert, WEE evaluates its success by gathering feedback and analyzing performance metrics, such as audience engagement and technical efficiency. This process helps refine their services and ensures continuous improvement. With creativity, technical excellence, and a passion for live events, WEE remains your trusted partner for delivering unforgettable concert experiences.​</p>
            </div>
          </>
        )}
        {activeTab === 5 && (
          <>
            <div className="content-1">
              <p className="content-text">Organizing impactful summit conferences requires a perfect blend of innovation, precision, and expertise. From high-profile gatherings to industry-specific events, each summit is designed to inspire, connect, and deliver meaningful outcomes. Wadhwa Events and Exhibits (WEE) transforms your summit into a powerful platform for collaboration and success.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={conference1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={conference2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={conference3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={conference4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE specializes in managing all types of conferences, including industry summits, leadership forums, and business symposiums. With a focus on innovation and seamless execution, they ensure every detail reflects your organization’s goals and vision.</p>

              <p className='content-text'>The process begins with a thorough consultation to understand your objectives, audience, and budget. From venue selection and speaker coordination to designing engaging agendas, WEE ensures every aspect is meticulously planned for maximum impact.
              WEE leverages advanced technology to elevate the conference experience. From state-of-the-art audio-visual setups and live-streaming options to interactive tools for audience engagement, their solutions create dynamic and immersive environments.</p>

              <p className='content-text'>On the day of the summit, WEE’s experienced team manages all logistics and ensures flawless execution. Their attention to detail and adaptability guarantee a smooth and successful event.</p>

              <p className='content-text'>After the conference, Wadhwa Events and Exhibits (WEE) takes a proactive approach to evaluate the event’s success. They gather valuable feedback from attendees and analyze key performance metrics to measure the impact of the summit. This comprehensive assessment not only highlights the event's achievements but also provides insights for continuous improvement. By understanding what worked well and identifying areas for growth, WEE ensures that every conference sets a new benchmark. With a steadfast commitment to excellence, innovation, and client satisfaction, WEE is the trusted partner for hosting impactful and memorable summit conferences that leave a lasting impression.​</p>
            </div>
          </>
        )}
        {activeTab === 6 && (
          <>
            <div className="content-1">
              <p className="content-text">Transforming site office rentals into seamless and functional spaces requires a perfect balance of practicality, comfort, and precision. From construction sites to corporate projects, each office setup is designed to meet the specific needs of the team. Wadhwa Events and Exhibits (WEE) ensures that your site office rental provides a productive and efficient environment.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={site1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={site2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={site3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={site4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE specializes in offering site office rentals for construction sites, project management teams, and corporate offices. Their focus on customization ensures that every rental is tailored to your requirements, providing the perfect space to support your operations.</p>

              <p className='content-text'>The process starts with a thorough consultation to understand your space needs, location preferences, and budget. WEE then handles the logistics, from selecting the ideal office structure to ensuring all necessary utilities and furnishings are in place.</p>

              <p className='content-text'>WEE uses high-quality materials and advanced infrastructure to ensure that your site office is functional, comfortable, and safe. Whether it's a modular setup, portable cabin, or prefabricated office, they provide flexible solutions that can be easily customized to fit your requirements.
              On delivery, WEE ensures that the site office is set up efficiently, ready for immediate use. Their team handles the installation and any adjustments needed, ensuring that the space is operational without delays.</p>

              <p className='content-text'>Post-setup, WEE provides ongoing support to maintain the office’s functionality. With a focus on quality, reliability, and convenience, WEE is your trusted partner for site office rentals that cater to all your project needs.​</p>
            </div>
          </>
        )}
        {activeTab === 7 && (
          <>
            <div className="content-1">
              <p className="content-text">Turning sport championships into thrilling, unforgettable experiences requires a perfect blend of energy, precision, and organization. From regional tournaments to grand finals, every event is designed to ignite passion and celebrate athletic excellence. Wadhwa Events and Exhibits (WEE) specializes in creating sports events that energize participants and leave a lasting impact on audiences.</p>
            </div>

            <div className='image-grid'>
              <div>
                <img src={sport1} alt="image1" className='eventImage' />
              </div>
              <div>
                <img src={sport2} alt="image2" className='eventImage' />
              </div>
              <div>
                <img src={sport3} alt="image3" className='eventImage' />
              </div>
              <div>
                <img src={sport4} alt="image4" className='eventImage' />
              </div>
            </div>

            <div className='content-2'>
              <p className='content-text'>WEE expertly manages all types of sports championships, including competitive tournaments, team events, and individual sports contests. Their focus on innovation and seamless execution ensures that each event captures the intensity and excitement of the competition while honoring the athletes’ achievements.</p>

              <p className='content-text'>The planning starts with a deep understanding of your event’s goals, teams, and logistics. WEE’s team handles everything from venue selection to scheduling, team coordination, and crowd management, ensuring that every aspect runs smoothly.</p>

              <p className='content-text'>WEE’s use of cutting-edge technology enhances the championship experience, from high-definition live-streaming and real-time score tracking to dynamic sound systems and immersive visuals. Their technical expertise ensures a thrilling atmosphere for both athletes and fans.
              On event day, WEE’s experienced team oversees every detail, ensuring flawless execution and quick responses to any challenges. Their attention to detail ensures the event runs like clockwork, creating an unforgettable experience for all.</p>

              <p className='content-text'>Post-event, WEE conducts a thorough evaluation by gathering feedback from participants, audiences, and stakeholders while analyzing key metrics like attendance, engagement, and satisfaction. This helps identify areas for improvement, ensuring each future sports championship is even more successful. With a passion for sports and a commitment to excellence, WEE remains the trusted partner for organizing impactful and seamless sports events.​</p>
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
