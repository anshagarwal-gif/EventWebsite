import React from 'react'
import './events.css'
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import backgroundImage from './assets/image.png';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';
import EventsSection from './EventsSection';
import Persona from './assets/Persona.svg'
import VSM from './assets/VSM.svg'
import Spectra from './assets/Spectra.svg'
import Wedding from './assets/Wedding.svg'
import Holi from './assets/Holi.svg'
import Housewarming from './assets/House Warming.svg'
import Summit from './assets/Summit.svg'
import Development from './assets/Development.svg'
import Corporate from './assets/Corporate.svg'
import Concert from './assets/Concert.svg'
import Corporate2 from './assets/Corporate 2.svg'
import Bollywood from './assets/Bollywood.svg'

const Events = () => {

    const signatureEvents = [
        {
            title: "Persona",
            description: "Embark on a culinary journey through the diverse flavors of India.",
            image: Persona,
          },
          {
            title: "VSM",
            description: "Celebrate the magic of Indian cinema with a dazzling gala inspired by Bollywood.",
            image: VSM,
          },
          {
            title: "Spectra",
            description: "Immerse your guests in the opulence of a bygone era with a Maharaja-themed ball featuring traditional Indian décor",
            image: Spectra,
          }
    ]

    const socialGatherings = [
        {
            title: "Wedding Events",
            description: "Make your pre-wedding celebration a vibrant and joyous occasion with a meticulously planned Mehndi ceremony.",
            image: Wedding,
          },
          {
            title: "Holi Bash",
            description: "Embrace the spirit of colors with a vibrant Holi bash.",
            image: Holi,
          },
          {
            title: "Housewarming Ceremony",
            description: "Celebrate a new beginning with a stylish housewarming soirée.",
            image: Housewarming,
          }
    ]

    const meetings = [
        {
            title: "Summit Conferences",
            description: "Explore the ancient Indian science of Ayurveda at a thought-provoking summit.",
            image: Summit,
          },
          {
            title: "Development Conference",
            description: "A platform for key stakeholders to discuss and implement sustainability.",
            image: Development,
          },
          {
            title: "Corporate Events",
            description: "Empowering women entrepreneurs and leaders in India.",
            image: Corporate,
          }
    ]

    const themedExperiences = [
        {
            title: "Concert Production",
            description: "Embrace the beauty of the monsoon season with a mystical masquerade ball.",
            image: Concert,
          },
          {
            title: "Corporate Event",
            description: "Embark on a culinary adventure along the ancient spice route.",
            image: Corporate2,
          },
          {
            title: "Bollywood Night",
            description: "Go behind the scenes of the vibrant Bollywood film industry with a one-of-a-kind studio tour.",
            image: Bollywood,
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

            <EventsSection title={"SOCIAL GATHERINGS"} subtitle={"Make your social events vibrant and joyous with our expertise in planning traditional ceremonies, lively parties, and stylish soirees."} events={socialGatherings} />

            <EventsSection title={"MEETING AND CONFERENCES"} subtitle={"Host thought-provoking conferences, summits, and forums that address key issues and foster collaboration in India."} events={meetings} />

            <EventsSection title={"THEMES EXPERIENCES"} subtitle={"Take your guests on a unique adventure with themed experiences that showcase India's rich culture, history, and diverse flavors."} events={themedExperiences} />

            <AppointmentComponent />
        </div>
    )
}

export default Events
