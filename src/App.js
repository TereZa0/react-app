import logo from './logo.svg';
import './App.css';
import "./css/sidepanel.css";

import UserList from './components/users'
import Navbar from './components/navigationpanel/navbar'
import SidePanel from './components/navigationpanel/sidepanel';
import TrendingPanel from './components/trendingpanel'

import wf from './wf-1.jpg';
import bg1 from './bg-1.jpg';
import bg2 from './bg-2.jpg';
import bg3 from './bg-3.jpg';
import meteorFall from './resources/gif/1p3v.gif'

import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

function App() {

  return (
    <div className="App" id="baseApp" style={{ backgroundColor: "#282c34", color: "white" }}>
      <header>
        {/* <Navbar /> */}
        {/* #282c34 */}
      </header>
      <SidePanel />
      <div className="bone p-1" id="bone" style={{ backgroundColor: "#fff", color: "black" }}>
        <div className="container" id="containers" onLoad={checkDevice}>
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={Home()} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

const checkDevice = () => {
  if (window.innerWidth < 500) {
    const nav = document.getElementById('nav');
    const base = document.getElementById('baseApp');
    const rows = document.getElementById('secRow');
    const columns = document.getElementById('columns');

    nav.style.position = "sticky";
    nav.style.height = "100%";

    base.style.display = "flex";

    rows.style.display = "block";

    columns.style.width = "100%";
  }
}

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row" >
        <div className="col-sm-9" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "10px",
        }}>
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner" style={{ borderRadius: "10px", height: "35vw" }}>
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={bg2} className="d-block" alt="Jumbotron 1" style={{ width: "100%", display: "block", margin: "auto", marginRight: "auto" }} />
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={wf} className="d-block" alt="Jumbotron 2" style={{ width: "100%", display: "block" }} />
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={bg1} className="d-block" alt="Jumbotron 3" style={{ width: "100%", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div >
      <div className="row mt-3" id="secRow">
        <div className="col-sm-8 me-1 col mb-1" id="columns">
          <p style={{ marginBottom: "0", padding: "0", textAlign: "right", fontSize: "25px" }}>
            Latest Update
          </p>
          <hr style={{ marginTop: "0" }} />
          <UserList />
        </div>
        <div className="col ms-auto col col-r mb-1" id="columns">
          <p className="colText" >
            Trending
          </p>
          <hr style={{ marginTop: "0" }} />
          <TrendingPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
