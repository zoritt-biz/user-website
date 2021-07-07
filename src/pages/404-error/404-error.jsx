import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => (
  <div className="pt-5 mt-5 text-center">
    <h3>Page Not Found</h3>
    <Link to="/">Go to Home</Link>
  </div>
);

export default ErrorPage;