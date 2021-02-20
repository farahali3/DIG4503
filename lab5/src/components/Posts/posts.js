import React, { useState, useEffect} from "react";
import axios from "axios";

const Posts=() => {
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
                const {id, title} = post;
                return (
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned to user: {id} </h6>
                    </div>
                )
            })}
        </div>
    );
}

export default Posts;