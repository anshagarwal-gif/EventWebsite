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

  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Music Event', 'Corporate Event', 'Wedding Events', 'College Fest', 'Concert Production', 'Summit Conferences', 'Site Office Rentals', 'Sport Championships'];

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
              <p className="content-text">Transforming corporate events into impactful experiences requires a perfect blend of creativity, precision, and innovation. From conferences and product launches to team-building sessions and strategic meetings, each event is tailored to meet unique objectives. With advanced technology, seamless execution, and attention to detail, these events leave a lasting impression while driving organizational success.</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) specializes in managing corporate events such as conferences, product launches, team-building sessions, and business meetings. With a focus on innovation, technical excellence, and precision, WEE ensures every event aligns with the client’s vision and delivers exceptional results.</p>

              <p className='content-text'>The process begins with a thorough consultation, where WEE collaborates with clients to understand their goals, vision, and budget. This is followed by detailed planning, which includes venue selection, developing event timelines, and implementing risk management strategies. Their planning phase is designed to anticipate challenges and ensure that every element is meticulously organized. WEE's focus on client needs ensures that each event is uniquely tailored, reflecting the brand and purpose of the organization.</p>

              <p className='content-text'>A key strength of WEE’s corporate event management is their use of advanced technologies. They integrate cutting-edge audio-visual systems to enhance the overall experience, whether for in-person or virtual events. These technologies create immersive and engaging environments, ensuring that the event is impactful and leaves a lasting impression on attendees. On the day of the event, WEE’s on-site project managers oversee every aspect, making real-time adjustments as needed to guarantee flawless execution.</p>

              <p className='content-text'>Post-event, WEE evaluates the success of the event by analyzing performance against key metrics and gathering client feedback. This analysis not only highlights the achievements of the event but also provides insights for continuous improvement. With their focus on creativity, sustainability, and attention to detail, WEE has established itself as a trusted partner for organizations seeking exceptional corporate event management solutions​</p>
            </div>
          </>
        )}

        {activeTab === 1 && (
          <>
            <div className="content-1">
              <p className="content-text"> Managing social events starts with understanding the client’s vision to create a personalized experience. This involves careful planning, from venue selection to budget optimization, combined with creative designs and advanced technologies. Flawless execution ensures a seamless event, leaving guests with unforgettable memories.</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) specializes in managing social events, turning personal milestones like weddings, anniversaries, and charity galas into unforgettable experiences. Their process begins with a detailed consultation to understand the client’s vision, preferences, and objectives, ensuring that every event reflects the client’s unique style and personality. This client-centric approach ensures that each event is carefully tailored to meet specific needs and expectations.</p>

              <p className='content-text'>During the planning phase, WEE handles all critical aspects, including venue selection, timeline development, and budget optimization. Their meticulous attention to detail ensures that every element of the event is thoughtfully curated. By staying within the client’s financial framework, WEE delivers exceptional results without compromising on quality or creativity.</p>

              <p className='content-text'>Creativity and innovation are key elements of WEE’s approach to social events. From immersive designs and unique decor to advanced audio-visual technologies, WEE creates stunning atmospheres that captivate guests and bring the event to life. Their technical and logistical expertise ensures a smooth and flawless execution, whether it’s a large-scale wedding or an intimate charity event.</p>

              <p className='content-text'>On the day of the event, WEE’s skilled team manages every detail, making real-time adjustments to guarantee a seamless experience for clients and their guests. Their ability to combine personalization, creativity, and technical excellence ensures that each social event is truly memorable, leaving a lasting impression and cherished memories for all involved</p>
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="content-1">
              <p className="content-text">We specialize in creating impactful exhibitions that leave a lasting impression. From designing innovative and eye-catching booth layouts to integrating advanced technologies, we ensure every detail is tailored to captivate and engage your audience. Our team handles everything from setup to on-site logistics with precision, guaranteeing seamless execution. With a strong focus on sustainability and creativity, we help businesses showcase their brand, connect with their audience, and achieve exceptional results through memorable exhibition experiences.</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) is a trusted leader in exhibition management, offering tailored solutions to help businesses showcase their products and services effectively. Exhibitions are vital for increasing brand visibility, generating leads, and building relationships, and WEE excels in creating immersive, engaging experiences. Their end-to-end process ensures every aspect, from planning to execution, is aligned with the client’s objectives and vision.</p>

              <p className='content-text'>WEE begins with a detailed consultation to understand goals and designs customized plans, including booth layouts, venue selection, and creative displays. They focus on integrating interactive technologies and sustainable practices, ensuring innovative and eco-friendly exhibition spaces. This approach enhances visitor engagement while maintaining environmental responsibility.</p>

              <p className='content-text'>On the day of the exhibition, WEE ensures seamless execution with on-site managers handling logistics, booth setup, and technical support. Advanced audio-visual and lighting solutions further elevate the exhibition experience, creating an atmosphere conducive to networking and communication. Their emphasis on technical and logistical precision ensures a smooth flow for both exhibitors and attendees.</p>

              <p className='content-text'>Post-exhibition, we evaluates success by gathering feedback and analyzing performance metrics. This commitment to continuous improvement ensures that each event delivers better results than the last. By combining expertise in design, technology, and sustainability, WEE provides impactful exhibitions that leave lasting impressions</p>
            </div>
          </>
        )}

        {activeTab === 3 && (
          <>
            <div className="content-1">
              <p className="content-text">We excel in delivering technical excellence to ensure every event is seamless and impactful. By leveraging cutting-edge audio-visual technologies, advanced lighting systems, and interactive tools, we create immersive experiences that captivate audiences. Our team manages all technical aspects, from setup to real-time execution, ensuring flawless delivery for both in-person and virtual events. With a focus on precision and innovation, we help clients achieve their vision while setting new standards for technical brilliance</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) showcases exceptional technical excellence by integrating advanced technologies and infrastructure into their events. Whether for corporate, social, or exhibition purposes, WEE ensures seamless execution through innovative and state-of-the-art equipment, elevating the quality and impact of every event. Their technical expertise guarantees that both in-person and virtual events meet global standards and leave a lasting impression on attendees.</p>

              <p className='content-text'>A standout feature of WEE’s technical excellence is their use of cutting-edge audio-visual technologies. High-definition screens, dynamic lighting, and immersive sound systems enhance the event experience, making presentations and performances more impactful. Interactive elements such as live polling, virtual reality, and digital displays add an innovative and engaging dimension to events, ensuring memorable experiences for participants.</p>

              <p className='content-text'>WEE also excels in managing the logistics of technical setups with precision. Their skilled professionals oversee installation, operation, and troubleshooting to ensure everything functions flawlessly during the event. On-site project managers make real-time adjustments to resolve any technical challenges, creating a stress-free and seamless experience for their clients.</p>

              <p className='content-text'>Additionally, WEE incorporates sustainability into its technical solutions by adopting eco-friendly practices like energy-efficient lighting and paperless technologies. This not only reduces the environmental impact of events but also aligns with modern trends and global best practices. Their commitment to both innovation and sustainability highlights their leadership in delivering advanced and responsible event solutions​</p>
            </div>
          </>
        )}
        {activeTab === 4 && (
          <>
            <div className="content-1">
              <p className="content-text">We excel in delivering technical excellence to ensure every event is seamless and impactful. By leveraging cutting-edge audio-visual technologies, advanced lighting systems, and interactive tools, we create immersive experiences that captivate audiences. Our team manages all technical aspects, from setup to real-time execution, ensuring flawless delivery for both in-person and virtual events. With a focus on precision and innovation, we help clients achieve their vision while setting new standards for technical brilliance</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) showcases exceptional technical excellence by integrating advanced technologies and infrastructure into their events. Whether for corporate, social, or exhibition purposes, WEE ensures seamless execution through innovative and state-of-the-art equipment, elevating the quality and impact of every event. Their technical expertise guarantees that both in-person and virtual events meet global standards and leave a lasting impression on attendees.</p>

              <p className='content-text'>A standout feature of WEE’s technical excellence is their use of cutting-edge audio-visual technologies. High-definition screens, dynamic lighting, and immersive sound systems enhance the event experience, making presentations and performances more impactful. Interactive elements such as live polling, virtual reality, and digital displays add an innovative and engaging dimension to events, ensuring memorable experiences for participants.</p>

              <p className='content-text'>WEE also excels in managing the logistics of technical setups with precision. Their skilled professionals oversee installation, operation, and troubleshooting to ensure everything functions flawlessly during the event. On-site project managers make real-time adjustments to resolve any technical challenges, creating a stress-free and seamless experience for their clients.</p>

              <p className='content-text'>Additionally, WEE incorporates sustainability into its technical solutions by adopting eco-friendly practices like energy-efficient lighting and paperless technologies. This not only reduces the environmental impact of events but also aligns with modern trends and global best practices. Their commitment to both innovation and sustainability highlights their leadership in delivering advanced and responsible event solutions​</p>
            </div>
          </>
        )}
        {activeTab === 5 && (
          <>
            <div className="content-1">
              <p className="content-text">We excel in delivering technical excellence to ensure every event is seamless and impactful. By leveraging cutting-edge audio-visual technologies, advanced lighting systems, and interactive tools, we create immersive experiences that captivate audiences. Our team manages all technical aspects, from setup to real-time execution, ensuring flawless delivery for both in-person and virtual events. With a focus on precision and innovation, we help clients achieve their vision while setting new standards for technical brilliance</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) showcases exceptional technical excellence by integrating advanced technologies and infrastructure into their events. Whether for corporate, social, or exhibition purposes, WEE ensures seamless execution through innovative and state-of-the-art equipment, elevating the quality and impact of every event. Their technical expertise guarantees that both in-person and virtual events meet global standards and leave a lasting impression on attendees.</p>

              <p className='content-text'>A standout feature of WEE’s technical excellence is their use of cutting-edge audio-visual technologies. High-definition screens, dynamic lighting, and immersive sound systems enhance the event experience, making presentations and performances more impactful. Interactive elements such as live polling, virtual reality, and digital displays add an innovative and engaging dimension to events, ensuring memorable experiences for participants.</p>

              <p className='content-text'>WEE also excels in managing the logistics of technical setups with precision. Their skilled professionals oversee installation, operation, and troubleshooting to ensure everything functions flawlessly during the event. On-site project managers make real-time adjustments to resolve any technical challenges, creating a stress-free and seamless experience for their clients.</p>

              <p className='content-text'>Additionally, WEE incorporates sustainability into its technical solutions by adopting eco-friendly practices like energy-efficient lighting and paperless technologies. This not only reduces the environmental impact of events but also aligns with modern trends and global best practices. Their commitment to both innovation and sustainability highlights their leadership in delivering advanced and responsible event solutions​</p>
            </div>
          </>
        )}
        {activeTab === 6 && (
          <>
            <div className="content-1">
              <p className="content-text">We excel in delivering technical excellence to ensure every event is seamless and impactful. By leveraging cutting-edge audio-visual technologies, advanced lighting systems, and interactive tools, we create immersive experiences that captivate audiences. Our team manages all technical aspects, from setup to real-time execution, ensuring flawless delivery for both in-person and virtual events. With a focus on precision and innovation, we help clients achieve their vision while setting new standards for technical brilliance</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) showcases exceptional technical excellence by integrating advanced technologies and infrastructure into their events. Whether for corporate, social, or exhibition purposes, WEE ensures seamless execution through innovative and state-of-the-art equipment, elevating the quality and impact of every event. Their technical expertise guarantees that both in-person and virtual events meet global standards and leave a lasting impression on attendees.</p>

              <p className='content-text'>A standout feature of WEE’s technical excellence is their use of cutting-edge audio-visual technologies. High-definition screens, dynamic lighting, and immersive sound systems enhance the event experience, making presentations and performances more impactful. Interactive elements such as live polling, virtual reality, and digital displays add an innovative and engaging dimension to events, ensuring memorable experiences for participants.</p>

              <p className='content-text'>WEE also excels in managing the logistics of technical setups with precision. Their skilled professionals oversee installation, operation, and troubleshooting to ensure everything functions flawlessly during the event. On-site project managers make real-time adjustments to resolve any technical challenges, creating a stress-free and seamless experience for their clients.</p>

              <p className='content-text'>Additionally, WEE incorporates sustainability into its technical solutions by adopting eco-friendly practices like energy-efficient lighting and paperless technologies. This not only reduces the environmental impact of events but also aligns with modern trends and global best practices. Their commitment to both innovation and sustainability highlights their leadership in delivering advanced and responsible event solutions​</p>
            </div>
          </>
        )}
        {activeTab === 7 && (
          <>
            <div className="content-1">
              <p className="content-text">We excel in delivering technical excellence to ensure every event is seamless and impactful. By leveraging cutting-edge audio-visual technologies, advanced lighting systems, and interactive tools, we create immersive experiences that captivate audiences. Our team manages all technical aspects, from setup to real-time execution, ensuring flawless delivery for both in-person and virtual events. With a focus on precision and innovation, we help clients achieve their vision while setting new standards for technical brilliance</p>
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
              <p className='content-text'>Wadhwa Events and Exhibits (WEE) showcases exceptional technical excellence by integrating advanced technologies and infrastructure into their events. Whether for corporate, social, or exhibition purposes, WEE ensures seamless execution through innovative and state-of-the-art equipment, elevating the quality and impact of every event. Their technical expertise guarantees that both in-person and virtual events meet global standards and leave a lasting impression on attendees.</p>

              <p className='content-text'>A standout feature of WEE’s technical excellence is their use of cutting-edge audio-visual technologies. High-definition screens, dynamic lighting, and immersive sound systems enhance the event experience, making presentations and performances more impactful. Interactive elements such as live polling, virtual reality, and digital displays add an innovative and engaging dimension to events, ensuring memorable experiences for participants.</p>

              <p className='content-text'>WEE also excels in managing the logistics of technical setups with precision. Their skilled professionals oversee installation, operation, and troubleshooting to ensure everything functions flawlessly during the event. On-site project managers make real-time adjustments to resolve any technical challenges, creating a stress-free and seamless experience for their clients.</p>

              <p className='content-text'>Additionally, WEE incorporates sustainability into its technical solutions by adopting eco-friendly practices like energy-efficient lighting and paperless technologies. This not only reduces the environmental impact of events but also aligns with modern trends and global best practices. Their commitment to both innovation and sustainability highlights their leadership in delivering advanced and responsible event solutions​</p>
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
