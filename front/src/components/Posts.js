import React from 'react';

const Posts = ({posts, user}) => {
    return (
        <>
            <h1>{user.name}</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h3>{post.body}</h3>
                </div>
            ))
            }
        </>
    )
}

export default Posts;
