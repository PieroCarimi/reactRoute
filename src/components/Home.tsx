import { Link } from "react-router-dom";
import { Button } from "./LoginButton";
import { usePosts } from "../hooks/usePosts";
import styled from "styled-components";
import { utilityGetPostDetail } from "../utilities/utilities";

const StyledPostLink = styled(Link)(({id}) => ({
    
    color: utilityGetPostDetail(id) ? "red" : "inherit",
}));

const ContainerDiv = styled.div({
    marginLeft: '100px',
    marginRight: '100px'
})


function Home(){
    const posts = usePosts()

    if (!posts) return <div>Loading...</div>;

    return(
        <ContainerDiv>
            <Button/>
            <h1>Lista post:</h1>
            <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <StyledPostLink to={`/${post.id}`} id={post.id}>{post.title}</StyledPostLink>
                </li>
            ))}
            </ul>
        </ContainerDiv>
    );
}

export default Home;