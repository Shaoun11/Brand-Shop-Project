import { useContext } from 'react';

import { Navigate} from 'react-router-dom';
import { Authcontext } from './Authrovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(Authcontext);
     
    if (loader) {
        return <div className='text-center'><span className=" bg-red-600 mt-72 loading loading-ring loading-lg"></span><p>Loding...</p></div>
    }
    if (user) {
        return children
    }
     return <Navigate to={"/login"} ></Navigate>

  
};

export default PrivateRoute;