import React from "react";
import './Main.css';

import ruleImage from './images/Rules.png';
import faqImage from './images/Faq.png';
import timeImage from './images/Timing.png';
import contactImage from './images/Contact.png';
import eventImage from './images/Event.png';
const Main = () => {
    return (
        <>
            <main className="bg-black text-white-50 vh-100 vw-100 text-center">
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
            <section className="bg-black" id="Event">
                <h2 className="text-center text-decoration-none ">Event Detail</h2>
                <div className="d-flex">
                    <aside id="About" className="text-white">
                        <h2 className="text-center text-white-50">About Us</h2>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae nostrum saepe totam unde eius, minus atque soluta dolor dignissimos doloremque molestias quidem eum corporis error quasi neque repellat voluptate!
                        Porro placeat consectetur saepe dolor tempora quasi distinctio ex molestias nam, eius ipsa libero quidem rerum at cupiditate dicta quisquam laborum! Quibusdam ut ea officia temporibus harum quas error possimus?
                        A voluptate corporis sit fugit dolorum aut eligendi provident porro odio molestiae suscipit omnis perferendis similique officiis reiciendis, consequuntur est, iste optio, facere ad aliquid at ea! Ducimus, iste doloribus?
                        Iusto ducimus rem cumque itaque sed cum dignissimos accusantium, corrupti dolore voluptas est, obcaecati fugit ipsa, id tenetur odit voluptates ipsum repellat non nihil? Architecto veniam sequi temporibus esse deleniti.
                        Asperiores vitae nihil suscipit accusamus corrupti! Quae maxime consectetur sint totam distinctio! Corrupti accusantium odio molestiae maiores! In, perferendis vitae doloremque rem soluta nam praesentium distinctio, fugiat, id animi autem.
                    </aside>
                    <aside id="About" className="text-white">
                        <h2 className="text-center text-white-50">About Us</h2>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima recusandae nostrum saepe totam unde eius, minus atque soluta dolor dignissimos doloremque molestias quidem eum corporis error quasi neque repellat voluptate!
                        Porro placeat consectetur saepe dolor tempora quasi distinctio ex molestias nam, eius ipsa libero quidem rerum at cupiditate dicta quisquam laborum! Quibusdam ut ea officia temporibus harum quas error possimus?
                        A voluptate corporis sit fugit dolorum aut eligendi provident porro odio molestiae suscipit omnis perferendis similique officiis reiciendis, consequuntur est, iste optio, facere ad aliquid at ea! Ducimus, iste doloribus?
                        Iusto ducimus rem cumque itaque sed cum dignissimos accusantium, corrupti dolore voluptas est, obcaecati fugit ipsa, id tenetur odit voluptates ipsum repellat non nihil? Architecto veniam sequi temporibus esse deleniti.
                        Asperiores vitae nihil suscipit accusamus corrupti! Quae maxime consectetur sint totam distinctio! Corrupti accusantium odio molestiae maiores! In, perferendis vitae doloremque rem soluta nam praesentium distinctio, fugiat, id animi autem.
                    </aside>
                    </div>
                </section>
                <footer className="text-center bg-black" id="Contact">
                    <h4>Contact Information</h4>
                    <span>Reach out to us for any inquiries or support.</span><br /><br />
                    <p>Email:&nbsp;
                        <a href="mailto:ecelladgitm@gmail.com" target="_blank"> ecelladgitm@gmail.com</a>
                    </p>
                    <p>Email:&nbsp;
                        <a href="mailto:codechef.adgitm@adgitmdelhi.ac.in" target="_blank"> codechef.adgitm@adgitmdelhi.ac.in</a>
                    </p>
                    <p>Phone:&nbsp;
                        <a href="tel:9899534496" target="_blank">Khushal Vashisth: 9899534496</a>
                    </p>
                    <p>Phone:&nbsp;
                        <a href="tel:9953930377" target="_blank">Mansi Sharma: 9953930377</a>
                    </p>
                </footer>
        </>
    )
};

export default Main;