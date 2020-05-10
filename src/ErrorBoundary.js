// mostly code from reactjs.org/docs/error-boundaries.html
import React, { Component } from "react";
import { Link, Redirect, navigate } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false }
  /*
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  */

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Errorboundary caught an err", error, errorInfo)
    // logErrorToMyService(error, errorInfo); - Azure monitor, TrackJS, Sentry
  }

  componentDidUpdate() { // like useEffect, will be run in each change of state or props
    if (this.state.hasError) {
      // setTimeout(() => navigate('/'), 5000)
      setTimeout(() => this.setState({ redirect: true }), 5000)
    }
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>
          There was an error with this listing.
          <Link to="/"> Click here </Link>
          to go back to the home page or wait five seconds.
        </h1>)
    }

    return this.props.children;
  }
}

export default ErrorBoundary;