import PropTypes from "prop-types"
import React from "react"
import './header.scss';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div
        style={{
					margin: `0 auto`,
					padding: `1.45rem 1.0875rem`,
				}}
      >
        <h1 className="siteTitle">
					{siteTitle.split('').map((letter, i) => <span key={i}>{letter}</span>)}
        </h1>
      </div>
    </header>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
