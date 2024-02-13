import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Redirect from "./Redirect";
import { IPostComments, IPostDetails } from "../interfaces/interfaces";
import { usePostDetails } from "../hooks/usePostDetails";

function Details() {
    const {postDetail, postComments} = usePostDetails()

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
