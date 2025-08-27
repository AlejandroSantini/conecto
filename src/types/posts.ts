export interface Post {
    id: string;
    name: string;
    avatar: string;
    title: string;
    content: string;
    createdAt: string;
}

export interface Comment {
    id: string;
    parentId: string | null;
    name: string;
    avatar: string;
    content: string;
    createdAt: string;
}
