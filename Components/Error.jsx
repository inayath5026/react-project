import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();

    return (
        <div className="error-container">
            <h2 className="error-title">Oops...</h2>
            <p className="error-message">Something went wrong!</p>
            <p className="error-details">
                <strong>{err.status}</strong> - {err.statusText}
            </p>
            <p className="error-instructions">Please try again later or contact support.</p>
        </div>
    );
};

export default Error;
