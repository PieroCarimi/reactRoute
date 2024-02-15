import React from "react";
import { NavLink } from "react-router-dom";
import Redirect from "./Redirect";
import { usePostDetails } from "../hooks/usePostDetails";
import styled from "styled-components";

const ContainerDiv = styled.div({
    marginTop: '25px',
    marginLeft: '100px',
    marginRight: '100px'
})

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
            <ContainerDiv>
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
            </ContainerDiv>
        )
    }else{
        return(
            <Redirect/>
        )
    }
}

export default Details;
