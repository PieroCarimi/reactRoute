export interface IPost {
    id: string;
    title: string;
}

export interface IPostDetails extends IPost {
    body: string;
}

export interface IPostComments {
    id: string;
    name: string;
    email: string;
    body: string;
}