import { IPost, IPostComments, IPostDetails } from "../interfaces/interfaces";

export const utilityGetIsLogged = (): boolean => {
    const isLoggedString = localStorage.getItem("isLogged");
    return isLoggedString ? JSON.parse(isLoggedString) : false;
};

export const utilitySetIsLogged = (isLogged: boolean): void => {
    localStorage.setItem("isLogged", JSON.stringify(isLogged));
}

export const utilityGetPosts = () => {
    const storedPosts = sessionStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : null;
}

export const utilitySetPosts = (data: IPost) => {
    sessionStorage.setItem("posts", JSON.stringify(data));
}

export const utilityGetPostDetail = (idPost: string | undefined) => {
    const storedPostDetail = sessionStorage.getItem(`postDetail_${idPost}`);
    return storedPostDetail ? JSON.parse(storedPostDetail) : null;
}

export const utilitySetPostDetail = (idPost: string | undefined, data: IPostDetails) => {
    sessionStorage.setItem(`postDetail_${idPost}`, JSON.stringify(data));
}

export const utilityGetPostComments = (idPost: string | undefined) => {
    const storedComments = sessionStorage.getItem(`postComments_${idPost}`);
    return storedComments ? JSON.parse(storedComments) : [];
}

export const utilitySetPostComments = (idPost: string | undefined, data: IPostComments) => {
    sessionStorage.setItem(`postComments_${idPost}`, JSON.stringify(data));
}