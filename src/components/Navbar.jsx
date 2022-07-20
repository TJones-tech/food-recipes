import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import Sidebar from './Sidebar';

import { faHome, faList } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const location = useLocation()
  const links = [
      {
          name: "Main",
          path: "/",
          icon: faHome
      },
      {
          name: "Recipes",
          path: "/recipes",
          icon: faList
      },
      {
          name: "Specials",
          path: "/specials",
          icon: faList
      }
  ]

  function closeSidebar(){
    setShowSidebar(false)
}

  return (
    <>
        <div className="navbar container">
        <Link to="/" className="logo">G<span>rub</span>Pala<span>ce</span></Link>
        <div className="nav-links">
        { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
        </div>
        <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </div>
    { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
    </>
  )
}

export default Navbar