import { useEffect, useState } from "react";
import { IPost } from "../interfaces/interfaces";

export function usePosts() {
    const [posts, setPosts] = useState<Array<IPost> | null>(null);

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return posts;
}