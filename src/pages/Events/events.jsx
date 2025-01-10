import React from 'react'
import './events.css'
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import backgroundImage from './assets/image.jpeg';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';
import EventsSection from './EventsSection';
import TasteOfIndia from "./assets/TasteOfIndia.png"
import Bollywood from "./assets/bollyextravananga.png"
import MughalEmpire from "./assets/royalMughalEmpire.png"


const Events = () => {

    const signatureEvents = [
        {
            title: "Taste of India",
            description: "Embark on a culinary journey through the diverse flavors of India.",
            image: TasteOfIndia,
          },
          {
            title: "Bollywood Extravaganza",
            description: "Celebrate the magic of Indian cinema with a dazzling gala inspired by Bollywood.",
            image: Bollywood,
          },
          {
            title: "Royal Mughal Night",
            description: "Immerse your guests in the opulence of a bygone era with a Maharaja-themed ball featuring traditional Indian décor",
            image: MughalEmpire,
          }
    ]

    

    return (
        <div>

            <HeroComponent
                backgroundImageUrl={backgroundImage}
                title="Events"
                subtitle1="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart."
            />

            <EventsSection title={"SIGNATURE EVENTS"} subtitle={"Celebrate in grand style with our signature events, featuring themes inspired by Indian royalty, cinema, and culinary heritage."} events={signatureEvents} />

            <EventsSection title={"SOCIAL GATHERINGS"} subtitle={"Make your social events vibrant and joyous with our expertise in planning traditional ceremonies, lively parties, and stylish soirees."} events={signatureEvents} />

            <EventsSection title={"MEETING AND CONFERENCES"} subtitle={"Host thought-provoking conferences, summits, and forums that address key issues and foster collaboration in India."} events={signatureEvents} />

            <EventsSection title={"THEMES EXPERIENCES"} subtitle={"Take your guests on a unique adventure with themed experiences that showcase India's rich culture, history, and diverse flavors."} events={signatureEvents} />

            <AppointmentComponent />
        </div>
    )
}

export default Events
