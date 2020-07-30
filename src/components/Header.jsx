import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import useDocumentScrollThrottled from "../modules/scrollHandler";

const Header = () => {
  const [shouldFillHeader, setShouldFillHeader] = useState(false);
  const [shouldNotFillHeader, setShouldNotFillHeader] = useState(true);

  const MINIMUM_SCROLL = 50;
  const TIMEOUT_DELAY = 20;

  useDocumentScrollThrottled((callbackData) => {
    const { currentScrollTop } = callbackData;
    const isScrolledDown = currentScrollTop !== 0;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldNotFillHeader(currentScrollTop < 20);

    setTimeout(() => {
      setShouldFillHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const transparentStyle = shouldNotFillHeader ? "transparent" : "filled";
  const scrollStyle = shouldFillHeader ? "fill" : "transparent";

  const [kliniken, setKliniken] = useState(false);
  return (
    <div style={styles.header}>
      <div></div>
      <header className={`header ${scrollStyle} ${transparentStyle}`} style={styles.headerContent}>
        <div
          onMouseEnter={() => setKliniken(true)}
          onMouseLeave={() => setKliniken(false)}
          style={{ color: "white" }}
          className="header-tab"
        >
          <NavLink to="/contact" className="header-tab" style={styles.links}>
            contact
        </NavLink>
        </div>
        <div>
          <NavLink to="/blog" className="header-tab" style={styles.links}>
            blog
        </NavLink>
        </div>
        <div>
          <NavLink to="/books" className="header-tab" style={styles.links}>
            books
        </NavLink>
        </div>
        <div>
          <NavLink to="/about" className="header-tab" style={styles.links}>
            about
        </NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header

const styles = {
  header: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#e2ddd1',
    position: 'sticky',
    zIndex: 1,
    textAlign: 'center',
    top: 0,
    overflow: 'hidden',
    // borderBottom: 'black 2px solid',
    transform: 'translateY(0)',
    transition: '0.8s ease',
  },
  headerContent: {
    marginRight: '7%',
    // textAlign: 'right',
    // alignItems: 'right'
  },
  links: {
    float: 'right',
    margin: '1.5%',
    fontSize: '1.5rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: '#31527B',
    textAlign: 'bottom'
  }
}
