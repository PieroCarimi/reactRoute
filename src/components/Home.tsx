import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Button } from "./LoginButton";

function Home(){
    const [posts, setPosts] = useState<Array<{
        id: string;
        title: string;
    }> | null>(null);

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (!posts) return <div>Loading...</div>;

    return(
        <div>
            <Button/>
            <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/${post.id}`}>{post.title}</Link>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Home;