import { HashRouter, Routes, Route } from "react-router-dom";
import UserOnlineChat from "./components/ChatBox/userOnlineChatStatus";
import LandingPage from "./components/Landing Page/landingPage";
import ComingSoon from "./components/User Details/comingSoon";
import ShowUserDetailsOnPageWhenClicked from "./components/User Details/userDetailsPage";

const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<LandingPage/>}/>
                <Route exact path="/userDetailsPage/:selecteduserid" element={<ShowUserDetailsOnPageWhenClicked/>}/>
                <Route exact path="/comingSoon" element={<ComingSoon/>}/>
                <Route exact path="/userOnlineChatStatus" element={<UserOnlineChat/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;