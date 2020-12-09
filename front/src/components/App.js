import React, {useState} from 'react';
import Users from "./Users";
import User from "./User";

const App = () => {
    const [selectUser, setSelectUser] = useState(null);

    const selectUserHandler = (user) => {
        setSelectUser(user)
    };

    return (
        <>
            {selectUser ?
                <User user={selectUser} selectUser={selectUserHandler}/> :
                <Users selectUser={selectUserHandler}/>
            }
        </>
    )
}

export default App;
