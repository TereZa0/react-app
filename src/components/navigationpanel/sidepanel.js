import React from "react";
import "../../css/sidepanel.css"
import logos from "../../resources/img/icons8-system-information-100 (1).png"

class SidePanel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const body = document.querySelector('body'),
            sidebar = body.querySelector('#nav'),
            toggle = body.querySelector(".toggle"),
            searchBtn = body.querySelector(".search-box"),
            modeSwitch = body.querySelector(".toggle-switch"),
            modeText = body.querySelector(".mode-text");


        const togglePanel = () => {
            var nav = document.getElementById('nav');

            // console.log(document.getElementById('nav').className);
            if (nav.classList.contains('close')) {
                if (window.innerWidth < 500) {

                    nav.style.position = "fixed";

                    // nav.style.position = "sticky";
                    // // console.log(document.getElementById('nav'));
                    // console.log(window.innerWidth);
                    // console.log("ContainCLose");
                    // nav.classList.toggle('toggle')
                    // if (nav.classList.contains('sticky')) {
                    //     nav.classList.toggle('sticky')
                    //     nav.classList.toggle('fixed')
                    // }
                    // else {
                    //     nav.classList.toggle('fixed')
                    // }
                }
                // body.querySelector('#nav').classList.toggle('close')
                return nav.classList.toggle('close');
            }
            // (!nav.classList.contains("close"))
            if (!nav.classList.contains('close')) {
                const ChangePost = () =>{
                    nav.style.position = "sticky"
                }

                // body.querySelector('#nav').classList.toggle('close')
                nav.classList.toggle('close');
                if (window.innerWidth < 500) {

                    setTimeout(
                        ChangePost,
                        200
                    );

                    // nav.style.position = "fixed";
                    // console.log(window.innerWidth);
                    // console.log("NotCLose");
                    // nav.classList.toggle('toggle')
                    // if (nav.classList.contains('fixed')) {
                    //     nav.classList.toggle('fixed')
                    //     nav.classList.contains('sticky')
                    // }
                    // else {
                    //     nav.classList.toggle('fixed')
                    // }
                }
            }
        }

        const srcClose = () => {
            sidebar.classList.remove("close");
        }

        const switchMode = () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                // modeText.innerText = ;
                body.querySelector(".mode-text").innerText = "Dark Mode";

                document.getElementById('bone').style.backgroundColor = "#282c34";
                document.getElementById('bone').style.color = "#fff";

                document.getElementById('logo-text').style.backgroundColor = "#333436";
                document.getElementById('logo-text').style.color = "#fff";

                document.getElementById('nav').style.borderColor = "#2e2f30";
            } else {
                // modeText.innerText = "Dark mode";
                body.querySelector(".mode-text").innerText = "Light Mode";

                document.getElementById('bone').style.backgroundColor = "#fff";
                document.getElementById('bone').style.color = "#000000";

                document.getElementById('logo-text').style.backgroundColor = "#eae9f7";
                document.getElementById('logo-text').style.color = "#707070";

                document.getElementById('nav').style.borderColor = "#e3e2de";
            }
        }

        return (
            <nav className="sidebar close" id="nav" style={{ borderRight: "1px solid #e3e2de" }}>
                <header>
                    <div className="image-text" id="logo-text" style={{ borderRadius: "6px", backgroundColor: "#eae9f7", padding: "5px", paddingLeft: "2px" }}>
                        <span className="image">
                            <img src={logos} alt="WebIcon" />
                        </span>

                        <div className="text logo-text">
                            <span className="name">Codinglab</span>
                            <span className="profession">Web developer</span>
                        </div>
                    </div>

                    <i className='bx bx-chevron-right toggle' onClick={togglePanel}></i>
                </header>

                <div className="menu-bar">
                    <div className="menu">

                        <li className="search-box" onClick={srcClose}>
                            <i className='bx bx-search icon'></i>
                            <input type="text" className="input-search-box" placeholder="Search..." />
                        </li>

                        <ul className="menu-links">
                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-home-alt icon' ></i>
                                    <span className="text nav-text">Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                    <span className="text nav-text">Revenue</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-bell icon'></i>
                                    <span className="text nav-text">Notifications</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-pie-chart-alt icon' ></i>
                                    <span className="text nav-text">Analytics</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-heart icon' ></i>
                                    <span className="text nav-text">Likes</span>
                                </a>
                            </li>

                            <li className="nav-link">
                                <a href="#" className="a-link">
                                    <i className='bx bx-wallet icon' ></i>
                                    <span className="text nav-text">Wallets</span>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className="bottom-content">
                        <li className="">
                            <a href="#">
                                <i className='bx bx-log-out icon' ></i>
                                <span className="text nav-text">Logout</span>
                            </a>
                        </li>

                        <li className="mode">
                            <div className="sun-moon">
                                <i className='bx bx-sun icon sun'></i>
                                <i className='bx bx-moon icon moon'></i>
                            </div>
                            <span className="mode-text text">Light Mode</span>

                            <div className="toggle-switch" onClick={switchMode}>
                                <span className="switch"></span>
                            </div>
                        </li>

                    </div>
                </div>

            </nav>
        );
    }
}

export default SidePanel;