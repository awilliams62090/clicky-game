import React from "react";
import "./footer.css"

const Footer = () => (

    <footer className="footer">
        <div>
            <ul id="footerSpan">
                <li>
                    <span>
                        <a
                            href="https://github.com/awilliams62090/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer">
                            <img src="assets/images/GitHub-Mark-Dark-32px.png" alt="github"/>
                        </a>
                    </span>
                </li>
                <li>
                    <span>
                        <a
                            href="https://www.linkedin.com/in/alyssa-williams-63bbb676/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="footer">
                            © 2018 Alyssa Williams</a>
                    </span>
                </li>

            </ul>
        </div>
    </footer>
)

export default Footer;