import React from "react";
import "./PostList.css"

const PostList = ({ user, posts }) => {
    return (
        <div className="post-list">
            <h1>{user ? `Посты пользователя ${user.name}` : 'Выберите пользователя'}</h1>
            {posts.map(post => (
                <div key={post.id} className="post-item">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList;