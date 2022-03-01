export interface Post {
    id: number;
    userId: number;
    created : Date;
    title: string;
    body: string;
    likes: number;
    dislikes: number;
    isActive: boolean;
}