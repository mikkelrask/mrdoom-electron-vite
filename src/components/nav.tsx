import { useState } from "react";
import "../App.css";

function Nav() {
  return (
    <>
      <header>
        <div id="logo"></div>
        <div id="search">
          <form>
            <input
              type="text"
              className="search-box"
              id="search-box"
              placeholder="Search"
            />
          </form>
        </div>
        <nav id="nav">
          <ul>
            <li className="nav-item nav-item-active">Games</li>
            <li className="nav-item">ModDB</li>
            <li className="nav-item">Install</li>
          </ul>
        </nav>
        <div id="user">
          <div id="user-card">
            <div id="user-avatar"></div>
            <div id="user-info">
              <p id="user-name">robotears</p>
              <p id="user-level">lvl.72</p>
            </div>
          </div>
          <div id="user-settings">svg-cog</div>
          <div id="user-advancements">svg-pocal</div>
        </div>
      </header>
    </>
  );
}

export default Nav;
