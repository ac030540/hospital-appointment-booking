import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

// This component nests other components in it.
// It is used to scroll the page back to top when the route is changed.
class ScrollToTop extends Component {
  // After mounting of components if the path is not the same as the previous
  // path then we move to the top.
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const { pathname: currentLocation } = location;
    const { pathname: prevLocation } = prevProps.location;
    if (currentLocation !== prevLocation) {
      window.scrollTo(0, 0);
    }
  }

  // Since it nests other components,
  // we render the nested components (children).
  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};

export default withRouter(ScrollToTop);
