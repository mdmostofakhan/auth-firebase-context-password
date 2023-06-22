import React, { useContext }  from 'react';
import { ThemContext } from '../providers/ThemProviders'


const Home = () => {
   const { user} = useContext(ThemContext)
       console.log(user)
    return (
        <div>
            <h3>This is Home {user && <span>{user.displayName}</span>} </h3>
        </div>
    );
};

export default Home;