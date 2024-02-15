import { useEffect, useState } from "react";
import { IPost } from "../interfaces/interfaces";
import { utilityGetPosts, utilitySetPosts } from "../utilities/utilities";

export function usePosts() {
    const [posts, setPosts] = useState<Array<IPost> | null>(utilityGetPosts());

    const getPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
        utilitySetPosts(data)
    }

    useEffect(() => {
        if (!posts){
            getPosts();
        }
    }, [posts]);

    return posts;
}