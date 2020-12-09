import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import UserCharacter from "./UserCharacter";
import Posts from "./Posts";

const GET_USER = gql`
    query User($id: ID!) {
        user(id: $id) {
            books {
                id
                title
                body
            }
        }
    }
`;

const User = ({user, selectUser}) => {
    const {loading, error, data} = useQuery(GET_USER, {
        variables: {id: user.id}
    });

    if (loading) return 'ロード中....';
    if (error) return `Error ${error.message}`;

    return (
        <>
            <button onClick={selectUser.bind(this, null)}>
                Back
            </button>
            <UserCharacter user={user}/>
            <Posts posts={data.user.posts} user={user}/>
        </>
    )
}

export default User;
