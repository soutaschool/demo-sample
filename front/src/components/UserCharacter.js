import React from 'react';

const UserCharacter = (user) => {
    return (
        <>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.booksObjectCount}</h3>
        </>
    )
}

export default UserCharacter;
