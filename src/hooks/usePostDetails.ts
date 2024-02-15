import { useEffect, useState } from "react";
import { IPostComments, IPostDetails } from "../interfaces/interfaces";
import { useParams } from "react-router-dom";
import { utilityGetPostComments, utilityGetPostDetail, utilitySetPostComments, utilitySetPostDetail } from "../utilities/utilities";

export function usePostDetails(){
    const { idPost } = useParams();

    const [postDetail, setPostDetail] = useState<IPostDetails | null>(utilityGetPostDetail(idPost));

    const [postComments, setComments] = useState<Array<IPostComments>>(utilityGetPostComments(idPost));

    const getPostDetail = async (idPost: string) => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`);
        const data = await response.json();
        setPostDetail(data);
        utilitySetPostDetail(idPost, data);
    }

    const getComments = async (idPost: string) => {
        const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
        const data = await response.json();
        setComments(data);
        utilitySetPostComments(idPost, data);
    }

    useEffect(() => {
        if(idPost){
            if (!postDetail) {
                getPostDetail(idPost);
            }
            if(postDetail && postComments.length === 0){
                getComments(idPost);
            }
        }
    }, [idPost, postDetail, postComments]); // Chiamata solo una volta quando il componente viene montato

    return {postDetail, postComments};
}