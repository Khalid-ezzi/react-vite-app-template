import { Route, Routes } from "react-router-dom";
import App from "./App";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            {/* Add more routes here */}
        </Routes>
    );
}

export default Router;