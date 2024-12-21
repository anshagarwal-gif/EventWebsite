import React from 'react'
import './HeroComponent.css'

const HeroComponent = ({ backgroundImageUrl, title, subtitle1, subtitle2 }) => {

    let styleObject = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    };

    return (
        <section className="heromain" style={styleObject}>
            <div className="herocontent">
                <h1 className="herotitle">{title}</h1>
                <p className="herosubtitle">{subtitle1}</p>
                <p>{subtitle2}</p>
            </div>
        </section>
    )
}

export default HeroComponent
