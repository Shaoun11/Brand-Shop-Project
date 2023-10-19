import { useContext } from 'react';

import { Navigate} from 'react-router-dom';
import { Authcontext } from './Authrovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
  
    if (user) {
        return children
    }
     return <Navigate to={"/login"} ></Navigate>

  
};

export default PrivateRoute;