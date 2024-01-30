import logo from '../assets/logo.png';

import Location_header from "../components/location_header";

const Home = () => {
    return (
    <div>
        <div className="w-full flex justify-center my-12 logo">
            <img className="w-32" src={logo} alt="image logo"></img>
        </div>

        <Location_header></Location_header>

    </div>
    );
};
  
export default Home;