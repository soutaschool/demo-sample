import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_USERS = gql`
    {
        users{
            id
            name
            age
            books{
                id
                title
                body
            }
        }
    }
`;

const Demo = () => {
    const {loading, error, data} = useQuery(GET_USERS);
    const style = {
        color: "red"
    };

    if (loading) return 'ロード中....';
    if (error) return `Error ${error.message}`;
    return (
        <React.Fragment>
            {data.users.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h2>{user.age}</h2>
                    {user.books.map(book => (
                        <div key={book.id}>
                            <h1>{book.title}</h1>
                            <h2>{book.body}</h2>
                        </div>
                    ))};
                    <h1 style={style}>ここまでが{user.id}回目！</h1>
                </div>
            ))}

        </React.Fragment>
    )
};

export default Demo;
