import React, { useState, useEffect} from "react";
import axios from "axios";

const Posts= () => {
    const [posts, setPosts] = useState();

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then ((res) => {
        const responsivePosts = res.data;
        setPosts(responsivePosts);
});
    }, []);
    return (
        <div>
            <h1>To Do List</h1>
            {posts && 
            posts.map((post)=> {
                const {userId, body} = post;
                return (
                    <div key={userId}>
                        <h5>{body}</h5>
                        <h6>Assigned to user: {userId} </h6>
                    </div>
                )
            })}
        </div>
    );
}

export default Posts;
