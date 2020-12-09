import React from 'react';
import {useQuery} from 'react-apollo-hooks';
import gql from 'graphql-tag';
import UserCharacter from "./UserCharacter";

const GET_USERS = gql`
    {
        users {
            id
            name
            age
            booksObjectCount
        }
    }
`;

const Users = ({selectUser}) => {
    const {loading, error, data} = useQuery(GET_USERS);

    if (loading) return 'ロード中....';
    if (error) return `Error ${error.message}`;
    return (
        <div>
            {data.users.map(user => (
                <div key={user.id} onClick={selectUser.bind(this, user)}>
                    <UserCharacter user={user}/>
                </div>
            ))}
        </div>
    )
}

export default Users;
