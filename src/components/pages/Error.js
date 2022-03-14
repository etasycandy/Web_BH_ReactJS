import React from "react";

import Helmet from "../Helmet";

const Error = () => {
  return (
    <Helmet title="Error 404">
      <div className="error404">
        <div class="error404__noise"></div>
        <div class="error404__overlay"></div>
        <div class="error404__terminal">
          <h1>
            Error <span class="error404__terminal__errorcode">404</span>
          </h1>
          <p class="error404__terminal__output">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p class="error404__terminal__output">
            Please try to <a href="#1">go back</a> or{" "}
            <a href="#2">return to the homepage</a>.
          </p>
          <p class="error404__terminal__output">Good luck.</p>
        </div>
      </div>
    </Helmet>
  );
};

export default Error;
