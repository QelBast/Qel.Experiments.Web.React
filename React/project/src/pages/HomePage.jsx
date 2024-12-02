import UserList from "../components/User/UserList";
import PostList from "../components/Post/PostList";
import React, {useEffect, useState} from "react";
import axios from "axios";

export const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const userPosts = currentUser ? posts.filter(post => post.userId === currentUser.id) : posts;

    useEffect(() => {
        async function fetchData() {
            try {
                const axInst = axios.create({
                    baseURL: 'https://jsonplaceholder.typicode.com/',
                    timeout: 10000,
                    headers: {}
                })
                const [usersResponse, postsResponse] = await Promise.all([
                    axInst.get('users'),
                    axInst.get('posts')
                ]);

                setUsers(usersResponse.data);
                setPosts(postsResponse.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <UserList users={users} onUserSelect={setCurrentUser}/>
            <PostList user={currentUser} posts={userPosts}/>
        </>
    );
}