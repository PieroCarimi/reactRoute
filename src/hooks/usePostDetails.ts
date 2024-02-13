import { useEffect, useState } from "react";
import { IPostComments, IPostDetails } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";

export function usePostDetails(){
    const [postDetail, setPostDetail] = useState<IPostDetails | null>(null);

    const [postComments, setComments] = useState<Array<IPostComments>>([]);

    const { idPost } = useParams();

    const getPostDetail = async (idPost: string) => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        const data = await response.json();
        setPostDetail(data);
    }

    const getComments = async (idPost: string) => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
        const data = await response.json();
        setComments(data);
    }

    useEffect(() => {
        if(idPost){
            getPostDetail(idPost);
            getComments(idPost);
        }
    }, [idPost]); // Chiamata solo una volta quando il componente viene montato

    return {postDetail, postComments};
}