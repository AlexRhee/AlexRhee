import NavMenu from "../NavMenu";
import React from "react";

var ExecutionEnvironment = require('exenv');
var cx = require('classnames');

class NavStick extends React.Component {
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.handleScroll, false);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  getInitialState() {
    return {
      hidden: true
    };
  }
  render() {
    var navClasses = cx({
      'nav': true,
      'hidden': this.state.hidden
    });
    return (
      <div className={navClasses} ref="navRef">
      
        <div className="nav-inner">
        <NavMenu />
        </div>
      </div>
    );
  }
  handleScroll() {
    // Navbar is 60px in height. Could also get height of DOM node here using
    // findDOMNode(this.refs.navRef) and subtract that.
    
    var heightToShow = window.innerHeight - 60;

    if (window.pageYOffset > heightToShow) {
      this.setState({ hidden: false });
    }

    if (window.pageYOffset < heightToShow) {
      this.setState({ hidden: true });
    }
  }
};

module.exports = NavStick;