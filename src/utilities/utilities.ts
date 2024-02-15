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

export const utilitySetPosts = (data: any) => {
    sessionStorage.setItem("posts", JSON.stringify(data));
}

export const utilityGetPostDetail = (idPost: any) => {
    const storedPostDetail = sessionStorage.getItem(`postDetail_${idPost}`);
    return storedPostDetail ? JSON.parse(storedPostDetail) : null;
}

export const utilitySetPostDetail = (idPost: any, data: any) => {
    sessionStorage.setItem(`postDetail_${idPost}`, JSON.stringify(data));
}

export const utilityGetPostComments = (idPost: any) => {
    const storedComments = sessionStorage.getItem(`postComments_${idPost}`);
    return storedComments ? JSON.parse(storedComments) : [];
}

export const utilitySetPostComments = (idPost: any, data: any) => {
    sessionStorage.setItem(`postComments_${idPost}`, JSON.stringify(data));
}