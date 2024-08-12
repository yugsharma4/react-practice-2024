import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <p>Oops!!! Something went wrong</p>
      {error.status} : {error.statusText}
    </div>
  );
};

export default ErrorPage;
