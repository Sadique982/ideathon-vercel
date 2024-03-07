import React from "react";
import './Main.css';
import aboutImage from './images/About.svg';
import mainImage from './images/main.png';
import ruleImage from './images/Rules.png';
import faqImage from './images/Faq.png';
import timeImage from './images/Timing.png';
import contactImage from './images/Contact.png';
import eventImage from './images/Event.png';
const Main = () => {
    return (<>

        <main className="text-white-50 vh-80  text-center">
            <div id="logo">
                <h1 className="pt-5">Innøveďa</h1>
                <h6>&quot;Igniting Innovations, Celebrating Tradition&quot;</h6>
                <span className="text-dark p-1">March&nbsp;14th</span>
            </div>
            <div id="nav">
                <ul class="d-flex justify-content-around mt-3">
                    <li class="p-2">
                        <a href="#About">
                            <img src={aboutImage} alt="Event" />
                            <p>About us</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#Event">
                            <img src={eventImage} alt="Event" />
                            <p>Our Event</p>
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
                            <img src={timeImage} alt="Timing" />
                            <p>Timing</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#FAQ">
                            <img src={faqImage} alt="FAQ" />
                            <p>FAQ</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#Contact">
                            <img src={contactImage} alt="Contact" />
                            <p>Contact us!</p>
                        </a>
                    </li>
                </ul>
            </div>
        </main>

        <section className="text-white text-center vh-100 " id="About">
            <h2>About us</h2>
            <p className="container">
                CodeChef ADGIPS & ECELL ADGIPS are dynamic communities of tech enthusiasts and entrepreneurship enthusiasts who are committed to promoting creativity and problem solving.
                <br /><br />
                We are revolutionizers and with the power of our ideas intend to bring about a positive change in the world that would make it a better place for everyone to live in. Constantly developing and building ourselves is our motto.
                <br /><br />
                Everyone can materialize what they fantasize about, it’s just a matter of opening one’s eyes and putting in the right amount of faith and hard work. Our shared goal is to inspire meaningful impact and innovation, creating a transformative space where technology meets empowerment
            </p>
        </section>

        <section className="text-white text-center" id="Event">
            <h2>Event</h2>
            {/* <div id="ccXecell">
                <img src={mainImage} alt="CodeChefXEcell" />
            </div> */}
            <p className="container">
                Innoveda is a launchpad for startup minded innovators and tech enthusiasts to create disruptive solutions that address real-world problems.
            </p>
            <aside>

            </aside>
        </section>


        <summary className="text-center text-white " id="FAQ">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                               Question
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur aperiam obcaecati in reprehenderit perferendis! Repellat autem nemo atque dolorem eligendi aliquam sed error molestias possimus dolore laboriosam in, provident inventore!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Add more FAQ items as needed */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="heading1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                               Question
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur aperiam obcaecati in reprehenderit perferendis! Repellat autem nemo atque dolorem eligendi aliquam sed error molestias possimus dolore laboriosam in, provident inventore!
                                </p>
                            </div>
                        </div>
                    </div>
                     {/* Add more FAQ items as needed */}
                </div>
            </div>
        </summary>



        <footer className="text-center bg-black" id="Contact">
            <h4>Contact Information</h4>
            <span>Reach out to us for any inquiries or support.</span><br /><br />
            <div>
            <p>Email:&nbsp;
                <a href="mailto:ecelladgitm@gmail.com" target="_blank"> ecelladgitm@gmail.com</a>
            </p>
            <p>Phone:&nbsp;
                <a href="tel:9899534496" target="_blank">Khushal Vashisth: 9899534496</a>
            </p>
            </div>
            <div>
            <p>Email:&nbsp;
                <a href="mailto:codechef.adgitm@adgitmdelhi.ac.in" target="_blank"> codechef.adgitm@adgitmdelhi.ac.in</a>
            </p>
            <p>Phone:&nbsp;
                <a href="tel:9953930377" target="_blank">Mansi Sharma: 9953930377</a>
            </p>
            </div>
            
        </footer>
    </>)
};
export default Main;