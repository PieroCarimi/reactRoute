import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Redirect from "./Redirect";

function Details() {
    const [postDetail, setPostDetail] = useState<{
        id: string;
        title: string;
        body: string;
    } | null>(null);

    const [postComments, setComments] = useState<Array<{
        id: string;
        name: string;
        email: string;
        body: string;
    }> | []>([]);

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

    if (!postDetail) {
        return <div>Loading...</div>;
    }

    if (!postComments){
        return <div>Loading...</div>;
    }


    if (Object.keys(postDetail).length !== 0){
        
        return (
            <div>
                <NavLink to="/">Torna alla home</NavLink>
                <h1>Dettaglio post {postDetail.id}</h1>
                <h2>Titolo: {postDetail.title}</h2>
                <div>{postDetail.body}</div><br/>
                <h3>Commenti:</h3>
                {postComments.map((comment: any) => (
                    <div key={comment.id}>
                        <h4>{comment.name}, {comment.email}</h4>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        )
    }else{
        return(
            <Redirect/>
        )
    }
}

export default Details;
