"use strict";

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                  <li><a>Rob Byrne - Duber</a></li>
                <li><a href="/">Sign Up</a></li>
                <li><a href="/#signIn">Sign In</a></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;