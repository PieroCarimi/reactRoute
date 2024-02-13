import { Link } from "react-router-dom";
import { Button } from "./LoginButton";
import { usePosts } from "../hooks/usePosts";

function Home(){
    const posts = usePosts()

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