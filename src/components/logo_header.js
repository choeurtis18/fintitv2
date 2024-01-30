import logo from '../assets/logo.png';

const Logo_header = () => {
    return (
        <div className="w-full flex justify-center my-12 logo">
            <img className="w-32" src={logo} alt="image logo"></img>
        </div>
    )
};
  
export default Logo_header;