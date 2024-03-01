import { useRouteError } from "react-router-dom";
import React from "react"

const ErrorPage = ()=>{
    const err = useRouteError();
    return(
        <div className="error-page">
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}
export default ErrorPage;