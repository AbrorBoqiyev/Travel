import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import Privat from "./ProvateRoom";
import Travel from "./Travels";

function Allcomponents() {
    const location = useLocation()
    return(
        <>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Navigation/>}>
                    <Route index element={<Main/>} />
                    <Route path="/main" element={< Main />} />
                    <Route path="/travel" element={< Travel />} />
                    <Route path="/private" element={< Privat />} />
                </Route>
            </Routes>
        </>
    )
}


export default Allcomponents;