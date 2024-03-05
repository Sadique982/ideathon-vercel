import React from "react";

import './Main.css'
import aboutImage from './images/About.svg';
import ruleImage from './images/Rules.png';
import faqImage from './images/Faq.png';
import timeImage from './images/Timing.png';
import contactImage from './images/Contact.png';
import eventImage from './images/Event.png';
const Main = () => {
    return (
        <main className="bg-dark text-white ">
            <div className="container vh-100 vw-100 text-center" id="home">
                <h1 className="pt-5">Innøveďa</h1>
                <h6>&quot;Igniting Innovations, Celebrating Tradition&quot;</h6>
                <span className="text-dark p-1">March&nbsp;14th</span>
                <div>
                    <ul class="d-flex justify-content-around mt-3">
                        <li class="p-2">
                            <a href="#Event">
                                <img src={eventImage} alt="Event" />
                                <p>Our Event</p>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#About">
                                <img src={aboutImage} alt="About" />
                                <p>About us</p>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#Rule">
                                <img src={ruleImage} alt="Rules" />
                                <p>Rules</p>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#Timing">
                                <img src={timeImage} alt="About" />
                                <p>Timing</p>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#FAQ">
                                <img src={faqImage} alt="About" />
                                <p>FAQ</p>
                            </a>
                        </li>
                        <li class="p-2">
                            <a href="#Contact">
                                <img src={contactImage} alt="About" />
                                <p>Contact us!</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container vh-100 vw-100 text-center" id="Event">
                <h2>Event</h2>
                <span class="text-dark p-1">A launchpad for startup-minded innovators</span>
                <p>
                    Innoveda is a platform for students to showcase their innovative ideas and creativity. The event is a launchpad for startup-minded innovators and tech enthusiasts to create disruptive solutions that address real-world problems.
                </p>
            </div>
            <div className="container vh-100 vw-100 text-center" id="About">
                <h2>
                    About us
                </h2>
                <p>
                    CodeChef ADGIPS & ECELL ADGIPS are dynamic communities of tech enthusiasts and entrepreneurship enthusiasts who are committed to promoting creativity and problem-solving. We are revolutionizers and with the power of our ideas intend to bring about a positive change in the world that would make it a better place for everyone to live in. Constantly developing and building ourselves is our motto. Everyone can materialize what they fantasize about, it’s just a matter of opening one’s eyes and putting in the right amount of faith and hard work. Our shared goal is to inspire meaningful impact and innovation, creating a transformative space where technology meets empowerment.
                </p>
            </div>

        </main>
    )
};

export default Main;
