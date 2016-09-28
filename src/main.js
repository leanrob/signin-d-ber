$ = jQuery = require('jquery');
var React = require('react');
var SignUp = require('./components/signUpPage');
var SignIn = require('./components/signIn/signInPage');
var Header = require('./components/common/header');

(function(win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route) {
				case 'signIn': Child = SignIn; break;
				default: Child = SignUp;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);

		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);