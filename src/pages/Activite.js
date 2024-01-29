import {useParams} from "react-router-dom";

const Activite = () => {
    const {id} = useParams();

    return <h1>Activite {id}</h1>;
};
  
export default Activite;